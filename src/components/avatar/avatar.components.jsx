import React from 'react';

const Avatar = (props) => {
    return ( 
        <div className="nav-item avatar p-3">
            <a className="nav-link d-inline" href="/">
            <img src={`${props.imageUrl}`} className="rounded-circle z-depth-0 border"
                alt="avatar" height={`${props.height}`} />
            </a>
            <a className="nav-link p-2 d-inline font-weight-bold" href={`/profile/${props.uname}`}>
                <span>{props.uname}</span>
            </a>
        </div>
     );
}
 
export default Avatar;