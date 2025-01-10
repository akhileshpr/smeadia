import React, { useEffect, useState } from 'react'
import PostWidget from './postWidget'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsApi } from '../../services/allApi';
import { setPosts } from '../../redux';

const PostsWidget = ({data}) => {
  const dispatch = useDispatch();
  const posts = useSelector((state)=>state.posts);
  const token = useSelector((state)=>state.token);
  // console.log(posts);
  
  const getPosts = async () => {
    const reqHeader = { Authorization: `Bearer ${token}` };
    try {
      const result = await getPostsApi(reqHeader);
  
      if (result?.status === 200) {
        dispatch(setPosts({ posts: result?.data })); 
      } else {
        console.error("Failed to fetch posts:", result?.status);
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };
    useEffect(() => {
      if(token){
        getPosts();
      }
  }, [data]); 
  
  
  return (
    <>
        {posts?.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
            getPosts={getPosts}
          />
        )
      )}
    </>
  )
}

export default PostsWidget