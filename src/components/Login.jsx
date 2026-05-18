import { useState } from "react";
import Header from "./Header";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ fullName: "", email: "", password: "" });
    }
    return (
        <div className="relative w-screen h-screen">
            <img src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp" alt="banner" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full z-10">
                <Header />
            </div>
            <form onSubmit={handleSubmit} autoComplete="off" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-10 rounded-md flex flex-col gap-4 w-96 z-20">
                <h1 className="text-white text-3xl font-bold">{isLogin ? "Sign In" : "Sign Up"}</h1>
                {!isLogin && (
                    <div className="flex flex-col gap-1">
                        <input type="text" placeholder="Full Name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="px-4 py-3 rounded bg-gray-700 text-white" />
                    </div>
                )}
                <div className="flex flex-col gap-1">
                    <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="px-4 py-3 rounded bg-gray-700 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                    <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="px-4 py-3 rounded bg-gray-700 text-white" />
                </div>
                <button type="submit" className="bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700">
                    {isLogin ? "Sign In" : "Sign Up"}
                </button>
                <p className="text-gray-400 text-sm">
                    {isLogin ? "New to Netflix? " : "Already have an account? "}
                    <span onClick={() => setIsLogin(!isLogin)} className="text-white cursor-pointer hover:underline">
                        {isLogin ? "Sign Up now" : "Sign In"}
                    </span>
                </p>
            </form>
        </div>
    )
}
