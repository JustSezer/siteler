export function validateString(
  value: unknown,
  field: string,
  maxLength: number = 500
): string | null {
  if (typeof value !== "string" || value.trim().length === 0) {
    return `${field} alanı zorunludur ve metin olmalıdır.`;
  }
  if (value.length > maxLength) {
    return `${field} alanı en fazla ${maxLength} karakter olabilir.`;
  }
  return null;
}

export function validateSlug(value: unknown): string | null {
  if (typeof value !== "string" || value.trim().length === 0) {
    return "slug alanı zorunludur.";
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    return "slug yalnızca küçük harf, rakam ve tire içerebilir.";
  }
  if (value.length > 200) {
    return "slug en fazla 200 karakter olabilir.";
  }
  return null;
}

export function validateId(value: string): number | null {
  const num = parseInt(value, 10);
  if (isNaN(num) || num < 1 || !Number.isInteger(num)) {
    return null;
  }
  return num;
}

export function validateTagIds(value: unknown): string | null {
  if (value === undefined || value === null) return null;
  if (!Array.isArray(value)) {
    return "tagIds bir dizi olmalıdır.";
  }
  if (value.length > 20) {
    return "En fazla 20 etiket eklenebilir.";
  }
  for (const id of value) {
    if (typeof id !== "number" || !Number.isInteger(id) || id < 1) {
      return "tagIds geçerli sayılar içermelidir.";
    }
  }
  return null;
}

export interface PostInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  categoryId: number;
  tagIds?: number[];
  published?: boolean;
}

export function validatePostInput(body: unknown): { data?: PostInput; error?: string } {
  if (!body || typeof body !== "object") {
    return { error: "Geçersiz istek gövdesi." };
  }

  const b = body as Record<string, unknown>;

  let err: string | null;

  err = validateString(b.title, "title", 300);
  if (err) return { error: err };

  err = validateSlug(b.slug);
  if (err) return { error: err };

  err = validateString(b.excerpt, "excerpt", 1000);
  if (err) return { error: err };

  err = validateString(b.content, "content", 100000);
  if (err) return { error: err };

  if (b.coverImage !== undefined && b.coverImage !== null) {
    if (typeof b.coverImage !== "string" || b.coverImage.length > 2000) {
      return { error: "coverImage geçerli bir URL olmalıdır." };
    }
    try {
      const url = new URL(b.coverImage as string);
      if (!["http:", "https:"].includes(url.protocol)) {
        return { error: "coverImage yalnızca http/https URL olabilir." };
      }
    } catch {
      return { error: "coverImage geçerli bir URL değil." };
    }
  }

  if (typeof b.categoryId !== "number" || !Number.isInteger(b.categoryId) || b.categoryId < 1) {
    return { error: "categoryId geçerli bir sayı olmalıdır." };
  }

  err = validateTagIds(b.tagIds);
  if (err) return { error: err };

  if (b.published !== undefined && typeof b.published !== "boolean") {
    return { error: "published alanı boolean olmalıdır." };
  }

  return {
    data: {
      title: (b.title as string).trim(),
      slug: (b.slug as string).trim(),
      excerpt: (b.excerpt as string).trim(),
      content: b.content as string,
      coverImage: b.coverImage as string | undefined,
      categoryId: b.categoryId as number,
      tagIds: b.tagIds as number[] | undefined,
      published: b.published as boolean | undefined,
    },
  };
}

export function validateCategoryInput(body: unknown): { data?: { name: string; slug: string }; error?: string } {
  if (!body || typeof body !== "object") {
    return { error: "Geçersiz istek gövdesi." };
  }

  const b = body as Record<string, unknown>;

  let err = validateString(b.name, "name", 100);
  if (err) return { error: err };

  err = validateSlug(b.slug);
  if (err) return { error: err };

  return {
    data: {
      name: (b.name as string).trim(),
      slug: (b.slug as string).trim(),
    },
  };
}
