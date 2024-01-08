import { Link } from "react-router-dom";

const NotFoundView = () => {
  return (
    <>
      <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-2">
        <h1 className="text-xl font-semibold text-slate-400">
          Ooops! Something went wrong...
        </h1>
        <p className="text-center text-sm text-slate-400">
          The path you're trying to access doesn't exist. Please go back and try
          again
        </p>

        <Link
          to=".."
          className="rounded border border-slate-400 bg-slate-200 px-2 font-semibold text-slate-600"
        >
          Go Back
        </Link>
      </div>
    </>
  );
};

export default NotFoundView;
