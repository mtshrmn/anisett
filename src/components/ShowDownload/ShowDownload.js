import React, {useState} from "react";
import PropTypes from "prop-types";

import style from "./ShowDownload.module.css";
import {ProgressBar} from "../ProgressBar/ProgressBar";
//TODO: add pause and download icons
export const ShowDownload = props => {
	const [downloading, setDownloading] = useState(true);
	return (
		<div className={style.container}>
			<img
				className={style.thumbnail}
				src={props.show.thumbnail}
				alt={props.show.title}
			/>
			<div className={style.info}>
				<div className={style.header}>
					<div>
						<h2 className={style.title}>{props.show.title}</h2>
						<h4 className={style.episode}>Episode: {props.show.episode}</h4>
					</div>
					<div
						className={style.btn}
						onClick={() => setDownloading(!downloading)} />
				</div>
				<div className={style.stats}>
					<h5 className={style.speed}>{props.downSpeed}/{props.upSpeed}</h5>
					<h5 className={style.remaining}>Remaining: {props.timeRemaining}</h5>
				</div>
				<ProgressBar progress={props.downloadProgress}/>
			</div>
		</div>
	);
};

ShowDownload.propTypes = {
	show: PropTypes.object,
	downloadProgress: PropTypes.number,
	upSpeed: PropTypes.string,
	downSpeed: PropTypes.string,
	peers: PropTypes.number,
	seeders: PropTypes.number,
	timeRemaining: PropTypes.string,
};

//integrate this late in proptypes...
/* show = {
	title: "",
	thumbnail: "",
	episode: 0,
} */
