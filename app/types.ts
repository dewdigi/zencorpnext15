export interface BlogPost {
    slug: string;
    title: string;
    shortDescription: string;
    publishedDate: string;
    featuredImage: {
      url: string;
      description: string;
    };
  }
  