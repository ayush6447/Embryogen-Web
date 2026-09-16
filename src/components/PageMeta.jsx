/**
 * Per-page <title> / <meta> using React 19's native metadata support:
 * these tags are hoisted into <head> automatically, no helmet needed.
 */
export default function PageMeta({ title, description, path = '/' }) {
  const url = `https://www.embryogen.in${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
