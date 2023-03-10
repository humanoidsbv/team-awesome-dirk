export const convertTime = (timeStamp: string) =>
  new Date(timeStamp).toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

export const convertTimeToDay = (timeStamp: string) =>
  new Date(timeStamp).toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
  });
