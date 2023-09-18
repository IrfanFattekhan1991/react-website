import { useRouteError } from "react-router-dom";

const Error = () => {
  const err: any = useRouteError();
  //useRouterError() hook gives an object with error details which we can show on UI

  return (
    <div className="py-24 text-center font-bold text-3xl">
      <h1>
        {err.status}-{err.statusText}!
      </h1>
      <h2>{err.data}</h2>
    </div>
  );
};

export default Error;
