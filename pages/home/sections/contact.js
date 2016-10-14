import React, { PropTypes } from 'react';
import styles from './contact.css';
import CSSModules from 'react-css-modules';
import Button from '~/components/Button';

// Strings
import { html as strContact }  from './contact-text.md';

const Contact = () =>
  (
    <section styleName="shell">
      <a name="contact"></a>
      <div styleName="top-angle" />
      <div styleName="content">
        <div styleName="left">
          <h2 styleName="title">Contact Us</h2>
          <div styleName="text"  dangerouslySetInnerHTML={{ __html: strContact }} />
          <div styleName="ilo" />
        </div>
        <form action="#" styleName="form">
          <div styleName="row">
            <label>Name</label>
            <input type="text" placeholder="Nice to meet you!" name="name" />
          </div>
          <div styleName="row">
            <label>E-Mail</label>
            <input type="text" placeholder="How should we be in touch?" name="email" />
          </div>
          <div styleName="row">
            <label>Message</label>
            <textarea placeholder="What's Up?" name="message" />
          </div>
          <Button styleName="button">Send</Button>
        </form>
        <div className="clear"></div>
      </div>
    </section>
  );

export default CSSModules(Contact, styles);
