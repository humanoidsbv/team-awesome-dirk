export const calculateDuration = (startTimeStamp: string, stopTimeStamp: string) => {
  const startTimestampDate = new Date(startTimeStamp);
  const endTimestampDate = new Date(stopTimeStamp);

  return new Date(endTimestampDate.getTime() - startTimestampDate.getTime()).toLocaleTimeString(
    "nl-NL",
    {
      hour: "2-digit",
      minute: "2-digit",
    },
  );
};
