import { NotFoundError } from "../errors";
import * as Types from "../../types/timeEntries";

export const deleteTimeEntry = async (
  timeEntryToDelete: Types.TimeEntry,
): Promise<Types.TimeEntry> => {
  return fetch(`http://localhost:3004/time-entries/${timeEntryToDelete.id}`, {
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
