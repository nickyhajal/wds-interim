import React, { PropTypes } from 'react';
import Select from 'react-select';
import CSSModules from 'react-css-modules';
import styles from './Cart.css';
import cx from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/actions/index';
import Button from '~/components/Button';
import Illo from '~/components/Illo';
import auth from '~/utils/auth';

class Cart extends React.Component {

	constructor() {
		super();
		this.state = {
			email: '',
			year: '2017',
			month: '2'

		}
	}

	change(e, id) {
		let t = {};
		if (id !== undefined && typeof id === 'string') {
			t = e;
		} else {
			t = e.target;
			id = t.name;
		}
		let state = {};
		state[id] = t.value;
		if (id === 'quantity') {
			this.props.act.updateQuantity(t.value);
		} else {
			this.setState(state);
		}
	}

	toggleCard(e) {
		e.stopPropagation();
		e.preventDefault();
		this.props.act.updateUseExistingCard(!this.props.auth.useExistingCard);
	}

	months() {
		return [
			{value: '1', label: 'January'},
			{value: '2', label: 'February'},
			{value: '3', label: 'March'},
			{value: '4', label: 'April'},
			{value: '5', label: 'May'},
			{value: '6', label: 'June'},
			{value: '7', label: 'July'},
			{value: '8', label: 'August'},
			{value: '9', label: 'September'},
			{value: '10', label: 'October'},
			{value: '11', label: 'November'},
			{value: '12', label: 'December'}
		];
	}

	years() {
		return [
			{value: '2016', label: '2016'},
			{value: '2017', label: '2017'},
			{value: '2018', label: '2018'},
			{value: '2019', label: '2019'},
			{value: '2020', label: '2020'},
			{value: '2021', label: '2021'},
			{value: '2022', label: '2022'},
			{value: '2023', label: '2023'},
			{value: '2024', label: '2024'},
			{value: '2025', label: '2025'}
		]
	}

	purchase(e) {
		e.preventDefault();
		e.stopPropagation();
		if (this.props.checkout.status !== 'process') {
			this.props.act.updateStatus('process');
			if (this.props.auth.me) {
				this.startCharge();
			} else {
				const pkg = {
					first_name: this.state.first_name,
					last_name: this.state.last_name,
					email: this.state.email
				};
				auth.createUser(pkg)
				.then((raw) => {
					const rsp = raw.data;
					if (rsp.existing !== undefined) {
						this.props.act.setCheckoutError(
							<div>
								That email is already in our system.
								<a href="#">Click here to login</a>
							</div>
						);
					} else {
						auth.getMe();
						this.startCharge();
					}
				}).catch((error) => {
						this.props.act.setCheckoutError('Seems like there was a problem, can you try again?');
				});
			}
		}
	}

	startCharge() {
		const pkg = {};
		pkg.quantity = this.props.checkout.quantity;
		if (this.props.auth.useExistingCard) {
			this.processCharge(this.props.auth.card.hash, pkg);
		} else {
			const yr = document.getElementsByName('exp-year')[0];
			const mnth = document.getElementsByName('exp-month')[0];
			if (yr !== undefined) {
				yr.setAttribute("data-stripe", "exp_year");
				yr.removeAttribute("name");
			}
			if (mnth !== undefined) {
				mnth.setAttribute("data-stripe", "exp_month");
				mnth.removeAttribute("name");
			}
			const form = document.getElementById('checkoutForm');
			console.info(form);
			window.Stripe.setPublishableKey("pk_live_v32iH6nfQOgPmKgQiNOrnZCi");
			window.Stripe.card.createToken(form, (status, rsp) => {
				if (rsp.error !== undefined && rsp.error) {
					this.props.act.setCheckoutError(rsp.error.message);
				} else {
					this.processCharge(rsp.id, pkg);
				}
			});
		}
	}

	processCharge(token, pkg) {
		auth.charge({card_id: token, code: 'wds2017', purchase_data: pkg})
		.then((raw) => {
			const rsp = raw.data;
			if (rsp.declined !== undefined && rsp.declined) {
				this.props.act.setCheckoutError(
					"There was a problem with your card. Please check your details or try another one."
				);
			} else {
				this.props.act.updateStatus('success');
			}
		});
	}

	renderExisting(btnStr, cost, feeCost) {
		const card = this.props.auth.card;
		const cardStr = `${card.brand} ending in ${card.last4}`;
		const cardExp = `${card.exp_month}/${card.exp_year}`;
		return (
			<div>
				<div styleName="existingCardRow">
					<div styleName="cardIntro">Charge to:</div>
					<div styleName="cardName">{cardStr}</div>
					<div styleName="cardExp">Expires {cardExp}</div>
				</div>
				{this.renderError()}
			</div>
		);
	}

