import React, { useState } from 'react'
import styles from './AllBlogs.module.css'
import usePosts from '../features/usePosts'
import Post from './Post';

export default function AllBlogs() {
    const [query, setQuery] = useState('');
    const {allPosts, isLoading} = usePosts([]);

    function handleQueryChange(e){
        setQuery(e.target.value);
    }

    const filteredPosts = allPosts?.filter(item=> item.title.toLowerCase().includes(query.toLowerCase()));

    if(isLoading) return <p className={styles.loading}>Loading...</p>

    return (
        <div className={styles.allblogs}>
            <h2>All Blogs</h2>
            <div className={styles.search}>
                <input type='text' name='search' value={query} onChange={handleQueryChange} placeholder='Search..'/>
            </div>
            <div className={styles.blogContainer}>
                {filteredPosts.map((item)=> <Post key={item._id} item={item}/> )}
            </div>
        </div>
    )
}
