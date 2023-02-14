/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useEffect } from "react";

import { TimeEntry } from "../time-entry";
import * as Types from "../../types";
import { NotFoundError } from "../../services/errors";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);

  async function getTimeEntries(): Promise<Types.TimeEntry[]> {
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
  }

  async function fetchTimeEntries() {
    const fetchedTimeEntries = await getTimeEntries();
    if (fetchedTimeEntries instanceof NotFoundError) {
      console.log("not found");
      return;
    }
    setTimeEntries(fetchedTimeEntries);
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  return (
    <>
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
