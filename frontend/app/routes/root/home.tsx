// import React from "react";
// import type { Route } from "../../+types/root";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "TaskHub" },
//     { name: "description", content: "Welcome to TaskHub!" },
//   ];
// }

// const Homepage = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center gap-4">
//       <Link to="/sign-in">
//         <Button className="bg-blue-500 text-white">Login</Button>
//       </Link>
//       <Link to="/sign-up">
//         <Button variant="outline" className="bg-blue-500 text-white">
//           Sign Up
//         </Button>
//       </Link>
//     </div>
//   );
// };

// export default Homepage;

import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WorkNest" },
    { name: "description", content: "Welcome to WorkNest!" },
  ];
}

const Homepage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-100 px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border p-8 sm:p-10 text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          WorkNest
        </h1>

        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Organize projects, manage workspaces, and boost productivity.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link to="/sign-in" className="w-full">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Login
            </Button>
          </Link>

          <Link to="/sign-up" className="w-full">
            <Button
              variant="outline"
              className="w-full border-slate-300 text-slate-700 hover:bg-slate-100">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
