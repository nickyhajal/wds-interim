import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Button.css';
import cx from 'classnames';
import Link from '../Link';

class Button extends React.Component {

  static propTypes = {
    component: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func,
    ]),
    to: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    href: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { component, className, to, href,
      children, ...other } = this.props;
    return React.createElement(
      component || (to ? Link : (href ? 'a' : 'button')), // eslint-disable-line no-nested-ternary
      {
        ref: node => (this.root = node),
        styleName: 'button',
        className: cx(
          className
        ),
        to,
        href,
        ...other,
      },
      children
    );
  }

}

export default CSSModules(Button, styles);
