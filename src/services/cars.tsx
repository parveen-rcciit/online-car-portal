import { CarMap, CarQuery } from '../interface'
import { API_URL } from '../constants/config'

const getCarList = async (
    carQuery: CarQuery,
): Promise<CarMap | undefined> => {
    try {
        if (!carQuery || !Object.keys(carQuery).length) {
            throw new Error('Invalid input: Get Product List');
        }
        const { color, manufacturer, sort, page} = carQuery
        const query = `/cars?manufacturer=${manufacturer}&color=${color}&sort=${sort}&page=${page}`
        const response = await fetch(`${API_URL}${query}`);
        const body: CarMap = await response.json();
        if (!body) {
            throw new Error('Invalid response: Get Car List');
        }
        return body
    } catch (err) {
        console.error('Exception in fetching car list')
        return
    }
};

export { getCarList as default }