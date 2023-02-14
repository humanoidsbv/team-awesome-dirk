export const calculateDuration = (startTimeStamp: string, stopTimeStamp: string) => {
  if (!startTimeStamp || !stopTimeStamp) {
    return "00:00";
  }

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
