import { ColorMap } from '../interface'
import { API_URL } from '../constants/config'

const getAllColor = async (): Promise<string[]> => {
    try {
        const response = await fetch(API_URL+'/colors');
        const body: ColorMap = await response.json();
        if (!body) {
            throw new Error('Invalid response: Get Color List');
        }
        const { colors = [] } = body
        return colors
    } catch (err) {
        console.error('Exception in fetching color list')
        return []
    }
};


export { getAllColor as default }