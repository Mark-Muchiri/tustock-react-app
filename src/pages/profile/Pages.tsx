import Navigation from "../../components/Navigation";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function Pages() {
	return (
		<>
			<div className="">
				<Section1 />
				<Section2 />
				<Section3 />
				{/* Navigation should stay at the bottom for the `sm:` menu bar to appear on top of content */}
				<Navigation />
			</div>
		</>
	);
}
