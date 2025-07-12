import express from 'express'
import cors from 'cors'
import{ Posts} from './posts.js'



const app = express()
// const posts = require(Posts);
app.use(cors())

let posts = Posts


app.get('/', (req, res) => {
    res.send(posts)
})
//Get all single post, check is post dose not exist
app.get('/api/posts/:id',(req, res) => {
        const id = parseInt(req.params.id)
        const post = posts.find((post) => post.id === id)

        if (!post) {
            return res.status(404).json({ msg: `A post with the corresponding ${id} was not found` })
        }

        res.status(200).json(post)

    })



//Create a post posts
app.post('/api/posts/', (req, res, next) => {
    const postsArticle = {
      "id": 12,
      "body": "This is some awesome thinking!",
      "postId": 242,
      "reactions": {
        "likes": 192,
        "dislikes": 25
      },
      "user": {
        "id": 105,
        "username": "emmac",
        "fullName": "Emma Wilson"
      }
    }
    if (!postsArticle) {
        return res.status(404).json({ msg: `A post with the corresponding was not found` })
    }
    posts.push(postsArticle)
    res.status(201).json(posts)

})
//update method
app.put('/api/posts/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if(!post) {
        return res.status(404).json({ msg: `A post with the corresponding was not found` })
    }

    post.user = req.body.title
    res.status(200).json(posts)
})

//delete method

app.delete('/api/get/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if (!post) {
     return res.status(404).json({ msg: `A post with the corresponding was not found` })  
    }

    posts = posts.filter((post) => post.id === id)
    res.status(200).json(posts)
})



app.listen(8000, () =>
console.log('Server is running on port 8000'));

// npx nodemon