export default function Hover() {
	return (
		<>
			<div className=" flex justify-center items-center h-screen">
				<div className="relative">
					<p className=" duration-500 before:content[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-rose-700 before:via-purple-700 before:to-rose-700 hover:before:w-full hover:before:opacity-100 hover:cursor-pointer ">
						<p className="text-black font-mono text-4xl">home page</p>
					</p>
				</div>
			</div>
		</>
	);
}
