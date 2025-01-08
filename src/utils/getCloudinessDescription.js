const getCloudinessDescription = (cloudiness) => {
  if (cloudiness === 0) {
    return "Clear Skies";
  } else if (cloudiness > 0 && cloudiness <= 25) {
    return "Mostly Clear";
  } else if (cloudiness > 25 && cloudiness <= 50) {
    return "Partly Cloudy";
  } else if (cloudiness > 50 && cloudiness <= 75) {
    return "Mostly Cloudy";
  } else {
    return "Overcast";
  }
};

export default getCloudinessDescription;
