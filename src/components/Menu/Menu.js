import React, {useState} from "react";
import PropTypes from "prop-types";
import style from "./Menu.module.css";

const Menu = props => {
	const [active, setActive] = useState(0);
	return (
		<div className={style.container}>
			{
				props.pages.map((icon, index) => (
					<div
						key={icon}
						className={`${style.button} ${index === active ? style.active : ""}`}
						onClick={() => setActive(index)}>
						{icon}
					</div>
				))
			}
		</div>
	);
};

Menu.propTypes = {
	pages: PropTypes.array,
};

export default Menu;
