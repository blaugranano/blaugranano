/**
* Load modules
*/
import bg from './lib'
import express from 'express'
import gzip from 'compression'
import http from 'http'

/**
* Initialize Express
*/
const app = express()

/**
* Configure settings
*/
app.set('view engine', 'pug')
app.set('views', './views')
app.set('host', process.env.HOST || 'localhost')
app.set('port', process.env.PORT || 3000)

/**
* Configure middleware
*/
app.use(gzip())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', express.static('./public'))

/**
* GET: /
*/
app.get('/', async (req, res) => {
  const postData = await bg.posts.get({ limit: 32 })

  res.render('index', { postData })
})

/**
* GET: /:postCategory?/:postDate/:postSlug/:postId
*/
app.get(':postCategory(/[a-z-]+)/:postId([0-9]+)/:postSlug([0-9a-z-]+)', async (req, res) => {
  const postData = await bg.posts.get({ id: req.params.postId })

  console.log(postData);

  res.render('post', { postData })
})

/**
* Create and start server
*/
const server = http.createServer(app).listen(app.get('port'), () => {
  console.log('>> Server listening on http://%s:%d/', app.get('host'), server.address().port)
})
