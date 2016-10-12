import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Login.css';
import cx from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/actions/index';
import Button from '~/components/Button';
import Illo from '~/components/Illo';
import auth from '~/utils/auth';

class Login extends React.Component {

	constructor() {
		super();
		this.state = {
			email: '',
			pw: ''
		}
	}

	login(e) {
		if (e !== undefined) {
			e.stopPropagation();
			e.preventDefault();
		}
		console.info(auth);
		auth.login(this.state.email, this.state.pw);
	}

	change(e) {
		const t = e.target;
		let state = {};
		state[t.name] = t.value;
		this.setState(state);
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
	      <p>Use the email and password you used when you created your WDS account.</p>
	      <form onSubmit={ this.login.bind(this) }>
	      	<div className="form-row">
		      	<div className="form-box">
				      <label>E-Mail Address</label>
				      <input type="text" name="email" onChange={this.change.bind(this)} placeholder="Your E-mail Address"/>
				    </div>
			    </div>
	      	<div className="form-row">
		      	<div className="form-box">
				      <label>Password</label>
				      <input type="password" name="pw" onChange={this.change.bind(this)}  placeholder="Your Password"/>
				    </div>
				  </div>
	      	<div className="form-row">
		      	<div className="form-box">
				      <Button styleName="button" onClick={ this.login.bind(this) }>{btnStr}</Button>
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
    auth: state.auth.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {act: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Login, styles));
