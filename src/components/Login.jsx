import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { loginUser } from "../redux/auth/actions";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const store = useSelector((state) => state);
  const loginReducer = store?.loginReducer;

  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (loginReducer?.data) {
      navigate("/browse");
    }
  }, [loginReducer, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: formData.email, password: formData.password }));
    setFormData({ email: "", password: "" });
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
        <h1 className="text-white text-3xl font-bold">Sign In</h1>

        {loginReducer?.error && (
          <p className="text-red-500 text-sm bg-red-100 border border-red-400 px-3 py-2 rounded">
            {loginReducer?.error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={loginReducer?.loading}
          className="px-4 py-3 rounded bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          disabled={loginReducer?.loading}
          className="px-4 py-3 rounded bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={loginReducer?.loading}
          className="bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 disabled:opacity-60"
        >
          {loginReducer?.loading ? "Please wait..." : "Sign In"}
        </button>
        <p className="text-gray-400 text-sm">
          New to Netflix?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-white cursor-pointer hover:underline"
          >
            Sign Up now
          </span>
        </p>
      </form>
    </div>
  );
}
