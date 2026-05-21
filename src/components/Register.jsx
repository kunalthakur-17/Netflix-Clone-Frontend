import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { signupUser } from "../redux/auth/actions";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const store = useSelector((state) => state);
  const signupReducer = store?.signupReducer;

  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });

  useEffect(() => {
    if (signupReducer?.data) {
      navigate("/login");
    }
  }, [signupReducer, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser({ fullName: formData.fullName, email: formData.email, password: formData.password }));
    setFormData({ fullName: "", email: "", password: "" });
  };

  return (
    <div className="relative w-screen h-screen">
      <img
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-10 rounded-md flex flex-col gap-4 w-96 z-20"
      >
        <h1 className="text-white text-3xl font-bold">Sign Up</h1>

        {signupReducer?.error && (
          <p className="text-red-500 text-sm bg-red-100 border border-red-400 px-3 py-2 rounded">
            {signupReducer?.error}
          </p>
        )}

        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          disabled={signupReducer?.loading}
          className="px-4 py-3 rounded bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={signupReducer?.loading}
          className="px-4 py-3 rounded bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          disabled={signupReducer?.loading}
          className="px-4 py-3 rounded bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={signupReducer?.loading}
          className="bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 disabled:opacity-60"
        >
          {signupReducer?.loading ? "Please wait..." : "Sign Up"}
        </button>
        <p className="text-gray-400 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-white cursor-pointer hover:underline"
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}
