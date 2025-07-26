import React from 'react'
import styles from './Post.module.css'
import useDeletePost from '../features/useDeletePost'

export default function Post({ item }) {
    const {deletePost, isDeleting} = useDeletePost();
    function handleDelete(){
        deletePost(item._id)
    }
    if(isDeleting) return <p className={styles.loading}>Loading..</p>

    return (
        <div className={styles.post}>
            <h2>{item.title}</h2>
            <div className={styles.postDetail}>
                <h3>{item.content}</h3>
                <h5>Username: {item.username}</h5>
                <p>Tags: {item.tags}</p>
                <p>Date: {item.createdAt}</p>
            </div>
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    )
}
