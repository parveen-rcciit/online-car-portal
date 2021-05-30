import { readFavCar, saveFavCar } from '../saveFavouriteCarToLocalStorage';

describe('Save to LocalStorage', () => {
  it('read from localStorage', () => {
    const stockNumber = 42300;
    expect(readFavCar(stockNumber)).toBe(false);
    expect(saveFavCar(stockNumber)).toBe(true);
    expect(readFavCar(stockNumber)).toBe(true);
    expect(saveFavCar(stockNumber)).toBe(false);
  });
});
