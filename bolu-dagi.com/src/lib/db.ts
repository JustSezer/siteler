import Database from "better-sqlite3";
import path from "path";

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (db) return db;

  const dbPath = path.join(process.cwd(), "db", "blog.db");
  db = new Database(dbPath);

  db.pragma("journal_mode = WAL");
  db.pragma("cache_size = -64000");
  db.pragma("synchronous = NORMAL");
  db.pragma("foreign_keys = ON");

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      slug TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      cover_image TEXT,
      category_id INTEGER,
      tags TEXT,
      reading_time INTEGER DEFAULT 5,
      is_published INTEGER DEFAULT 1,
      published_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
    );

    CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
    CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category_id);
    CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at);
  `);

  return db;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  category_id: number | null;
  category_name?: string;
  tags: string | null;
  reading_time: number;
  is_published: number;
  published_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

const stmtCache = new Map<string, Database.Statement>();

function getStmt(key: string, sql: string): Database.Statement {
  let stmt = stmtCache.get(key);
  if (!stmt) {
    stmt = getDb().prepare(sql);
    stmtCache.set(key, stmt);
  }
  return stmt;
}

export function getAllPosts(limit?: number): Post[] {
  if (limit !== undefined) {
    const safeLimit = Math.max(1, Math.min(Math.floor(Number(limit)), 100));
    return getStmt("allPostsLimit", `
      SELECT p.*, c.name as category_name
      FROM posts p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.is_published = 1 AND p.published_at <= datetime('now')
      ORDER BY p.published_at DESC
      LIMIT ?
    `).all(safeLimit) as Post[];
  }
  return getStmt("allPosts", `
    SELECT p.*, c.name as category_name
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE p.is_published = 1 AND p.published_at <= datetime('now')
    ORDER BY p.published_at DESC
  `).all() as Post[];
}

export function getPostBySlug(slug: string): Post | undefined {
  return getStmt("postBySlug", `
    SELECT p.*, c.name as category_name
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE p.slug = ?
  `).get(slug) as Post | undefined;
}

export function getPostById(id: number): Post | undefined {
  const safeId = Math.floor(Number(id));
  if (!Number.isFinite(safeId) || safeId <= 0) return undefined;
  return getStmt("postById", `
    SELECT p.*, c.name as category_name
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE p.id = ?
  `).get(safeId) as Post | undefined;
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return getStmt("postsByCat", `
    SELECT p.*, c.name as category_name
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE c.slug = ? AND p.is_published = 1
    ORDER BY p.published_at DESC
  `).all(categorySlug) as Post[];
}

export function getAllPostsAdmin(): Post[] {
  return getStmt("allPostsAdmin", `
    SELECT p.*, c.name as category_name
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    ORDER BY p.published_at DESC
  `).all() as Post[];
}

const UPDATABLE_FIELDS = new Set([
  "title", "slug", "excerpt", "content",
  "cover_image", "category_id", "tags",
  "reading_time", "is_published", "published_at",
]);

export function createPost(post: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  category_id?: number;
  tags?: string;
  reading_time?: number;
  is_published?: number;
  published_at?: string;
}): Database.RunResult {
  return getDb().prepare(`
    INSERT INTO posts (title, slug, excerpt, content, cover_image, category_id, tags, reading_time, is_published, published_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    String(post.title).substring(0, 200),
    String(post.slug).substring(0, 200).toLowerCase().replace(/[^a-z0-9-]/g, ""),
    String(post.excerpt).substring(0, 500),
    String(post.content).substring(0, 100000),
    post.cover_image ? String(post.cover_image).substring(0, 500) : null,
    post.category_id ? Math.floor(Number(post.category_id)) : null,
    post.tags ? String(post.tags).substring(0, 500) : null,
    Math.max(1, Math.min(Math.floor(Number(post.reading_time) || 5), 120)),
    post.is_published === 0 ? 0 : 1,
    post.published_at || new Date().toISOString().replace("T", " ").substring(0, 19)
  );
}

