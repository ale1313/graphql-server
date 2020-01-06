export const onlyNumbers = value =>
  value !== undefined ? (!/^[0-9]+$/.test(value) ? false : true) : false;
