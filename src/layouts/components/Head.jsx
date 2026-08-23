import useCurrentRouteHandle from "../hooks/useCurrentRouteHandle";

const Head = () => {
  const { title, desc } = useCurrentRouteHandle("seo");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </>
  );
};

export default Head;