	renderUserInps() {
		if (!this.props.auth.me) {
			return (
					<div>
		      	<div className="form-row">
		      		<div className="form-box">
		      			<label>First Name</label>
		      			<input type="text" name="first_name"  onChange={this.change.bind(this)}/>
		      		</div>
		      		<div className="form-box">
		      			<label>Last Name</label>
		      			<input type="text" name="last_name"  onChange={this.change.bind(this)}/>
		      		</div>
		    		</div>
		      	<div className="form-row">
		      		<div className="form-box">
					      <label>E-Mail Address</label>
					      <input type="text" name="email" onChange={this.change.bind(this)} />
					     </div>
					  </div>
					</div>
			);
		}
	}

	renderNew(btnStr, cost, feeCost) {
		return (
			<div styleName="newShell">
				{this.renderError()}
				{ this.renderUserInps() }
      	<div className="form-row">
      		<div className="form-box">
			      <label>Card Number</label>
			      <input type="text" data-stripe="number" />
			     </div>
			  </div>
      	<div className="form-row">
      		<div className="form-box">
			      <label>Exp. Month</label>
			      <Select
			      	onChange={ (e) => this.change.call(this, e, 'month') }
			      	options={this.months()}
			      	name="exp-month"
			      	clearable={false}
			      	searchable={false}
			      	value={this.state.month}
			      	style={{width: '160px'}}
			      />
			     </div>
			     <div className="form-box">
			      <label>Exp. Year</label>
			      <Select
			      	onChange={ (e) => this.change.call(this, e, 'year') }
			      	options={this.years()}
			      	clearable={false}
			      	searchable={false}
			      	name="exp-year"
			      	style={{width: '120px'}}
			      	value={this.state.year}
			      />
			     </div>
			  </div>
			  <div className="form-row">
			  	<div className="form-box ccZip">
			  		<label>Billing Zip Code</label>
			      <input type="text" data-stripe="zip" styleName="zip" />
		      </div>
			  	<div className="form-box ccCvv">
			  		<label>CVV</label>
			      <input type="text" styleName="cvv" data-stripe="cvc" />
		      </div>
			  </div>
      </div>
		);
	}

	renderAppropriate(btnStr, cost, feeCost) {
		if (this.props.auth.card && this.props.auth.useExistingCard) {
			return this.renderExisting(btnStr, cost, feeCost);
		} else {
			return this.renderNew(btnStr, cost, feeCost);
		}
	}

	renderCardButton() {
		if (this.props.auth.card) {
			let str = "Use Existing Card";
			if (this.props.auth.useExistingCard) {
				str = "Add New Card";
			}
			return <a styleName="cardSwitcher" href="#" onClick={this.toggleCard.bind(this)}>{str}</a>;
		}
	}

	renderProcessing() {
		if (this.props.checkout.status === 'process') {
			return (
				<div styleName="processing">
					<div styleName="processMessage">
						Hang tight while we process your payment!
					</div>
				</div>
			)
		}
	}

	renderError() {
		if (this.props.checkout.error) {
			return (
				<div styleName="error">{this.props.checkout.error}</div>
			)
		}
	}

	render() {
		const cost = 647 * this.props.checkout.quantity;
		const feeCost = 10 * this.props.checkout.quantity;
		let btnStr = 'Complete Purchase';
		if (this.props.checkout.status === 'process') {
			btnStr = 'Processing...';
		} else if (this.props.checkout.status === 'success') {
			btnStr = 'Success!';
		}
	  return (
	    <div className="modal-section">
	    	<div styleName="productRow">
		    	<div styleName="priceBox">
			    	<div styleName="cost">${cost}</div>
			    	<div styleName="feeCost">+${feeCost}.00 processing</div>
		    	</div>
		    	<div styleName="quantityBox">
			    	<label>Quantity</label>
			    	<Select
			      	onChange={ (e) => this.change.call(this, e, 'quantity') }
			      	options={[
			      		{value: 1, label: '1'},
			      		{value: 2, label: '2'},
			      		{value: 3, label: '3'}
			      	]}
			      	name="quantity"
			      	clearable={false}
			      	searchable={false}
			      	value={this.props.checkout.quantity}
			      />
			    </div>
		    	<div styleName="productName">WDS 2017 Ticket</div>
	    	</div>
	    	{this.renderCardButton()}
				<form id="checkoutForm" onSubmit={ this.purchase.bind(this) } styleName="checkoutForm">
		    	{this.renderAppropriate(btnStr, cost, feeCost)}
		    	<div className="form-row">
			    	<Button className="submit">Purchase Tickets</Button>
			    </div>
		    	<Illo right="-40" top="305" size="432x276" name="what-3" z="-1" />
	    	</form>
	    	{ this.renderProcessing() }
	    </div>
	  );
	}
}

function mapStateToProps(state) {
  return {
    checkout: state.checkout.toJS(),
    auth: state.auth.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {act: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Cart, styles));
