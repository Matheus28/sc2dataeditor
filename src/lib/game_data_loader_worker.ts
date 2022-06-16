import { loadDependency } from "./game_data_loader";

onmessage = (e) => {
	loadDependency.apply(null, e.data).then(e => {
		postMessage(e);
	});
}
