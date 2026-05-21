import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { loginUser, signupUser } from "../redux/auth/actions";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const store = useSelector((state) => state);
  const loginReducer = store?.loginReducer;
  const signupReducer = store?.signupReducer;

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (loginReducer?.data) {
      navigate("/browse");
    }
  }, [loginReducer, navigate]);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginUser({ email: formData.email, password: formData.password }));
    } else {
      dispatch(signupUser({ fullname: formData.fullName, email: formData.email, password: formData.password }));
      setIsLogin(true);
    }
    setFormData({ fullName: "", email: "", password: "" });
  };

  const loading = isLogin ? loginReducer?.loading : signupReducer?.loading;
  const error = isLogin ? loginReducer?.error : signupReducer?.error;

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
        <h1 className="text-white text-3xl font-bold">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>

        {error && (
          <p className="text-red-500 text-sm bg-red-100 border border-red-400 px-3 py-2 rounded">
            {error}
          </p>
        )}

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="px-4 py-3 rounded bg-gray-700 text-white"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="px-4 py-3 rounded bg-gray-700 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="px-4 py-3 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 disabled:opacity-60"
        >
          {loading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 text-sm">
          {isLogin ? "New to Netflix? " : "Already have an account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-white cursor-pointer hover:underline"
          >
            {isLogin ? "Sign Up now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
}
