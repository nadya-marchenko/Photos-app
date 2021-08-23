export const getFilledArray = (num: number) =>
  Array.from({ length: num }, (_, i) => i + 1);

export const checkErrorsFromAPI = ({
  status,
  statusText,
}: {
  status: number;
  statusText?: string;
}) => {
  if (status !== 200) {
    throw new Error(statusText);
  }
};
