const preventReloadPageOnSamePath = () => {
  return {
    shouldRevalidate: ({ currentUrl, nextUrl }) =>
      currentUrl.pathname !== nextUrl.pathname,
  };
};

export default preventReloadPageOnSamePath;
