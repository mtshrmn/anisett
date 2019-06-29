import React from "react";
import style from "./Menu.module.css";
import useNavigation from "../../stores/navigation";

import Home from "./icons/Home.svg";
import List from "./icons/List.svg";
import Downloads from "./icons/Downloads.svg";
import Play from "./icons/Play.svg";

export const Menu = () => {
	const {active, setActive} = useNavigation();
	return (
		<div className={style.container}>
			<div className={`${style.button} ${active === 0 ? style.active : ""}`} onClick={() => setActive(0)}>
				<Home />
			</div>
			<div className={`${style.button} ${active === 1 ? style.active : ""}`} onClick={() => setActive(1)}>
				<List />
			</div>
			<div className={`${style.button} ${active === 2 ? style.active : ""}`} onClick={() => setActive(2)}>
				<Downloads />
			</div>
			<div className={`${style.button} ${active === 3 ? style.active : ""}`} onClick={() => setActive(3)}>
				<Play />
			</div>
		</div>
	);
};
