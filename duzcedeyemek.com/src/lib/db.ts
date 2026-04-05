import { createClient } from "@libsql/client";

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  category: string;
  tags: string | null;
  reading_time: number;
  published_at: string;
  updated_at: string;
  is_published: number;
}

const UPDATABLE_FIELDS = new Set([
  "title", "slug", "excerpt", "content", "cover_image",
  "category", "tags", "reading_time", "published_at", "is_published",
]);

function getClient() {
  if (process.env.TURSO_DATABASE_URL) {
    return createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  }
  return createClient({
    url: "file:db/blog.db",
  });
}

const db = getClient();

export interface User {
  id: number;
  username: string;
  password_hash: string;
  display_name: string;
  created_at: string;
}

export async function initDb() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      cover_image TEXT,
      category TEXT NOT NULL DEFAULT 'Genel',
      tags TEXT,
      reading_time INTEGER DEFAULT 5,
      published_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      is_published INTEGER DEFAULT 1
    )
  `);
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      display_name TEXT NOT NULL DEFAULT 'Admin',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
  await db.execute("CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug)");
  await db.execute("CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category)");
  await db.execute("CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at)");
  await db.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_users_username ON users(username)");
}

export async function getAllPosts(limit?: number): Promise<Post[]> {
  await initDb();
  const query = "SELECT * FROM posts WHERE is_published = 1 ORDER BY published_at DESC";
  if (limit) {
    const result = await db.execute({ sql: query + " LIMIT ?", args: [limit] });
    return result.rows as unknown as Post[];
  }
  const result = await db.execute(query);
  return result.rows as unknown as Post[];
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  await initDb();
  const result = await db.execute({
    sql: "SELECT * FROM posts WHERE is_published = 1 AND category = ? ORDER BY published_at DESC",
    args: [category],
  });
  return result.rows as unknown as Post[];
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  await initDb();
  const result = await db.execute({
    sql: "SELECT * FROM posts WHERE slug = ? AND is_published = 1",
    args: [slug],
  });
  return result.rows[0] as unknown as Post | undefined;
}

export async function getCategories(): Promise<string[]> {
  await initDb();
  const result = await db.execute(
    "SELECT DISTINCT category FROM posts WHERE is_published = 1 ORDER BY category"
  );
  return result.rows.map((r) => r.category as string);
}

export async function getPostCount(): Promise<number> {
  await initDb();
  const result = await db.execute(
    "SELECT COUNT(*) as count FROM posts WHERE is_published = 1"
  );
  return result.rows[0].count as number;
}

export async function createPost(post: Omit<Post, "id" | "updated_at">): Promise<Post> {
  await initDb();
  const result = await db.execute({
    sql: `INSERT INTO posts (title, slug, excerpt, content, cover_image, category, tags, reading_time, published_at, is_published)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      post.title, post.slug, post.excerpt, post.content,
      post.cover_image, post.category, post.tags,
      post.reading_time, post.published_at, post.is_published,
    ],
  });
  const newPost = await db.execute({
    sql: "SELECT * FROM posts WHERE id = ?",
    args: [Number(result.lastInsertRowid)],
  });
  return newPost.rows[0] as unknown as Post;
}

export async function updatePost(id: number, data: Partial<Post>): Promise<void> {
  await initDb();

  const safeData: Record<string, unknown> = {};
  for (const key of Object.keys(data)) {
    if (UPDATABLE_FIELDS.has(key)) {
      safeData[key] = (data as Record<string, unknown>)[key];
    }
  }
  if (Object.keys(safeData).length === 0) return;

  const setClauses = Object.keys(safeData).map((key) => `${key} = ?`).join(", ");
  const values = Object.values(safeData) as (string | number | null)[];

  await db.execute({
    sql: `UPDATE posts SET ${setClauses}, updated_at = datetime('now') WHERE id = ?`,
    args: [...values, id],
  });
}

export async function deletePost(id: number): Promise<void> {
  await initDb();
  await db.execute({ sql: "DELETE FROM posts WHERE id = ?", args: [id] });
}

export async function getAllTags(): Promise<string[]> {
  await initDb();
  const result = await db.execute(
    "SELECT tags FROM posts WHERE is_published = 1 AND tags IS NOT NULL"
  );
  const tagSet = new Set<string>();
  for (const row of result.rows) {
    const tags = (row.tags as string).split(",");
    for (const tag of tags) {
      const t = tag.trim();
      if (t) tagSet.add(t);
    }
  }
  return Array.from(tagSet).sort();
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  await initDb();
  const result = await db.execute({
    sql: "SELECT * FROM posts WHERE is_published = 1 AND (',' || tags || ',') LIKE ? ORDER BY published_at DESC",
    args: [`%,${tag},%`],
  });
  return result.rows as unknown as Post[];
}

