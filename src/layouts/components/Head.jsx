import useCurrentRouteMeta from "../hooks/useCurrentRouteMeta";

const Head = () => {
  const { title, desc } = useCurrentRouteMeta("pageMeta");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </>
  );
};

export default Head;
