import { NotFoundError } from "../errors";
import * as Types from "../../types/timeEntries";

export const deleteTimeEntry = async (
  timeEntryToDelete: Types.TimeEntry,
): Promise<Types.TimeEntry> => {
  const baseURL = process.env.NEXT_PUBLIC_DB_HOST;
  return fetch(`${baseURL}/timeEntries/${timeEntryToDelete.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError();
      }
    })
    .catch((error) => error);
};
