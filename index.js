const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uri      = 'mongodb://localhost:27017/mern_stack_0106';

const app      = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));

const { Docs }  = require('./models/docs');
const { Users } = require('./models/user');
const { Post }  = require('./models/posts');

/**
 * import routers
 */
const { CATEGORY_ROUTERS } = require('./routes/category');
const { PRODUCT_ROUTERS } = require('./routes/product');

app.use('/category', CATEGORY_ROUTERS);
app.use('/product', PRODUCT_ROUTERS);

app.get('/', async (req, res) => {
    // Docs.find({})   
    //     .then(list => res.json(list))
    // ...    .catch(err => res.json({ err })); //hello
    try {
        let listDocs = await Post.find({});
        res.json({ listDocs });
    } catch (error) {
        res.json({ error })
    }
});

app.get('/user', async (req, res) => {
    try {
        let listUser = await Users.find({});
        res.json({ listUser });
    } catch (error) {
        res.json({ error });
    }
});

app.get('/post/:title2/:description', async (req, res) => {
    const { description, title2 } = req.params;

    const infoPost = new Post({ title: title2, description });
    let infoPostAfterInserted = await infoPost.save();
    res.json(infoPostAfterInserted);
});

app.get('/post/:postID', async (req, res) => {
    const { postID } = req.params;
    let infoPost = await Post.findById(postID);
    res.json(infoPost);
});

app.post('/post-update/:postID', async (req, res) => {
    const { postID } = req.params;
    const { title, description } = req.body;
    
    let resutlAfterUpdated = await Post.findByIdAndUpdate(postID, {
        title, description
    }, { new: true });

    if (!resutlAfterUpdated) res.json({ error: true, message: 'cannot_update' });

    res.json({ error: false, postNew:resutlAfterUpdated })

});

app.get('/post-remove/:postID', async (req, res) => {
    const { postID } = req.params;
    let resultAfterDelete = await Post.findByIdAndRemove(postID);
    res.json({ resultAfterDelete });
})

// app.get('/user/:userID', (req, res) => {
//     const { userID, username } = req.params;
//     // let infoPost = await Post.findById(postID);
    // let infoUser = await Users.findOne({ _id: userID })

// })

mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log(`mongo client connected`)
    app.listen(3000, () => console.log(`server started at port 3000`));
});
