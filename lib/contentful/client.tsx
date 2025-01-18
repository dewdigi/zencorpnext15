import { createClient } from 'contentful';

if (!process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful environment variables are missing. Please check NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT and NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN in your .env.local file.');
}

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT.split('/')[5], // Extract the space ID from the URL
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});
