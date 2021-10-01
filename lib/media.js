/**
* Import packages
*/
import utils from './utils'

/**
* Configure variables
*/
const WP_ENDPOINT = process.env.WP_ENDPOINT || 'https://wordpress.blaugrana.no/wp-json/wp/v2'

/**
* Get posts
* @returns A response object
*/
async function get({ id, offset, limit }) {
  try {
    const url = `${WP_ENDPOINT}/media/${id}`

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
