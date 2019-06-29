import React from "react";
import PropTypes from "prop-types";
import style from "./ShowCard.module.css";

export const ShowCard = ({image, title, progress}) => (
	<div className={style.card}>
		<img className={style.img} src={image} alt={title}/>
		<div className={style.content}>
			<h3 className={style.title}>{title}</h3>
			<h5 className={style.progress}>episode {progress}</h5>
		</div>
	</div>
);

ShowCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	progress: PropTypes.number,
};
