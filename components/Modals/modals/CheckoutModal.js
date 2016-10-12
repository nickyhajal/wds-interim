import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/actions/index';
import styles from './CheckoutModal.css';
import cx from 'classnames';

// Sections
import AskIfAttended from './sections/AskIfAttended'
import Login from './sections/Login'
import Cart from './sections/Cart'
import Success from './sections/Success'

class CheckoutModal extends React.Component {

  static propTypes = {
    className: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      open: false,
      page: false
    };
  }
  goTo(e, page) {
    if (page === 'close') {
      this.props.close(e);
    } else {
      page = e;
      this.setState({page: page});
    }
  }

  getPanel() {
    if (this.props.auth.me || this.state.page === 'checkout') {
      if (this.props.auth.confirmed || this.state.page === 'checkout') {
        const cstatus = this.props.checkout.status;
        if (cstatus === 'start' || cstatus == 'process') {
          return {panel: <Cart />, height: '350'};
        } else if (cstatus === 'success') {
          return {panel: <Success goTo={this.goTo.bind(this)} />, height: '225'}
        }
      } else {
        // Confirm identity
      }
    } else {
      if (this.state.page === 'login') {
        return {panel: <Login />, height: '372'};
      } else {
        return {panel: <AskIfAttended goTo={this.goTo.bind(this)} />, height: '300'};
      }
    }
  }
  render() {
    const { panel, height } = this.getPanel();
    return (
      <div styleName="modal" className="modal" style={{top: 88+'px'}}>
        <a href="#" className="modal-close" onClick={this.props.close.bind(this)} />
        <h2>Let's Do This!</h2>
        {panel}
        <div className="clear"/>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    checkout: state.checkout.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {act: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(CheckoutModal, styles));