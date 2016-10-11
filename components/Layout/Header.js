import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import TicketStub from '../TicketStub';
import styles from './Header.css';
import CSSModules from 'react-css-modules';

const Header = ({
  ticketClick
}) =>
   (
      <header styleName="header">
        <div styleName="row">
          <Link styleName="logo" to="/"></Link>
          <nav styleName="nav">
            <a href="#highlights" styleName="link">2016 Highlights</a>
            <a href="#activities" styleName="link">Activities</a>
            <a href="#tickets" styleName="link">Tickets</a>
            <a href="#contact" styleName="link">Contact Us</a>
            <TicketStub onClick={ticketClick} />
          </nav>
        </div>
      </header>
    );

export default CSSModules(Header, styles);
