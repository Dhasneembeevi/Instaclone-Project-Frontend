import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import "./view.css"
function ViewPost() {
  const [post, getPost] = useState([]);
  useEffect(() => {
    fetch("https://instaclone-project-backend.onrender.com/all")
      .then((res) => res.json())
      .then((data) => {
        getPost(data);
      })
      .catch((err) => console.log(err));
    //console.log(post);
  }, [post])
  if (getPost === null) {
    return <h1> loading...</h1>
  }

  return (
   <>
      <div> <Header />
      </div>
      <div className='allpost'>
        {
          post?.posts?.map?.((post, index) => {
            return (
              <div className='container' key={index}>
                <div className='name'><h4>{post.username}</h4></div>
                <div className='add'><h5>{post.address}</h5></div>
                <div >
                  <img className='posts' src={`https://instaclone-project-backend.onrender.com/images/${post.image_file}`} key={index} alt="post" /></div>
                <div className='icon'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsZkffwotwHU_YeqRa2jaNKyOGgWVJNnyYg&usqp=CAU" alt="Heart" className='heart' />
                  <img src="https://i.pinimg.com/736x/88/29/a7/8829a78269bb7cfd3ec1d5f522ff42bf.jpg" alt="Share" className='share' />
                </div>
                <p className='likes'><span>20</span> likes</p>
                <h5 className='desc'> {post.description}</h5>
              </div>

            )
          })
        }
      </div>
      </>
  );
}


export default ViewPost;

/*
// {
        //   post.map((post, index) => {
        //     console.log(post.name);
        //     return (
        //       <div key={index}>
        //         <div >
        //           <div>
        //             <p>{post.username}</p>
        //             <p>{post.address}</p>
        //           </div>
        //           <div >...</div>
        //         </div>
        //         <div >
        //           <img src={post.imagefile} alt="Nature" />
        //         </div>
        //         <div >
        //           <div>
        //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsZkffwotwHU_YeqRa2jaNKyOGgWVJNnyYg&usqp=CAU" alt="Heart" />
        //             <img src="https://i.pinimg.com/736x/88/29/a7/8829a78269bb7cfd3ec1d5f522ff42bf.jpg" alt="Share" />
        //           </div>
        //         </div>
        //      
        //         <p>{post.description}</p>
        //       </div>
        //     );
        //   })
        // }
*/