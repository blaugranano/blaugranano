/**
* Import packages
*/
import utils from './utils.js'

/**
* Configure package
*/
const WP_ENDPOINT = `https://${process.env.WP_DOMAIN}/wp-json/${process.env.WP_API_VERSION}`

/**
* Get posts
* @param {Object} params Parameters to filter the request
* @returns A response object
*/
async function get({ id, limit, offset, status }) {
  try {
    const url = id ? `${WP_ENDPOINT}/posts/${id}` : `${WP_ENDPOINT}/posts`
    const params = {
      offset: parseInt(offset) || 0,
      limit: parseInt(limit) || 1,
      post_status: status || 'publish',
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
