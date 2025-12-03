const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <span className="border-2 border-t-transparent animate-spin inline-block size-7 rounded-full"></span>
      <h1 className="text-xl font-medium animate-pulse">App is loading...</h1>
    </div>
  );
};

export default LoadingPage;
