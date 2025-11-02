import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetails=useLoaderData()
    return (
        <div>
            <h3>detals showing posts</h3>
            <p>{postDetails.body}</p>
            <p>{postDetails.id}</p>
        </div>
    );
};

export default PostDetails;