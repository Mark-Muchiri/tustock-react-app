export default function Section2() {
	return (
		<>
			<div className="">
				{/* Grid layout */}
				{/* Text content */}
				<div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 md:gap-5 lg:gap-5 relative lg:top-28 md:top-36 top-32 ">
					<div className="lg:ml-80 md:ml-80 mx-8">
						<div className="">
							<p className="pt-7 pb-1 text-4xl font-bold text-violet-950">
								TECHNOLOGY AND SOLUTION OVERVIEW.
							</p>
						</div>
						<div className="pt-3 text-violet-950 font-bold text-xl pb-5">
							<p className="mb-5">
								FIDO (Free Intelligent Domain Observers) AI is a
								software-as -a-service (SaaS) end-to-end leak
								detection cloud AI solution which identiﬁes
								leak/no leak and the size of leaks to reduce the
								run time of each leak and remove false positives
								and human error in analysis. It is 92% accurate
								and FIDO's leak sizing is unique to prioritize
								the maintenance work.
							</p>
							<p>
								FIDO uses differential analysis algorithm and
								the world’s largest library of leak data to
								deliver instant results. It has the unique data
								set of including in-pipe data from the FIDO bug
								when it has been used to collect data from
								within the pipe taking audio, speed and
								turbulence data. The FIDO bug is a 49-mm 49.5-gm
								low-cost simple MEMS device that is designed to
								cover any part of the water network to deliver
								data to FIDO AI for real time data analysis.
							</p>
							<a className="relative top-6 " href="/">
								<button className="bg-orange-500 text-white font-medium py-1 px-3 rounded-md">
									Learn More
								</button>
							</a>
						</div>
					</div>
					{/* image box */}
					<div className="relative md:top-8 lg:top-8 top-10 md:ml-44 lg:ml-44 px-4 ">
						<img
							src="https://images.unsplash.com/photo-1596199050105-6d5d32222916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybWluZ3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
							alt="tomatoes on a tree"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
