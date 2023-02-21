import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

import * as Types from "../../types";

interface StoreProviderProps {
  children: ReactNode | ReactNode[];
}

interface StoreContextProps {
  timeEntries: Types.TimeEntry[];
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
  isModalActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export function StoreProvider({ children }: StoreProviderProps) {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const store = {
    timeEntries,
    setTimeEntries,
    isModalActive,
    setIsModalActive,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
