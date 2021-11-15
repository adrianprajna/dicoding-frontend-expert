const truncate = (string) => {
  const length = 150;
  return `${string.substring(0, length)}...`;
};

export default truncate;
