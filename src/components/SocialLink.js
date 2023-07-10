import React from 'react';

const SocialLink = ({href, icon, liClass}) => {
  return (
    <li>
        <a href={href} className={liClass}>
            <i className={icon}></i>    
        </a>          
    </li>
  )
}

export default SocialLink