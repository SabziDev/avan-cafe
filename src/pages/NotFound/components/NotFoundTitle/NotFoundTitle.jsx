import pagesMeta from "@/data/pages-meta/pages-meta";

const NotFoundTitle = () => {
  return (
    <h2 className="mb-2 text-3xl font-bold text-white">
      {pagesMeta.notFound.title}
    </h2>
  );
};

export default NotFoundTitle;
