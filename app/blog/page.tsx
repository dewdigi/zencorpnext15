import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPosts } from "@/lib/sanity/fetch";
import BlogListClient from "@/app/components/blog/BlogListClient";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <Navbar />
      <div className="pt-36 sm:pt-40 lg:pt-44">
        <BlogListClient posts={posts} />
      </div>
      <Footer />
    </div>
  );
}
