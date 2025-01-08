const convertTemp = (temp) => {
  const celsius = temp - 273.15;
  const fahrenheit = (9 / 5) * (temp - 273.15) + 32;
  return { celsius, fahrenheit };
};

export default convertTemp;
