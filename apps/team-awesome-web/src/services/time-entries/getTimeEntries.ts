import { NotFoundError } from "../errors";
import * as Types from "../../types/timeEntries";

export const getTimeEntries = async (): Promise<Types.TimeEntry[]> => {
  const baseURL = process.env.NEXT_PUBLIC_DB_HOST;

  return fetch(`${baseURL}/timeEntries`, {
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
