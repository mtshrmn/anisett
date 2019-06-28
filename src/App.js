import React from "react";
import style from "./app.scss";
import ShowCard from "./components/ShowCard/ShowCard";
import Menu from "./components/Menu/Menu";
import Home from "./assets/Home.svg";
import List from "./assets/List.svg";
import Downloads from "./assets/Downloads.svg";
import Play from "./assets/Play.svg";

const App = () => (
	<div>
		<Menu pages={[
			<Home key={0}/>,
			<List key={1}/>,
			<Play key={2}/>,
			<Downloads key={3}/>,
		]} />
		<div className={style.container}>
			<ShowCard
				title="Dr. STONE"
				image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-pAyqB5RxQlsI.png"
				progress={5} />
			<ShowCard
				title="Given"
				image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108430-LcVOT7ntUbjT.jpg"
				progress={2} />
		</div>
	</div>

);

export default App;
