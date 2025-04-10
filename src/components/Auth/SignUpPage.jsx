import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div
        id="signup"
        className="w-full max-w-md bg-white rounded-lg shadow-lg px-6 py-8"
      >
        {/* Logo area */}
        <div className="flex justify-center mb-8">
          <img src="/logo.png" alt="Your Logo" className="h-16 w-auto" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>

        {/* Error list */}
        {errors.length > 0 && (
          <ul className="text-sm text-red-600 mb-4">
            {errors.map((err) => (
              <li key={err}>• {err}</li>
            ))}
          </ul>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="password_confirmation"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Password confirmation
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="••••••••"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded bg-zinc-900 text-white font-semibold hover:bg-cyan-500 transition"
          >
            Signup
          </button>
        </form>

        {/* Footer link */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>

    // <div className="flex min-h-screen items-center justify-center bg-gray-100">
    //   <div
    //     id="signup"
    //     className="mx-auto w-2xl max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    //   >
    //     <h1>Signup</h1>
    //     <ul>
    //       {errors.map((error) => (
    //         <li key={error}>{error}</li>
    //       ))}
    //     </ul>
    //     <form onSubmit={handleSubmit}>
    //       <div>
    //         Name: <input name="name" type="text" />
    //       </div>
    //       <div>
    //         Email: <input name="email" type="email" />
    //       </div>
    //       <div>
    //         Password: <input name="password" type="password" />
    //       </div>
    //       <div>
    //         Password confirmation:{" "}
    //         <input name="password_confirmation" type="password" />
    //       </div>
    //       <button type="submit">Signup</button>
    //     </form>
    //   </div>
    // </div>
  );
}
