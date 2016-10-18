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
		pkg.login = true;
		pkg.ignore_existing = true;
		return api('post user', pkg);
	},
	reset:  (username, password, hash) => {
		const pkg = {
			username,
			password,
			hash,
			domain: '2017.worlddominationsummit.com',
			path: 'reset',
		}
		Actions.resetStatus('sending');
		api('post user/reset', pkg)
		.then((raw) => {
			const rsp = raw.data;
			if (rsp.not_existing) {
				Actions.resetError("Hm, that account doesn't exist. Try again?");
			} else if (rsp.msg) {
				Actions.resetError(rsp.msg);
			} else {
				Actions.resetStatus("success");
			}
		});
	}
};

export default auth;

