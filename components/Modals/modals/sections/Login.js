import React, { PropTypes } from 'react';
import cssmodules from 'react-css-modules';
import styles from './Login.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import actions from '~/actions/index';
import Button from '~/components/Button';
import Illo from '~/components/Illo';
import auth from '~/utils/auth';

class Login extends React.Component {

  static propTypes = {
    auth: PropTypes.object,
    action: PropTypes.object,
    goTo: PropTypes.func,
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      email: '',
      pw: '',
    };
  }

  login(e) {
    if (e !== undefined) {
      e.stopPropagation();
      e.preventDefault();
    }
    auth.login(this.state.email, this.state.pw);
  }

  change(e) {
    const t = e.target;
    const state = {};
    state[t.name] = t.value;
    this.setState(state);
  }

  forgotPw(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.goTo('reset');
  }

  back(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.goTo('');
  }

  render() {
    let btnStr = 'Login';
    if (this.props.auth.loggingIn) {
      btnStr = 'Logging In...';
    } else if (this.props.auth.loginError) {
      btnStr = this.props.auth.loginError;
    } else if (this.props.auth.me) {
      btnStr = 'Success!';
    }
    return (
      <div className="modal-section">
        <h3>Login to Your WDS Account</h3>
        <p>
          Use the email and password you used when you created your WDS account.
          &nbsp; <a
            styleName="link"
            href="#"
            onClick={this.forgotPw}
          >
            Forgot your password?
          </a>
        </p>
        <form onSubmit={this.login}>
          <div className="form-row">
            <div className="form-box">
              <label>E-Mail Address</label>
              <input
                type="text"
                name="email" onChange={this.change}
                placeholder="Your E-mail Address"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-box">
              <label>Password</label>
              <input type="password" name="pw" onChange={this.change} placeholder="Your Password" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-box">
              <Button styleName="button" onClick={this.login}>{btnStr}</Button>
              <a styleName="back" href="#" onClick={this.back} >◂ Back</a>
            </div>
          </div>
        </form>
        <Illo right="55" bottom="-50" size="107x540" name="what-2" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(cssmodules(Login, styles));
