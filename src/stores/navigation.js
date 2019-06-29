import {useState} from "react";
import {createStore} from "reusable";

const useNavigation = createStore(() => {
	const [active, setActive] = useState(0);

	return {
		active,
		setActive,
	};
});

export default useNavigation;
