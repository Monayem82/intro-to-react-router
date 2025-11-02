import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const postData=useLoaderData()
    console.log(postData)
    return (
        <div>
            <h3>This is the posts</h3>
            {
                postData.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;