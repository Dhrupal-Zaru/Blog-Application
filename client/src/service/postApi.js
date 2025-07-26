import axios from 'axios';

export async function createPost(data){
    const {title, content, username, tags}= data;
    try{
        const res = await axios.post('http://localhost:5000/api/posts/create', {title, content,username, tags})
        // console.log(res.data)
        return res.data;
    }catch(err){
        throw err;
    }
}
export async function getAllPosts(){
    try{
        const res = await axios.get('http://localhost:5000/api/posts/get')
        return res.data;
    }catch(err){
        throw err;
    }
}
export async function deletePost(id){
    try{
        const res = await axios.delete(`http://localhost:5000/api/posts/delete/${id}`)
        return res.data;
    }catch(err){
        throw err;
    }
}