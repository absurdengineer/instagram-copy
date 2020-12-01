import React from 'react'
import posts from "../../assets/posts"

const UserPosts = props => {
    const uname = props.uname
    const userposts = posts.filter(post => post.postedBy === uname)
    console.log(userposts)
    return ( 
        <div class="row">
  <div class="col-md-12">

    <div id="mdb-lightbox-ui"></div>

    <div class="mdb-lightbox">

    </div>

  </div>
</div>
    );
}

export default UserPosts;