export async function getRelatedPosts(postId: number, category: string, tags: string | null, limit: number = 3): Promise<Post[]> {
  await initDb();
  const result = await db.execute({
    sql: "SELECT * FROM posts WHERE is_published = 1 AND id != ? AND category = ? ORDER BY published_at DESC LIMIT ?",
    args: [postId, category, limit],
  });
  const posts = result.rows as unknown as Post[];

  if (posts.length < limit) {
    const ids = [postId, ...posts.map(p => p.id)];
    const placeholders = ids.map(() => "?").join(",");
    const more = await db.execute({
      sql: `SELECT * FROM posts WHERE is_published = 1 AND id NOT IN (${placeholders}) ORDER BY published_at DESC LIMIT ?`,
      args: [...ids, limit - posts.length],
    });
    posts.push(...(more.rows as unknown as Post[]));
  }

  return posts.slice(0, limit);
}

export async function searchPosts(query: string): Promise<Post[]> {
  await initDb();
  const searchTerm = `%${query}%`;
  const result = await db.execute({
    sql: `SELECT * FROM posts WHERE is_published = 1 AND (title LIKE ? OR excerpt LIKE ? OR content LIKE ? OR tags LIKE ?) ORDER BY published_at DESC LIMIT 20`,
    args: [searchTerm, searchTerm, searchTerm, searchTerm],
  });
  return result.rows as unknown as Post[];
}

export async function getCategoryWithSlug(): Promise<{ name: string; slug: string; count: number }[]> {
  await initDb();
  const result = await db.execute(
    "SELECT category, COUNT(*) as count FROM posts WHERE is_published = 1 GROUP BY category ORDER BY count DESC"
  );
  return result.rows.map((r) => ({
    name: r.category as string,
    slug: (r.category as string).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9öüçşğı-]/g, ""),
    count: r.count as number,
  }));
}

export async function adminGetAllPosts(): Promise<Post[]> {
  await initDb();
  const result = await db.execute(
    "SELECT * FROM posts ORDER BY updated_at DESC"
  );
  return result.rows as unknown as Post[];
}

export async function adminGetPostById(id: number): Promise<Post | undefined> {
  await initDb();
  const result = await db.execute({
    sql: "SELECT * FROM posts WHERE id = ?",
    args: [id],
  });
  return result.rows[0] as unknown as Post | undefined;
}

export async function getUserByUsername(username: string): Promise<User | undefined> {
  await initDb();
  const result = await db.execute({
    sql: "SELECT * FROM users WHERE username = ?",
    args: [username],
  });
  return result.rows[0] as unknown as User | undefined;
}

export async function createUser(username: string, passwordHash: string, displayName: string): Promise<User> {
  await initDb();
  const result = await db.execute({
    sql: "INSERT INTO users (username, password_hash, display_name) VALUES (?, ?, ?)",
    args: [username, passwordHash, displayName],
  });
  const user = await db.execute({
    sql: "SELECT * FROM users WHERE id = ?",
    args: [Number(result.lastInsertRowid)],
  });
  return user.rows[0] as unknown as User;
}

export async function updateUserPassword(id: number, passwordHash: string): Promise<void> {
  await initDb();
  await db.execute({
    sql: "UPDATE users SET password_hash = ? WHERE id = ?",
    args: [passwordHash, id],
  });
}

export async function getUserCount(): Promise<number> {
  await initDb();
  const result = await db.execute("SELECT COUNT(*) as c FROM users");
  return result.rows[0].c as number;
}

export async function adminGetStats(): Promise<{
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  categories: number;
}> {
  await initDb();
  const total = await db.execute("SELECT COUNT(*) as c FROM posts");
  const published = await db.execute("SELECT COUNT(*) as c FROM posts WHERE is_published = 1");
  const drafts = await db.execute("SELECT COUNT(*) as c FROM posts WHERE is_published = 0");
  const cats = await db.execute("SELECT COUNT(DISTINCT category) as c FROM posts");
  return {
    totalPosts: total.rows[0].c as number,
    publishedPosts: published.rows[0].c as number,
    draftPosts: drafts.rows[0].c as number,
    categories: cats.rows[0].c as number,
  };
}
