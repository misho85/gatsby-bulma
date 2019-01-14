import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Footer from '../Footer';

const PageLayout = ({ children, data, withFooter, pageTitle }) => {
  const { title, description, siteLanguage, siteUrl } = data.siteMetadata;
  return (
    <>
      <Helmet>
        <html lang={siteLanguage} />
        <title>{`${pageTitle} | ${title}`}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${pageTitle} | ${title}`} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>

      {children}
      {withFooter && <Footer />}
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
            siteLanguage
          }
        }
      }
    `}
    render={({ site }) => <PageLayout data={site} {...props} />}
  />
);

PageLayout.propTypes = {
  data: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      siteUrl: PropTypes.string.isRequired,
      siteLanguage: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  children: PropTypes.node.isRequired,
  withFooter: PropTypes.bool.isRequired,
  pageTitle: PropTypes.string.isRequired
};

PageLayout.defaultProps = {
  withFooter: true,
  pageTitle: 'Home'
};
