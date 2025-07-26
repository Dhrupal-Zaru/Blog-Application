import React, { useState } from 'react'
import styles from './Blog.module.css'
import useCreatePost from '../features/useCreatePost';

export default function Blogs() {
    const [data, setData] = useState({
        title:"", content:"", username: "", tags:""
    });
    const {createPost, isCreating} = useCreatePost();

    function handleChange(e){
        setData({...data, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        createPost(data);
        setData({title:"", content:"", username: "", tags:""})
        
    }
    if(isCreating) return <p className={styles.loading}>Loading..</p>
    return (
        <div className={styles.blogs}>
            <h1>Blogs</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fields}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' value={data.title} onChange={handleChange} placeholder='Enter blog Title' required />
                    <label htmlFor='content'>Content</label>
                    <input type='text' name='content' value={data.content} onChange={handleChange} placeholder='Enter blog Content' required />
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' value={data.username} onChange={handleChange} placeholder='Enter blog Username' required/>
                    <label htmlFor='tags'>Tags</label>
                    <input type='text' name='tags' value={data.tags} onChange={handleChange} placeholder='Enter blog tags' required/>
                </div>
                <button>Add Blog</button>
            </form>
        </div>
    )
}
