import { Helmet } from "react-helmet-async";

const SITE_URL = "https://todayprediction365.com";

const SEO = ({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
  noIndex = false,
  type = "website",
  structuredData,
}) => {
  const canonicalUrl = new URL(path, SITE_URL).href;
  const imageUrl = new URL(image, SITE_URL).href;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large"
        }
      />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Today Prediction 365" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;