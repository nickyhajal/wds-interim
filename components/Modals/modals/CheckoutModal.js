import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/actions/index';
import styles from './CheckoutModal.css';
import autoBind from 'react-autobind';

// Sections
import AskIfAttended from './sections/AskIfAttended';
import Login from './sections/Login';
import Reset from './sections/Reset';
import Cart from './sections/Cart';
import Success from './sections/Success';

class CheckoutModal extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    close: PropTypes.func,
    auth: PropTypes.object,
    checkout: PropTypes.object,
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      open: false,
      page: false,
    };
  }

  goTo(e, page) {
    if (page === 'close') {
      this.props.close(e);
    } else {
      page = e;
      this.setState({ page });
    }
  }

  getPanel() {
    if (this.props.auth.me || this.state.page === 'checkout') {
      if (this.props.auth.confirmed || this.state.page === 'checkout') {
        const cstatus = this.props.checkout.status;
        if (cstatus === 'start' || cstatus === 'process') {
          return { panel: <Cart />, height: '350' };
        } else if (cstatus === 'success') {
          return { panel: <Success goTo={this.goTo} />, height: '225' }
        }
      } else {
        // Confirm identity
      }
    } else {
      if (this.state.page === 'reset') {
        return { panel: <Reset goTo={this.goTo} />, height: '372' };
      }
      else if (this.state.page === 'login') {
        return { panel: <Login goTo={this.goTo} />, height: '372' };
      }
      return { panel: <AskIfAttended goTo={this.goTo} />, height: '300' };
    }
  }

  render() {
    const { panel } = this.getPanel();
    let top = window.outerWidth < 1025 ? 0 : 88;
    if (window.outerHeight < 810) {
      top = 0;
    }
    return (
      <div styleName="modal" className="modal" style={{ top: `${top}px` }}>
        <a href="#" className="modal-close" onClick={this.props.close} />
        <h2>Let's Do This!</h2>
        {panel}
        <div className="clear" />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    checkout: state.checkout.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(CheckoutModal, styles));
