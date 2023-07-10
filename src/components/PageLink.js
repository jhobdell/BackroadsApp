import React from 'react'

const PageLink = ({href, text, liClass}) => {
  return (
    <li>
              <a href={href} className={liClass}> {text} </a>
            </li>
  )
}

export default PageLink