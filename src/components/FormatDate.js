export const formatDate = (dateInput) => {
  const newDate = new Date(dateInput);
  const monthValue =
    newDate.getMonth() < 10
      ? "0" + (newDate.getMonth() + 1).toString()
      : (newDate.getMonth() + 1).toString;

  const dateValue =
    newDate.getDate() < 10
      ? "0" + newDate.getDate().toString()
      : newDate.getDate();
  return `${newDate.getFullYear()}-${monthValue}-${dateValue}`;
};
