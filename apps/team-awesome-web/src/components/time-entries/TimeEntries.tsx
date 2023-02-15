/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { TimeEntry } from "../time-entry";
import * as Types from "../../types";
import { NotFoundError } from "../../services/errors";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getTimeEntries = async (): Promise<Types.TimeEntry[]> => {
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
        console.log(response.status);
        return response;
      })
      .then((response) => response.json())
      .catch((error) => error);
  };

  const fetchTimeEntries = async () => {
    const fetchedTimeEntries = await getTimeEntries();
    if (fetchedTimeEntries instanceof NotFoundError) {
      console.log("not found");

      setErrorMessage("Time entries were not found");
      return;
    }
    setTimeEntries(fetchedTimeEntries);
  };

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  return (
    <>
      {errorMessage ? <p>{errorMessage}</p> : null}

      {timeEntries.map((timeEntry) => (
        <>
          <TimeEntry
            key={timeEntry.id}
            client={timeEntry.client}
            startTimeStamp={timeEntry.startTimestamp}
            stopTimeStamp={timeEntry.stopTimestamp}
          />
        </>
      ))}
    </>
  );
};
