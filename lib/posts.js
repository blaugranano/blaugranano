/**
* Import packages
*/
import utils from './utils'

/**
* Get posts
* @param {Object} params Parameters to filter the request
* @returns A response object
*/
async function get({ id, offset, limit }) {
  try {
    const url = id ? `https://${process.env.WP_DOMAIN}/wp-json/wp/v2/posts/${id}` : `https://${process.env.WP_DOMAIN}/wp-json/wp/v2/posts`
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
