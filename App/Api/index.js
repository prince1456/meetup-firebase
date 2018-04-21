
import { API_KEY } from '../../config'
import _ from 'lodash'

const getCurrency  = async  () => {
    return await fetch(`https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`, {
        method: 'GET'
    })
    .then(response => response.json())
    
}
export default getCurrency