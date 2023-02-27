import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

import * as Types from "../../types";

interface StoreProviderProps {
  children: ReactNode | ReactNode[];
}

interface StoreContextProps {
  isModalActive: boolean;
  memberEntries: Types.TeamMember[];
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  setMemberEntries: Dispatch<SetStateAction<Types.TeamMember[]>>;
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
  timeEntries: Types.TimeEntry[];
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export function StoreProvider({ children }: StoreProviderProps) {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);
  const [memberEntries, setMemberEntries] = useState<Types.TeamMember[]>([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const store = {
    timeEntries,
    setTimeEntries,
    memberEntries,
    setMemberEntries,
    isModalActive,
    setIsModalActive,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
