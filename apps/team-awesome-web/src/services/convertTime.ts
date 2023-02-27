export const convertTime = (timeStamp: string) =>
  new Date(timeStamp).toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
