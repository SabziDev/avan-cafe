import pagesMeta from "@/data/pages-meta/pages-meta";

const NotFoundDesc = () => {
  return (
    <p className="mb-8 max-w-md text-lg text-gray-300">
      {pagesMeta.notFound.desc}
    </p>
  );
};

export default NotFoundDesc;
