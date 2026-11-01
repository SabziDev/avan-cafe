import metadata from "@/data/metadata/metadata";

const NotFoundTitle = () => {
  return (
    <h1 className="mb-2 text-3xl font-bold text-white">
      {metadata.notFound.title}
    </h1>
  );
};

export default NotFoundTitle;
