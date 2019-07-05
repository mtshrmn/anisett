import React from "react";
import {ShowDownload} from "..";

export const DownloadsPage = () => (
	<div>
		<ShowDownload
			show={{
				title: "Lorem Ipsum",
				thumbnail: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-pAyqB5RxQlsI.png",
			}}
			downloadProgress={8}
			upSpeed="420kbps"
			downSpeed="69Mbps"
			peers={300}
			seeders={80}
			timeRemaining="40 Minutes"
		/>
	</div>
);
