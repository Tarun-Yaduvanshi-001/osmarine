import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image }) => {
  const siteName = "Oracle Star Marine Services and Trading LLC";
  const defaultDescription = "Your trusted global partner for premier marine supplies, technical expertise, and swift logistics solutions.";
  const domain = "https://osmarine.ae";

  const defaultImage = "https://osmarine.ae/src/assets/about_header_image.jpg";

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || "marine services, ship spares, engine stores, deck stores, dubai marine trading"} />
      <link rel="canonical" href={url ? `${domain}${url}` : domain} />

      {/* Social Media (Open Graph) Tags */}
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url ? `${domain}${url}` : domain} />
      <meta property="og:image" content={image ? `${domain}${image}` : defaultImage} /> {/* <--- NEW */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image ? `${domain}${image}` : defaultImage} />
    </Helmet>
  );
};

export default SEO;