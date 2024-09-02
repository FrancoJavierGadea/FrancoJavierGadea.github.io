import { updateLogroRecurrente, updateLogroClickomano } from "@Data/Logros/Logros.js";
import { detectDevtoolsOpen } from "src/utils/detectDevtools";

	updateLogroClickomano();

	updateLogroRecurrente();

	detectDevtoolsOpen().then(() => {


		alert('Dev tool are open');
	});