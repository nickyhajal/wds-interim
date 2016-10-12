import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import Hero from './sections/hero.js';
import Overview from './sections/overview.js';
import What from './sections/what.js';
import Details from './sections/details.js';
import Testimonials from './sections/testimonials.js';
import Join from './sections/join.js';
import Contact from './sections/contact.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/actions/index';

class HomePage extends React.Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = title;
  }

  openCheckout(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.act.openModal('checkout');
  }

  render() {
    return (
      <Layout className={s.content}>
        <Hero />
        <Overview openCheckout={this.openCheckout.bind(this)} />
        <What />
        <Details />
        <Testimonials />
        <Join openCheckout={this.openCheckout.bind(this)} />
        <Contact />
      </Layout>
    );
  }

}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {act: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);