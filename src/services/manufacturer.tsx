import { Manufacturer, ManufacturerMap } from '../interface'
import { API_URL } from '../constants/config'

const getAllManufacturer = async (): Promise<Manufacturer[]> => {
    try {
        const response = await fetch(API_URL+'/manufacturers');
        const body: ManufacturerMap = await response.json();
        if (!body) {
            throw new Error('Invalid response: Get Manufacturer List');
        }
        const { manufacturers = [] } = body
        return manufacturers
    } catch (err) {
        console.error('Exception in fetching manufacturer list')
        return []
    }
};


export { getAllManufacturer as default }