import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './CheckoutModal.css';
import cx from 'classnames';

class CheckoutModal extends React.Component {

  static propTypes = {
    className: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div styleName="modals">
        <
      </div>
    );
  }

}

export default CSSModules(Modals, styles);