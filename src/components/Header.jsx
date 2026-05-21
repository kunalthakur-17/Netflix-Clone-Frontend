import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/auth/actions";

export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const store = useSelector((state) => state);
    const loginReducer = store?.loginReducer;
    const username = loginReducer?.data?.username;

    console.log(loginReducer,"sjdsddisuid")

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login");
    };

    return (
        <div className="fixed z-10 flex w-full h-16 items-center justify-between px-6 bg-gradient-to-b from-black to-transparent">
            <img className="w-35" src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" alt="Intflix_Logo" />
            <div className="flex items-center">
                <IoIosArrowDropdown size="24px" className="text-white"/>
                <h1 className="text-lg font-medium text-white">{username || "Guest"}</h1>
                
                <div className="ml-4">
                    <button onClick={handleLogout} className="bg-red-800 text-white px-4 py-2">Logout</button>
                    <button className="bg-red-800 text-white px-4 py-2 ml-2">Search Movies</button>
                </div>
            </div>
        </div>
    );
}
