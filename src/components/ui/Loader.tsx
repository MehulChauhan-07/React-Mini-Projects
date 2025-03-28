const Loader = () => {
  return (
    <div className="flex justify-center items-center h-60">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
