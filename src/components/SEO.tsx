import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

// SEO elements that can be used in _document.tsx (returns JSX without Head wrapper)
export function SEOElements({
  title = "Digital Chisel Gallery — Asian Culture Prints",
  description = "Premium Indonesian wood-relief prints curated by Digital Chisel Gallery in partnership with J.A.Y. Trade School",
  image = "/og-image.png",
  url,
  keywords = "Digital Chisel, Indonesian Art, Wood Relief, J.A.Y. Trade School, Meditation Wallpaper, Structural Truth, Asian Art, Contemplative Art, Cultural Heritage",
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
}

// SEO component for use in pages/_app.tsx or individual pages (uses next/head)
// Note: Flattened structure (no fragment) for better Next.js Head compatibility during hot reload
export function SEO({
  title = "Digital Chisel Gallery — Asian Culture Prints",
  description = "Premium Indonesian wood-relief prints curated by Digital Chisel Gallery in partnership with J.A.Y. Trade School",
  image = "/og-image.png",
  url,
  keywords = "Digital Chisel, Indonesian Art, Wood Relief, J.A.Y. Trade School, Meditation Wallpaper, Structural Truth, Asian Art, Contemplative Art, Cultural Heritage",
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Digital Chisel Gallery",
    "description": description,
    "url": url || "https://digital-chisel-gallery.vercel.app",
    "publisher": {
      "@type": "Organization",
      "name": "Digital Chisel Gallery",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logos/digital-chisel-logo.png"
      }
    },
    "keywords": keywords
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
