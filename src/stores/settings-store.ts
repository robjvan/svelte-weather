import { writable } from 'svelte/store';

// function createSettingsStore() {
// 	const { subscribe, set, update } = writable(
// 		{useMetric: true}
// 	);

// 	return {
// 		subscribe,
// 		set,
// 		update,
// 	};
// }

// export const settingsStore = createSettingsStore();

export const settingsStore = writable({useMetric: true});
