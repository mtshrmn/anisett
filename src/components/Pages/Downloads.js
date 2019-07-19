import React from "react";
import {ShowDownload} from "..";

export const DownloadsPage = () => (
	<div>
		<ShowDownload
			show={{
				title: "Dr. STONE",
				thumbnail: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-pAyqB5RxQlsI.png",
				episode: 1,
			}}
			downloadProgress={100}
			upSpeed="105kbps"
			downSpeed="0kbps"
			peers={300}
			seeders={80}
			timeRemaining="N/A"
		/>
		<ShowDownload
			show={{
				title: "Dr. STONE",
				thumbnail: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-pAyqB5RxQlsI.png",
				episode: 2,
			}}
			downloadProgress={38}
			upSpeed="98kbps"
			downSpeed="1.1Mbps"
			peers={300}
			seeders={80}
			timeRemaining="12 Minutes"
		/>
	</div>
);
