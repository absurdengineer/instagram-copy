import React from 'react'

const UserPost = props => {
    return ( 
        <figure class="col-md-4">
        <a href={props.image} data-size="1600x1067">
          <img src={props.image} alt="post" class="img-fluid" />
        </a>
      </figure>
     );
}
 
export default UserPost;
