
export const formatTime = (rawTime: number) => {
  const getSeconds = `0${rawTime % 60}`.slice(-2);

  const minutes = `${Math.floor(rawTime / 60)}`;
  const getMinutes = `0${Number(minutes) % 60}`.slice(-2);

  const getHours = `0${Math.floor(rawTime / 3600)}`.slice(-2);

  return `${getHours}:${getMinutes}:${getSeconds}`;
};
