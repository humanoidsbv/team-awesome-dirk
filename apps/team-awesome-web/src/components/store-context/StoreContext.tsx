import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

import * as Types from "../../types";

interface StoreProviderProps {
  children: ReactNode | ReactNode[];
}

interface StoreContextProps {
  timeEntries: Types.TimeEntry[];
  setTimeEntries: Dispatch<SetStateAction<Types.TimeEntry[]>>;
  memberEntries: Types.TeamMember[];
  setMemberEntries: Dispatch<SetStateAction<Types.TeamMember[]>>;
  isModalActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
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
