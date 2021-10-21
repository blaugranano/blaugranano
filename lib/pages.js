/**
* Import packages
*/
import utils from './utils'

/**
* Configure package
*/
const WP_ENDPOINT = `https://${process.env.WP_DOMAIN}/wp-json/${process.env.WP_API_VERSION}`

/**
* Get pages
* @param {Object} params Parameters to filter the request
* @returns A response object
*/
async function get({ id, slug }) {
  try {
    const url = id ? `${WP_ENDPOINT}/pages/${id}` : `${WP_ENDPOINT}/pages`
    const params = {
      slug,
    }

    return utils.getUrl(url, { params })
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
