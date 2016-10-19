/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import styles from './WaitList.css';
import CSSModules from 'react-css-modules';
import Button from '~/components/Button';
import axios from 'axios';
import autoBind from 'react-autobind';

class WaitList extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      name: '',
      email: '',
      status: 'ready',
    };
  }

  submit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({status: 'sending'});
    const req = {
      method: 'post',
      url: 'https://madmimi.com/signups/subscribe/268574',
      data: {
        signup: {
          name: this.state.name,
          email: this.state.email,
        },
        utf8: '✓',
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    };
    axios(req).then(() => this.setState({ status: 'success' }) );
  }

  change(e) {
    const t = e.target;
    const state = {};
    state[t.name] = t.value;
    this.setState(state);
  }

  render() {
    if (this.state.status !== 'success') {
      let btnStr = "Get on the Wait List!";
      if (this.state.status === 'sending') {
        btnStr = 'Sending...';
      }
      return (
        <form styleName="form" action="https://madmimi.com/signups/subscribe/268574">
          <input name="utf8" type="hidden" value="✓" />
          <div className="form-row">
            <label>Full Name</label>
            <input type="text" name="signup[name]"/>
          </div>
          <div className="form-row">
            <label>E-Mail Address</label>
            <input type="text" name="signup[email]" />
          </div>
          <div className="form-row">
            <Button>{btnStr}</Button>
          </div>
        </form>
      );
    } else {
      return (
        <div styleName="success">Great, you're on the wait list!</div>
      );
    }
  }

}

export default CSSModules(WaitList, styles);
