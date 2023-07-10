import React from 'react';
import logo from '../images/logo.svg';
import { pageLinks } from '../data';
import { socialLinks } from '../data';
import SocialLink from './SocialLink';
import PageLink from './PageLink';

const Nav = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <ul className="nav-links" id="nav-links">
        {pageLinks.map((pageLink) => {
        return (
            <PageLink key={pageLink.id} {...pageLink} liClass='nav-link' />
        );
      })}
      </ul>

      <ul className="nav-icons">
        {socialLinks.map((socialLink) =>{
          return (
            <SocialLink key={socialLink.id} {...socialLink} liClass='nav-icon' />
          );
        })}
      </ul>
    </div>
  </nav>
  )
}

export default Nav