import { TimeEntry } from "../time-entry";
import mockTimeEntries from "../../../fixtures/mock-time-entries";
import { Button } from "../button";
import { useState } from "react";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);
  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: "Port of Rotterdam",
        startTimestamp: "2022-09-26T16:00:00.000Z",
        stopTimestamp: "2022-09-26T18:00:00.000Z",
      },
    ]);
  };

  return (
    <>
      {timeEntries.map((timeEntry) => (
        <TimeEntry
          client={timeEntry.client}
          startTimeStamp={timeEntry.startTimestamp}
          stopTimeStamp={timeEntry.stopTimestamp}
          key={timeEntry.id}
        />
      ))}
      <Button onClick={handleClick}>New entry</Button>
    </>
  );
};
