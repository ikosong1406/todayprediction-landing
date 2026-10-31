import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Today Prediction 365",
    url: "https://todayprediction365.com/",
    logo: "https://todayprediction365.com/logo.png",
    description:
      "Sports predictions, statistical insights and match analysis.",
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