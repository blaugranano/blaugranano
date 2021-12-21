# [blaugranano/blaugranano](https://github.com/blaugranano/blaugranano)

This is the source code for [blaugrana.no](https://www.blaugrana.no/), the website of [@blaugranano](https://github.com/blaugranano).

## Current roadmap

- [ ] Replace [pugjs/pug](https://github.com/pugjs/pug) with [facebook/react](https://github.com/facebook/react)
- [ ] Add infinite post loop
- [ ] Add archive feature
- [ ] Add search feature

## Contributing to [blaugrana.no](https://www.blaugrana.no/)

This repo is the frontend part of [blaugrana.no](https://www.blaugrana.no/). It communicates with a [WordPress/WordPress](https://github.com/WordPress/WordPress) backend that serves the actual content such as posts and pages. The frontend communicates with the backend using the [WordPress REST API](https://developer.wordpress.org/rest-api/) with custom endpoints.

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
