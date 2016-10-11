import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Illo.css';
import cx from 'classnames';
import Link from '../Link';

class Illo extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    left: PropTypes.string,
    top: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    const src = `url(https://files.wds.fm/images/illo/${this.props.name}.png)`;
    let styles = {};
    if (this.props.left !== undefined) {
      styles.left = this.props.left+'px';
    }
    if (this.props.top !== undefined) {
      styles.top = this.props.top+'px';
    }
    if (this.props.right !== undefined) {
      styles.right = this.props.right+'px';
    }
    if (this.props.bottom !== undefined) {
      styles.bottom = this.props.bottom+'px';
    }
    if (this.props.size !== undefined) {
      const size = this.props.size.split('x');
      styles.width = (size[0] / 2)+'px';
      styles.height = (size[1] / 2)+'px';
    }
    if (this.props.z !== undefined) {
      styles.zIndex = this.props.z;
    }
    styles.backgroundImage = src;

    return (
      <div styleName="illo" style={styles} />
    );
  }

}

export default CSSModules(Illo, styles);
