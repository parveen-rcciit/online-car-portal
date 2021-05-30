export const readFavCar = (stockNumber: number) => {
  let favourite = false;
  let favArray: number[] = [];
  if (localStorage.getItem('auto1_favourite_cars')) {
    const favCars = localStorage.getItem('auto1_favourite_cars') || '';
    favArray = JSON.parse(favCars);
  }
  if (favArray.indexOf(stockNumber) > -1) {
    favourite = true;
  }
  return favourite;
};

export const saveFavCar = (stockNumber: number) => {
  let favourite = false;
  let favArray: number[] = [];
  if (localStorage.getItem('auto1_favourite_cars')) {
    const favCars = localStorage.getItem('auto1_favourite_cars') || '';
    favArray = JSON.parse(favCars);
  }
  if (favArray.indexOf(stockNumber) > -1) {
    favArray.splice(favArray.indexOf(stockNumber), 1);
    localStorage.setItem('auto1_favourite_cars', JSON.stringify(favArray));
    favourite = false;
  } else {
    favArray.push(stockNumber);
    localStorage.setItem('auto1_favourite_cars', JSON.stringify(favArray));
    favourite = true;
  }
  return favourite;
};
