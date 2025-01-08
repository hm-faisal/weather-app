const getHumidity = (value) => {
  if (value <= 30) {
    return "Dry Condition";
  }
  if (value > 30 || value <= 60) {
    return "Comfortable";
  }
  if (value > 60 || value <= 80) {
    return "Noticeable Moisture";
  }
  return "Excessive Moisture";
};

export default getHumidity;
