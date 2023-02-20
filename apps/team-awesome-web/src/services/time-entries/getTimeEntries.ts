import { NotFoundError } from "../errors";
import * as Types from "../../types/timeEntries";

export const getTimeEntries = async (): Promise<Types.TimeEntry[]> => {
  return fetch("http://localhost:3004/time-entries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError();
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
