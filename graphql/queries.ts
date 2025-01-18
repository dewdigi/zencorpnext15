import { gql } from "@apollo/client";

export const GET_BLOG_POSTS = gql`
  query GET_BLOG_POSTS($preview: Boolean, $limit: Int = 10) {
    pageBlogPostCollection(preview: $preview, limit: $limit) {
      items {
        slug
        title
        shortDescription
        publishedDate
        featuredImage {
          url
          description
        }
      }
    }
  }
`;

export const GET_BLOG_POST_BY_SLUG = gql`
  query GET_BLOG_POST_BY_SLUG($slug: String!) {
    pageBlogPostCollection(where: { slug: $slug }, limit: 1) {
      items {
        slug
        title
        publishedDate
        content {
          json
        }
        featuredImage {
          url
          description
        }
      }
    }
  }
`;
