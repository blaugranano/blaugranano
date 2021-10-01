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
* @param {Object} params Parameters to filter the request
* @returns A response object
*/
async function get({ id, offset, limit }) {
  try {
    const url = id ? `${WP_ENDPOINT}/posts/${id}` : `${WP_ENDPOINT}/posts`
    const params = {
      offset: parseInt(offset) || 0,
      per_page: parseInt(limit) || 1,
      status: 'publish',
      type: 'post',
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
