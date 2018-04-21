import { API_KEY } from '../../config';

const getCurrency = async () => {
    try {
        return  await fetch(`https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`, {
            method: 'GET',
        })
        .then(res => res.json())
    } 
    catch(error) {
        return error
    }
}
export { getCurrency }