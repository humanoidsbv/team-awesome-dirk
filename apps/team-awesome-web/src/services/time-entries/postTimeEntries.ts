import * as Types from "../../types/timeEntries";

export const postTimeEntries = async (newTimeEntry: Types.TimeEntry) => {
  const raw = JSON.stringify(newTimeEntry);
  return fetch("https://my-json-server.typicode.com/humanoidsbv/team-awesome-dirk/time-entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  })
    .then((response) => {
      if (response.status === 404) {
        throw new Error();
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
