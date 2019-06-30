import React from "react";
import style from "./app.scss";
import useNavigation from "./stores/navigation";

import {Menu, ShowCard, TopBar} from "./components";
import {DownloadsPage} from "./components/Pages";

const App = () => {
	const {active} = useNavigation();
	return (
		<div>
			<TopBar />
			<Menu />
			<div className={style.container}>
				{active === 1 &&
				<React.Fragment>
					<ShowCard
						title="Dr. STONE"
						image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-pAyqB5RxQlsI.png"
						progress={5} />
					<ShowCard
						title="Given"
						image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108430-LcVOT7ntUbjT.jpg"
						progress={2} />
				</React.Fragment>
				}
				{active === 2 &&
					<DownloadsPage />
				}
			</div>
		</div>

	);
};

export default App;
