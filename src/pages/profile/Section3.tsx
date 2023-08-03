export default function Section3() {
	return (
		<>
			<div className="  ">
				{/* Grid layout */}
				{/* Text content */}
				<div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 md:gap-x-5 lg:gap-x-5 relative lg:top-28 md:top-36 top-32 pt-20 ">
					{/* box 1 */}
					<div className="lg:ml-80 md:ml-80 mx-8 border-4 rounded-2xl border-green-700 py-10 px-8 md:mb-0 lg:mb-0 mb-14 ">
						<h2 className="text-2xl text-violet-950 font-extrabold">
							Leak detection is facilitated as follows
						</h2>
						<p className="text-2xl pt-4 pb-6">
							FIDO AI can analyze data from FIDO devices or leak
							noise data from acoustic loggers (from any
							manufacturer) to provide leak probability and
							estimates of leak location and size, delivered
							directly to the FIDO App on engineers’ phones.
							Communication is done via cellular (3G, 4G, 5G).
						</p>
						<a
							className="relative md:top-24 lg:top-24 top-4"
							href="/"
						>
							<button className="bg-orange-500 text-white font-medium py-1 px-3 text-xl rounded-md">
								Learn More
							</button>
						</a>
					</div>

					{/* box 2 */}
					<div className="lg:mr-80 md:mr-96  mx-8 border-4 rounded-2xl border-green-700 py-10 px-8 ">
						<h2 className="text-2xl text-violet-950 font-extrabold">
							Leak sizing is characterized by the following
						</h2>
						<p className="text-2xl pt-4 pb-0">
							It has the ability to pin-point the leak location,
							it is greater than 92% accurate and FIDO's leak
							sizing is unique to prioritize the maintenance work.
						</p>
						<ul className="text-2xl pt-4 pb-6">
							<li className="flex gap-3">
								<div className="w-3 h-3 rounded-full relative top-3 bg-green-900"></div>
								<p>
									World-frst categorization of leaks by size
								</p>
							</li>
							<li className="flex gap-3">
								<div className="w-3 h-3 rounded-full relative top-3 bg-green-900"></div>
								<p>Find the leaks that matter.</p>
							</li>
							<li className="flex gap-3">
								<div className="w-3 h-3 rounded-full relative top-3 bg-green-900"></div>
								<p>Prioritise largest ﬁrst!</p>
							</li>
							<li className="flex gap-3">
								<div className="w-3 h-3 rounded-full relative top-3 bg-green-900"></div>
								<p>Maximise efficiency.</p>
							</li>
						</ul>
						<a className="relative top-4" href="/">
							<button className="bg-orange-500 text-white font-medium py-1 px-3 text-xl rounded-md">
								Learn More
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
