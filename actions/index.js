import _ from 'lodash';
import * as auth from './auth';
import * as checkout from './checkout';
import * as modals from './modals';

const actions = _.assign(
	auth,
	checkout,
	modals
);
export default actions

