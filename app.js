/**
* Import modules
*/
import bg from './lib'
import express from 'express'
import gzip from 'compression'
import http from 'http'

/**
* Import icons
*/
import { toString } from '@carbon/icon-helpers'
import iconChat from '@carbon/icons/es/chat/32'
import iconFacebook from '@carbon/icons/es/logo--facebook/32'
import iconInstagram from '@carbon/icons/es/logo--instagram/32'
import iconGitHub from '@carbon/icons/es/logo--github/32'

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
* Configure Pug locals
*/
app.use((req, res, next) => {
  res.locals = {
    iconChat: toString(iconChat),
    iconFacebook: toString(iconFacebook),
    iconGitHub: toString(iconGitHub),
    iconInstagram: toString(iconInstagram),
  }

  next()
})

/**
* GET: /
*/
app.get('/', async (req, res) => {
  const postData = await bg.posts.get({ limit: 32 })

  res.render('index', {
    icons: {
      iconFacebook: toString(iconFacebook),
      iconGitHub: toString(iconGitHub),
      iconInstagram: toString(iconInstagram),
    },
    postData,
  })
})

/**
* GET: /:postCategory?/:postDate/:postSlug/:postId
*/
app.get(':postCategory(/[a-z-]+)/:postId([0-9]+)/:postSlug([0-9a-z-]+)', async (req, res) => {
  const postData = await bg.posts.get({ id: req.params.postId })

  res.render('post', { postData })
})

/**
* Create and start server
*/
const server = http.createServer(app).listen(app.get('port'), () => {
  console.log('>> Server listening on http://%s:%d/', app.get('host'), server.address().port)
})
