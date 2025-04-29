const ErrorPage = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <p className="text-base font-semibold text-indigo-600">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance  sm:text-7xl">
        Page not found
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
    </div>
  );
};

export default ErrorPage;
