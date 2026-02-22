export const POSTS_QUERY = `*[_type == "post" && status == "published"] | order(coalesce(publishedAt, _createdAt) desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readingTime,
  "featuredImageUrl": featuredImage.asset->url,
  "author": author-> {name, "slug": slug.current, image},
  "categories": categories[]-> {title, "slug": slug.current},
  "tags": tags[]-> {title, "slug": slug.current},
  seo
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readingTime,
  "featuredImageUrl": featuredImage.asset->url,
  body,
  "author": author-> {name, "slug": slug.current, image},
  "categories": categories[]-> {title, "slug": slug.current},
  "tags": tags[]-> {title, "slug": slug.current},
  "relatedPosts": relatedPosts[]->{
    _id,
    title,
    "slug": slug.current,
    "featuredImageUrl": featuredImage.asset->url
  },
  seo
}`;

export const LATEST_POSTS_QUERY = `*[_type == "post" && status == "published"] | order(coalesce(publishedAt, _createdAt) desc)[0...$limit]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "featuredImageUrl": featuredImage.asset->url
}`;
