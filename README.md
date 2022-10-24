# [blaugranano/blaugranano](https://github.com/blaugranano/blaugranano)

This is the source code for [blaugrana.no](https://www.blaugrana.no/), the website of [@blaugranano](https://github.com/blaugranano).

## TODO

- [ ] Replace [pugjs/pug](https://github.com/pugjs/pug) with [facebook/react](https://github.com/facebook/react)
- [ ] Add infinite post loop
- [ ] Add archive feature
- [ ] Add search feature

## Using the [blaugrana.no](https://www.blaugrana.no/) API

This repo is the frontend part of [blaugrana.no](https://www.blaugrana.no/). It communicates with a [WordPress/WordPress](https://github.com/WordPress/WordPress) backend that serves our posts and pages.

The frontend communicates with the backend using the [WordPress REST API](https://developer.wordpress.org/rest-api/). We use custom endpoints for API versioning and cleaner response output. These are available at `https://api.blgr.app/wp-json/bg/v5`. The default WordPress endpoints are also available at `https://api.blgr.app/wp-json/wp/v2`.

### Sample request

```sh
curl -X GET 'https://api.blgr.app/wp-json/bg/v5/posts' \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  --data-raw '{"limit":1,"offset":0,"post_status":"publish"}' \
  --compressed | json_pp -json_opt pretty
```

### Sample response

```json
{
   "_api_namespace": "Blaugrana\\Api\\v5",
   "_api_version": "v5",
   "data": {
      "next_post": {
         "post_category": "String",
         "post_id": 123,
         "post_image": "String",
         "post_slug": "String",
         "post_title": "String"
      },
      "post_author": "String",
      "post_category": "String",
      "post_content": "String",
      "post_date": "String",
      "post_id": 123,
      "post_image": "String",
      "post_slug": "String",
      "post_title": "String",
      "previous_post": {
         "post_category": "String",
         "post_id": 123,
         "post_image": "String",
         "post_slug": "String",
         "post_title": "String"
      }
   }
}
```
