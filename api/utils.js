/**
* Import packages
*/
import axios from 'axios'

/**
* Get a URL
* @param {String} url A URL to get
* @returns The response object
*/
async function getUrl(url, params) {
  try {
    const result = await axios.get(url, params || {})

    return result.data
  } catch (error) {
    console.error(error)

    return false
  }
}

/**
* Export package
*/
export default {
  getUrl,
}
