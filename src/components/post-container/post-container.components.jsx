import React from 'react'
import Avatar from '../avatar/avatar.components'
import Post from "../post/post.components"
import posts from "../../assets/posts" 

const PostContainer = () => {

    return ( 
        <div className="container mt-5 pt-3">
            <div className="row">
                <div className="col-md-7">
                    <div className="card" style={{height:100, marginTop:20, marginBottom:20 }}> 
                    </div>
                    {posts.map(post => <Post key={post.id} postedBy={post.postedBy} likes={post.likes} image={post.image} caption={post.caption} datePosted={post.datePosted} />)}
                </div>
                <div className="col-md-5 mt-5 " style={{position:"fixed", right : 110}}>
                    <Avatar height="65" uname="dilshad_i_am" imageUrl="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                </div>  
            </div>
        </div>
     );
}
 
export default PostContainer;