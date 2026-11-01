import metadata from "@/data/metadata/metadata";

const NotFoundDesc = () => {
  return (
    <p className="mb-8 max-w-md text-lg text-gray-300">
      {metadata.notFound.desc}
    </p>
  );
};

export default NotFoundDesc;
