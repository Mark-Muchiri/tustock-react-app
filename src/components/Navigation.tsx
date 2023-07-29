import { useState } from "react";
import MenuIcon from "../assets/MenuIcon";
import CloseMenuIcon from "../assets/CloseMenuIcon";

export default function Navigation() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="border-l-2 border-r-2 border-t-2 border-gray-500 shadow-md shadow-gray-500 w-10/12 fixed top-7 rounded-lg left-0 right-0 mx-auto ">
				<div className="md:flex md:justify-between  bg-neutral-50  md:h-16  rounded-xl py-4 pl-8 ">
					{/* Logo and menu */}
					<div className="flex justify-between md:my-0 -mb-6">
						{/* Logo */}
						<div className="sm:pb-5 md:mb-0 lg:mb-0 mb-8 ">
							<a
								href=""
								className=" text-3xl font-bold text-gray-800 cursor-pointer"
							>
								Tustock
							</a>
						</div>

						{/* menu icon */}
						<div
							onClick={() => setOpen(!open)}
							className="mr-5 text-2xl cursor-pointer md:hidden"
						>
							{open ? <CloseMenuIcon /> : <MenuIcon />}
						</div>
					</div>

					{/* right content: links */}
					<div className={`text-2xl pr-8 md:m-0 sm:mx-52`}>
						{/* Menu icon and animation */}
						<ul
							className={`md:flex md:items-center md:gap-5 absolute md:static bg-white md:z-auto z-[-1] w-full  md:w-full transition-all duration-500 ease-in rounded-br-xl rounded-bl-xl shadow-md shadow-gray-500 md:shadow-none md:transition-none border-l-2 border-r-2 border-b-2  border-gray-500 md:border-none ${
								open ? "right-0 opacity-100" : "right-[-1000px] md:opacity-100"
							} `}
						>
							<li className="relative md:my-0 lg:my-0 my-5 md:mx-3 lg-mx-3 mx-32 ">
								<a
									href=""
									className="capitalize duration-500 before:content[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-green-700 hover:before:w-full hover:before:opacity-100 hover:cursor-pointer"
								>
									home
								</a>
							</li>
							<li className="relative md:my-0 lg:my-0 my-5 md:mx-3 lg-mx-3 mx-32 ">
								<a
									href=""
									className="capitalize duration-500 before:content[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-green-700 hover:before:w-full hover:before:opacity-100 hover:cursor-pointer"
								>
									about
								</a>
							</li>
							<li className="relative md:my-0 lg:my-0 my-5 md:mx-3 lg-mx-3 mx-32 ">
								<a
									href=""
									className="capitalize duration-500 before:content[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-green-700 hover:before:w-full hover:before:opacity-100 hover:cursor-pointer"
								>
									contacts
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
