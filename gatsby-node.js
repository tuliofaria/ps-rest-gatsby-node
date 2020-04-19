const path = require('path')
const axios = require('axios')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const data = res.data
  const template = path.resolve('src/templates/Post.js')
  data.forEach(post => {
    createPage({
      path: '/post/' + post.id,
      component: template,
      context: {
        ...post
      }
    })
  })
}
