import useCurrentRouteHandle from "../hooks/useCurrentRouteHandle";

const Head = () => {
  const seo = useCurrentRouteHandle("seo");

  return (
    <>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.desc} />
    </>
  );
};

export default Head;
