export default (string) => {
  return parseInt(string.replace(/,/g, ''));
};
