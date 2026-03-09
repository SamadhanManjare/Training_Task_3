export const getAssetPath = (path: string) => {
  // During GitHub Pages production build, prepend the repository name.
  // In local development, return the path as-is.
  const basePath = process.env.NODE_ENV === "production" ? "/Training_Task_3" : "";
  return `${basePath}${path}`;
};
