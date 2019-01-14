import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PageLayout from '../../components/Layout/PageLayout';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: posts }
  }
}) => (
  <PageLayout pageTitle="Blog">
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Latest Stories</h1>
        </div>
      </div>
    </section>
    <section className="section has-background-blue-lighter">
      <div className="container">
        <div className="columns is-multiline">
          {posts.map(({ node: post }) => (
            <div
              className="column is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
              key={post.id}
            >
              <Link to={post.fields.slug}>
                <div className="card is-shady is-fullheight">
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img
                        src="https://source.unsplash.com/random"
                        alt="Placeholder"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>{post.frontmatter.title}</h4>
                      <p>
                        {post.excerpt}
                        <br />
                        <br />
                        <small>{post.frontmatter.date}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`;
