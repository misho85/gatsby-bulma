import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/app.sass';

const TemplateWrapper = ({ element }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
            siteLanguage
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang={data.site.siteMetadata.siteLanguage} />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar />
        <div className="is-placeholder">{element}</div>
        <Footer />
      </div>
    )}
  />
);

export default TemplateWrapper;
