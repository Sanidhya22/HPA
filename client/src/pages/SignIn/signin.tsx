import { useState } from "react";
import { Link } from "react-router-dom";
import { SignUpInCard } from "../../shared/SignUp-SignIn-Card";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { GoogleButton } from "../../features/Button";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8181/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpInCard>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div>

        <div className="flex items-center justify-center mt-4">
          <a
            href="#"
            className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize dark:border-blue-400 dark:text-white"
          >
            Sign in
          </a>
        </div>

        <div className="relative flex items-center mt-2">
          <span className="absolute">
            <UserIcon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>

          <input
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
            type="text"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <LockClosedIcon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>

          <input
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
          />
        </div>

        <a
          href="#"
          className="text-xs text-gray-600 ml-2 dark:text-gray-400 hover:underline"
        >
          Forget Password?
        </a>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 dark:bg-blue-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with Social Media
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <GoogleButton title=" Sign in with Google" onClick={() => {}} />
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Create One
          </Link>
        </p>
      </form>
    </SignUpInCard>
  );
};
