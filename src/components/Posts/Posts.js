import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
    console.log(likePost)
  //reference APP

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires!---TRANSFORM INTO COMPONENTS */}
    {posts.map(post => 
    <Post 
    key={post.id} 
    post={post}/>)}
    

          
    </div>
  )
}

export default Posts;
