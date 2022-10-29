import { writable } from "svelte/store";

export function createLocationStore() {
  const { subscribe, set, update } = writable({
    latitude: -999,
    longitude: -999,
  });

  return { 
    subscribe,
    set,
    update,
    grabUserLocation: () => {
      //
    }
  }
}

export const locationStore = createLocationStore();