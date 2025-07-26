const Post = require("../models/Post");

exports.createPost = async(req,res) => {
    const {title, content, username, tags} = req.body;

    try{
        const newPost = await Post.create({title, content, username, tags});
        res.status(201).json(newPost);
    }catch(err){
        res.status(500).json({error: err});
    }
}

exports.deletePost = async (req, res)=> {
    try{
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Post deleted successfully"});
    }catch(err){
        res.status(500).json({error: err});
    }
}

exports.getAppPosts = async(req, res) =>{
    try{
        const allPosts = await Post.find();
        res.status(200).json(allPosts);
    }catch(err){
        res.status(500).json({error: err});
    }
}