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
import styles from './CheckoutButton.css';
import CSSModules from 'react-css-modules';
import Button from '../Button';

class CheckoutButton extends React.Component {

  openCheckout() {
    console.info("hey");
  }
  render() {
    return (
      <Button onClick={this.openCheckout.bind(this)}>{this.props.children}</Button>
    );
  }

}

export default CSSModules(CheckoutButton, styles);
