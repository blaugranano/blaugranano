/**
* Import packages
*/
import utils from './utils.js'

/**
* Configure package
*/
const WP_ENDPOINT = `https://${process.env.WP_DOMAIN}/wp-json/${process.env.WP_API_VERSION}`

/**
* Get menus
* @param {Object} params Parameters to filter the request
* @returns A response object
*/
async function get({ id }) {
  try {
    const url = `${WP_ENDPOINT}/menus/${id}`

    return utils.getUrl(url)
  } catch (error) {
    console.log(error)

    return false
  }
}

/**
* Export package
*/
export default {
  get,
}
