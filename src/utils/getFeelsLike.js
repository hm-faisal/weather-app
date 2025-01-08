const getFeelsLike = (temp, feelLikeTemp) => {
  if (temp < feelLikeTemp) {
    return "warmer";
  }
  if (temp > feelLikeTemp) {
    return "Cooler";
  }
  return "Normal";
};

export default getFeelsLike;
