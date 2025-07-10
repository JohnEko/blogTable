import express from 'express'
import cors from 'cors'
import path from 'path'
import Posts from './posts'



const app = express()

app.use(cors())
app.use(path(Posts))

app.get('/', (req, res) => {
    res.send('Hello world')
})

//Get all single post, check is post dose not exist
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if (!post){
        return res.status(404).json({msg : `A post with the corresponding ${id} was not found`})
    }
   
    res.status(200).json(post)
       
})

//Create a post posts
app.post('/api/posts/', (req, res, next) => {
    const postsrticle = {
        id: posts.length + 1,
        title: req.body.title,
        Likes: req.Likes,
        dislike: req.dislike,
        comment:req.comment
    }
    if (!postsrticle) {
        const error = new Error({msg: "Some attribute are missing from your post"})
        error.status = 400
        return next(error)
    }
    posts.push(postsrticle)
    res.status(201).json(posts)

})
//update method
app.put('/api/posts/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if(!post) {
           const error = new Error({msg: "Some attribute are missing from your post"})
        error.status = 404
        return next(error)  
    }

    post.title = req.body.title
    res.status(200).json(posts)
})

//delete method

app.delete('/api/get/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((posts) => post.id === id)

    if (!post) {
      const error = new Error({msg: "Some attribute are missing from your post"})
        error.status = 404
        return next(error)  
    }

    posts = posts.filter((post) => post.id === id)
    res.status(200).json(posts)
})



app.listen(8000, () =>
console.log('Server is running on port 8000'));

// npx nodemon