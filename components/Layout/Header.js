import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import TicketStub from '../TicketStub';
import styles from './Header.css';
import CSSModules from 'react-css-modules';


const desktopHeader = (ticketClick, scrollTo) =>
  (
    <header styleName="header">
        <div styleName="row">
          <Link styleName="logo" to="/"></Link>
          <nav styleName="nav">
            <a href="/#overview" onClick={scrollTo} styleName="link">2016 Highlights</a>
            <a href="/#activities" onClick={scrollTo} styleName="link">Activities</a>
            <a href="/#tickets" onClick={scrollTo} styleName="link">Tickets</a>
            <a href="/#contact" onClick={scrollTo} styleName="link">Contact Us</a>
            <TicketStub onClick={ticketClick} />
          </nav>
        </div>
      </header>
  )

const mobileHeader = (ticketClick, scrollTo) =>
  (
    <header styleName="header">
        <div styleName="row">
          <Link styleName="logo" to="/"></Link>
        </div>
        <div styleName="hiddenNav">
          <nav styleName="nav">
            <a href="/#overview" onClick={scrollTo} styleName="link">2016 Highlights</a>
            <a href="/#activities" onClick={scrollTo} styleName="link">Activities</a>
            <a href="/#tickets" onClick={scrollTo} styleName="link">Tickets</a>
            <a href="/#contact" onClick={scrollTo} styleName="link">Contact Us</a>
          </nav>
        </div>
      </header>
  )

const Header = ({
  ticketClick, scrollTo
}) => {
  console.info(window.outerHeight);
  return (window.outerWidth < 1025 ? mobileHeader(ticketClick, scrollTo) : desktopHeader(ticketClick, scrollTo));
 }

export default CSSModules(Header, styles);
