import { IoIosArrowDropdown } from "react-icons/io";

export default function Header() {
    return (
        <div className="absolute z-10 flex w-[100vw] h-15 items-center justify-between px-6 bg-gradient-to-t from-black ">
            <img className="w-35" src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" alt="Intflix_Logo" />
            <div className="flex items-center">
                <IoIosArrowDropdown size="24px" className="text-white"/>
                <h1 className="text-lg font-medium text-white">Kunal Mern Stack</h1>
                
                <div className="ml-4">
                    <button className="bg-red-800 text-white px-4 py-2">Logout</button>
                    <button className="bg-red-800 text-white px-4 py-2 ml-2"> Search Movies</button>
                </div>

            </div>
        </div>
    )
}
