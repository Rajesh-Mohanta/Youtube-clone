export const API_KEY = "AIzaSyAV31iQI3sJbcN6rnTx0TD-qSJKWNXSREQ";
export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
