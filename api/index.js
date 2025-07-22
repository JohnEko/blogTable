import express from 'express'
import cors from 'cors'
import{ Posts} from './posts.js'



const app = express()
// const posts = require(Posts);
app.use(cors())
app.use(express.json())

let posts = Posts


app.get('/', (req, res) => {
    res.send(posts)
})
//Get all single post, check is post dose not exist
app.get('/posts/:id',(req, res) => {
        const id = parseInt(req.params.id)
        const post = posts.find((post) => post.id === id)

        if (!post) {
            return res.status(404).json({ msg: `A post with the corresponding ${id} was not found` })
        }

        res.status(200).json(post)

    })



//Create a post posts send new data
//this method takes the body and auto increment the post
app.post('/posts', (req, res, next) => {
    const {body} = req
    const newPost ={ id: posts[posts.length - 1].id + 1, ...body }
    posts.push(newPost)
    return res.status(201).send(newPost)

})
//update method
app.put('/posts/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if(!post) {
        return res.status(404).json({ msg: `A post with the corresponding was not found` })
    }

    post.user = req.body.title
    res.status(200).json(posts)
})

//delete method

app.delete('/posts/:id', (req, res, next) => {
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