
import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://todayprediction365.com/#organization",
        "name": "Today Prediction 365",
        "url": "https://todayprediction365.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://todayprediction365.com/logo.png"
        },
        "description":
          "A sports predictions and match analysis platform providing football insights, match previews and statistical analysis."
      },
      {
        "@type": "WebSite",
        "@id": "https://todayprediction365.com/#website",
        "url": "https://todayprediction365.com/",
        "name": "Today Prediction 365",
        "publisher": {
          "@id": "https://todayprediction365.com/#organization"
        },
        "inLanguage": "en"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
