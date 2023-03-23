import { create } from "zustand";

import * as Types from "../../types";

export interface Store {
  timeEntries: Types.TimeEntry[];
  setTimeEntries: (timeEntries: Types.TimeEntry[]) => void;
}

export const useStore = create<Store>()((set) => ({
  timeEntries: [],
  setTimeEntries: (timeEntries) => set({ timeEntries }),
}));
