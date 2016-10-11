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
import styles from './TicketStub.css';
import CSSModules from 'react-css-modules';

class TicketStub extends React.Component {

  constructor() {
    super();
    this.state = {
      visibility: 'closed',
      swinging: false
    };
  }

  show() {
    const current = this.state.visibility;
    if (['open', 'swinging'].indexOf(current) < 0) {
      this.setState({visibility: 'swinging'});
      setTimeout(() => {
        this.setState({visibility: 'open'});
      }, 240);
    }
  }

  hide() {
    if (this.state.visibility != 'closed') {
      this.setState({visibility: 'closed'});
    }
  }

  render() {
    return (
      <div
        styleName="ticket"
        className={this.state.visibility}
        onMouseOver={this.show.bind(this)}
        onMouseOut={this.hide.bind(this)}
        onClick={this.props.onClick}
      ></div>
    );
  }

}

export default CSSModules(TicketStub, styles);
