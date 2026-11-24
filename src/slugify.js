/**
 * Turn a title into a URL-friendly slug.
 * slugify("Hello, World!") -> "hello-world"
 */
export function slugify(title) {
  if (typeof title !== "string") {
    throw new TypeError("title must be a string");
  }
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Shorten a slug to at most `max` characters without cutting a word in half.
 */
export function truncateSlug(slug, max = 50) {
  if (slug.length <= max) return slug;
  const cut = slug.slice(0, max);
  const lastDash = cut.lastIndexOf("-");
  return lastDash > 0 ? cut.slice(0, lastDash) : cut;
}