export function updatePost(id: number, data: Record<string, unknown>): Database.RunResult {
  const safeId = Math.floor(Number(id));
  if (!Number.isFinite(safeId) || safeId <= 0) throw new Error("Geçersiz ID.");

  const fields: string[] = [];
  const values: unknown[] = [];

  for (const [key, value] of Object.entries(data)) {
    if (!UPDATABLE_FIELDS.has(key)) continue;
    switch (key) {
      case "title": fields.push("title = ?"); values.push(String(value).substring(0, 200)); break;
      case "slug": fields.push("slug = ?"); values.push(String(value).substring(0, 200).toLowerCase().replace(/[^a-z0-9-]/g, "")); break;
      case "excerpt": fields.push("excerpt = ?"); values.push(String(value).substring(0, 500)); break;
      case "content": fields.push("content = ?"); values.push(String(value).substring(0, 100000)); break;
      case "cover_image": fields.push("cover_image = ?"); values.push(value ? String(value).substring(0, 500) : null); break;
      case "category_id": fields.push("category_id = ?"); values.push(value ? Math.floor(Number(value)) : null); break;
      case "tags": fields.push("tags = ?"); values.push(value ? String(value).substring(0, 500) : null); break;
      case "reading_time": fields.push("reading_time = ?"); values.push(Math.max(1, Math.min(Math.floor(Number(value) || 5), 120))); break;
      case "is_published": fields.push("is_published = ?"); values.push(value ? 1 : 0); break;
      case "published_at": fields.push("published_at = ?"); values.push(value ? String(value).substring(0, 30) : new Date().toISOString().replace("T", " ").substring(0, 19)); break;
    }
  }

  if (fields.length === 0) throw new Error("Güncellenecek alan bulunamadı.");

  fields.push("updated_at = datetime('now')");
  values.push(safeId);

  return getDb().prepare(`UPDATE posts SET ${fields.join(", ")} WHERE id = ?`).run(...values);
}

export function deletePost(id: number): Database.RunResult {
  const safeId = Math.floor(Number(id));
  if (!Number.isFinite(safeId) || safeId <= 0) throw new Error("Geçersiz ID.");
  return getStmt("deletePost", "DELETE FROM posts WHERE id = ?").run(safeId);
}

export function getPostCount(): number {
  const row = getStmt("postCount", "SELECT COUNT(*) as count FROM posts WHERE is_published = 1").get() as { count: number };
  return row.count;
}

export function getAllCategories(): Category[] {
  return getStmt("allCategories", "SELECT * FROM categories ORDER BY name").all() as Category[];
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getStmt("catBySlug", "SELECT * FROM categories WHERE slug = ?").get(slug) as Category | undefined;
}

export function createCategory(name: string, slug: string): Database.RunResult {
  const safeName = String(name).substring(0, 100).trim();
  const safeSlug = String(slug).substring(0, 100).toLowerCase().replace(/[^a-z0-9-]/g, "").trim();
  if (!safeName || !safeSlug) throw new Error("Geçersiz kategori adı veya slug.");
  return getStmt("createCat", "INSERT INTO categories (name, slug) VALUES (?, ?)").run(safeName, safeSlug);
}

export function deleteCategory(id: number): Database.RunResult {
  const safeId = Math.floor(Number(id));
  if (!Number.isFinite(safeId) || safeId <= 0) throw new Error("Geçersiz ID.");
  return getStmt("deleteCat", "DELETE FROM categories WHERE id = ?").run(safeId);
}

export function getUserByEmail(email: string): User | undefined {
  const safeEmail = String(email).substring(0, 254).toLowerCase().trim();
  return getStmt("userByEmail", "SELECT * FROM users WHERE email = ?").get(safeEmail) as User | undefined;
}

export function getUserById(id: number): User | undefined {
  const safeId = Math.floor(Number(id));
  if (!Number.isFinite(safeId) || safeId <= 0) return undefined;
  return getStmt("userById", "SELECT * FROM users WHERE id = ?").get(safeId) as User | undefined;
}
