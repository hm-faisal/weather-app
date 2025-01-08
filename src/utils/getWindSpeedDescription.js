const getWindSpeedDescription = (speed) => {
  if (speed < 1) {
    return "Calm";
  } else if (speed >= 1 && speed <= 5) {
    return "Light Breeze";
  } else if (speed > 5 && speed <= 11) {
    return "Gentle Breeze";
  } else if (speed > 11 && speed <= 19) {
    return "Moderate Breeze";
  } else if (speed > 19 && speed <= 28) {
    return "Fresh Breeze";
  } else if (speed > 28 && speed <= 38) {
    return "Strong Breeze";
  } else if (speed > 38 && speed <= 49) {
    return "High Wind";
  } else if (speed > 49 && speed <= 61) {
    return "Gale";
  } else if (speed > 61 && speed <= 74) {
    return "Strong Gale";
  } else {
    return "Storm Force Winds";
  }
};

export default getWindSpeedDescription;
