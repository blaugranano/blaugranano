/**
* Import modules
*/
import bg from './lib'
import express from 'express'
import gzip from 'compression'

/**
* Import icons
*/
import { toString } from '@carbon/icon-helpers'
import iconFacebook from '@carbon/icons/es/logo--facebook/32'
import iconGitHub from '@carbon/icons/es/logo--github/32'
import iconInstagram from '@carbon/icons/es/logo--instagram/32'
import iconTwitter from '@carbon/icons/es/logo--twitter/32'

/**
* Initialize Express
*/
const app = express()

/**
* Configure settings
*/
app.set('view engine', 'pug')
app.set('views', './views')

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
    iconFacebook: toString(iconFacebook),
    iconGitHub: toString(iconGitHub),
    iconInstagram: toString(iconInstagram),
    iconTwitter: toString(iconTwitter),
  }

  next()
})

/**
* GET: /favicon.ico
*/
app.get('/favicon.ico', (req, res) => {
  res.redirect(302, '/img/favicon-32.png')
})

/**
* GET: /
*/
app.get('/', async (req, res) => {
  const postData = await bg.posts.get({ limit: 32 })

  res.render('index', {
    postData,
  })
})

/**
* GET: /:postCategory/:postId/:postSlug
*/
app.get('/:postCategory/:postId/:postSlug', async (req, res) => {
  const postData = await bg.posts.get({ id: req.params.postId })

  res.render('post', {
    pageTitle: postData.wp_title.rendered,
    postData,
  })
})

/**
* GET: /:postCategory/:postDate/:postSlug/:postId
*/
app.get('/:postCategory/:postDate/:postSlug/:postId', async (req, res) => {
  const {
    postCategory,
    postId,
    postSlug,
  } = req.params

  res.redirect(302, `${req.protocol}://${req.get('host')}/${postCategory}/${postId}/${postSlug}`)
})

/**
* GET: /:postSlug
*/
app.get('/:postSlug', async (req, res, next) => {
  const postData = await bg.pages.get({ slug: req.params.postSlug })

  if (!postData.length) {
    return next()
  }

  res.render('page', {
    pageTitle: postData[0].wp_title.rendered,
    postData: postData[0],
  })
})

/**
* Create and start server
*/
app.listen(process.env.APP_PORT, () => {
  console.log(`>> Server listening on http://${process.env.APP_HOST}:${process.env.APP_PORT}/`)
})
