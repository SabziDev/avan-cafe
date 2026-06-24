import blog from "@public/data/blog/blog";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BlogCard from "./components/BlogCard";

const BlogSection = () => {
  return (
    <section>
      <SectionTitle isShowLink>وبلاگ</SectionTitle>

      <div className="mt-6 flex-items-center flex-col gap-5 pb-2.5 2xl:flex-row">
        <div className="flex-center flex-col gap-5 sm:flex-row">
          {blog.slice(0, 2).map((blogItem) => (
            <BlogCard key={blogItem.id} data={blogItem} />
          ))}
        </div>
        <div className="hidden md:flex-center md:w-full md:flex-col md:gap-5">
          {blog.slice(2, 4).map((blogItem) => (
            <BlogCard
              key={blogItem.id}
              cardVariant="horizontal"
              data={blogItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
