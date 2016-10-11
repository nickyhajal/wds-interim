import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Illo.css';
import cx from 'classnames';
import CheckoutModal from '../modals/CheckoutModal';

class Modals extends React.Component {

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
        <div styleName="overlay" className={ this.props.open ? 'visible' : '' } />
        <CheckoutModal visible={ this.props.open == 'checkout' ? true : false } />
      </div>
    );
  }

}

export default CSSModules(Modals, styles);
