import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import TicketStub from '../TicketStub';
import styles from './Header.css';
import CSSModules from 'react-css-modules';

const Header = ({
  ticketClick, scrollTo
}) =>
   (
      <header styleName="header">
        <div styleName="row">
          <Link styleName="logo" to="/"></Link>
          <nav styleName="nav">
            <a href="#overview" onClick={scrollTo} styleName="link">2016 Highlights</a>
            <a href="#activities" onClick={scrollTo} styleName="link">Activities</a>
            <a href="#tickets" onClick={scrollTo} styleName="link">Tickets</a>
            <a href="#contact" onClick={scrollTo} styleName="link">Contact Us</a>
            <TicketStub onClick={ticketClick} />
          </nav>
        </div>
      </header>
    );

export default CSSModules(Header, styles);
