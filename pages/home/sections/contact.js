import React, { PropTypes } from 'react';
import styles from './contact.css';
import CSSModules from 'react-css-modules';
import Button from '~/components/Button';
import api from '~/utils/api'

// Strings
import { html as strContact }  from './contact-text.md';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false
    }
  }
  change(e) {
    const t = e.target;
    let state = {};
    state[t.name] = t.value;
    this.setState(state);
  }
  submit(e) {
    e.stopPropagation();
    e.preventDefault();
    if (
      this.state.name.length > 0
      && this.state.email.length > 0
      && this.state.message.length > 0
    ) {
      api('post admin/helpscout', {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }).then(() => {
        this.setState({sent: true});
      });
    }
  }
  renderSuccess() {
    return (
      <div styleName="success">Aw yeah! Your message was sent! We'll get back to you soon.</div>
    );
  }

  renderForm() {
    return (<form action="#" styleName="form" onSubmit={this.submit.bind(this)}>
          <div styleName="row">
            <label>Name</label>
            <input type="text" onChange={this.change.bind(this)} placeholder="Nice to meet you!" name="name" />
          </div>
          <div styleName="row">
            <label>E-Mail</label>
            <input type="text" onChange={this.change.bind(this)} placeholder="How should we be in touch?" name="email" />
          </div>
          <div styleName="row">
            <label>Message</label>
            <textarea onChange={this.change.bind(this)} placeholder="What's Up?" name="message" />
          </div>
          <Button styleName="button">Send</Button>
        </form>)
  }
  renderAppropriate() {
    if (this.state.sent) {
     return this.renderSuccess();
    } else {
      return this.renderForm();
    }
  }
  render() {
    return (
    <section styleName="shell">
      <a name="contact"></a>
      <div styleName="top-angle" />
      <div styleName="content">
        <div styleName="left">
          <h2 styleName="title">Contact Us</h2>
          <div styleName="text"  dangerouslySetInnerHTML={{ __html: strContact }} />
          <div styleName="ilo" />
        </div>
        { this.renderAppropriate() }
        
        <div className="clear"></div>
      </div>
    </section>
  );
  }
}

export default CSSModules(Contact, styles);
