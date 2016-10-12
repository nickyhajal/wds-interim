import api from './api';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/auth';
import store from '~/core/store';
const Actions = bindActionCreators(AuthActions, store.dispatch);

const auth = {
	getMe: () => {
		api('get assets', {assets: 'me'})
		.then((raw) => {
			const rsp = raw.data;
			if (rsp.me) {
				Actions.updateAuth(rsp.me);
				auth.getCard();
			}
		})
		.catch((error) => {

		});
	},
	login: (email, pw) => {
		Actions.attemptLogin();
		api('post user/login', {username: email, password: pw})
		.then((raw) => {
			const rsp = raw.data;
			if (rsp.loggedin && rsp.me) {
				auth.getCard();
				Actions.updateAuth(rsp.me);
			} else {
				Actions.loginError("Hm, that didn't seem right. Try again?");
			}
		}).catch((error) => {
			Actions.loginError("Hm, that didn't seem right. Try again?");
		});
	},
	getCard: () => {
		api('get user/card', {})
		.then((raw) => {
			const rsp = raw.data;
			if (rsp.card !== undefined && rsp.card) {
				Actions.updateCard(rsp.card, true);
			} else {
				Actions.updateCard(false, false);
			}
		});
	},
	charge: (pkg) => {
		return api('post product/charge', pkg);
	},
	createUser:  (pkg) => {
		return api('post user', pkg);
	}
};

export default auth;

