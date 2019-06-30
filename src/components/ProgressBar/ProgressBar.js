import React from "react";
import PropTypes from "prop-types";
import style from "./ProgressBar.module.css";

export const ProgressBar = ({progress}) => (
	<div className={style.bar}>
		<div
			className={style.progress}
			style={{
				width: `${progress}%`,
			}}/>
	</div>
);

ProgressBar.propTypes = {
	progress: PropTypes.number,
};
