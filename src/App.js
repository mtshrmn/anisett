import React from "react";
import style from "./app.scss";
import {Menu, ShowCard} from "./components";

const App = () => (
	<div>
		<Menu />
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
