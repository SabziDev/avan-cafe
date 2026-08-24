import BlogCardHorizontal from "./BlogCardHorizontal/BlogCardHorizontal";
import BlogCardVertical from "./BlogCardVertical/BlogCardVertical";

const BlogCard = ({ data, cardVariant = "vertical" }) => {
  if (cardVariant === "vertical") return <BlogCardVertical data={data} />;
  if (cardVariant === "horizontal") return <BlogCardHorizontal data={data} />;
};

export default BlogCard;
