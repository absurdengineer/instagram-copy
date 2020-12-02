import React from 'react';
import { Link } from 'react-router-dom';

const Avatar = (props) => {
    return ( 
        <div className="nav-item avatar p-3">
            <Link className="nav-link d-inline" to="/">
            <img src={`${props.imageUrl}`} className="rounded-circle z-depth-0 border"
                alt="avatar" height={`${props.height}`} />
            </Link>
            <Link className="nav-link p-2 d-inline font-weight-bold" to={`/profile/${props.uname}`}>
                <span>{props.uname}</span>
            </Link>
        </div>
     );
}
 
export default Avatar;