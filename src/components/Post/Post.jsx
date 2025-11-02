import React from 'react';
import { NavLink } from 'react-router';

const Post = ({post}) => {
    // console.log(post)
    const {title,id,userId}=post
    return (
        <div className='border-2 border-indigo-600'>
            <h2>Each post</h2>
            <p>Title :{title}</p>
            <p>id : {id}</p>
            <p>user Id : {userId}</p>
            <NavLink to={`/posts/${id}`}>
                <button>Post Details</button>
            </NavLink>
        </div>
    );
};

export default Post;