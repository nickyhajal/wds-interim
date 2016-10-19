/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Header from '~/components/Layout/Header';
import Modals from '~/components/Modals';
import Footer from '../Footer';
import s from './Layout.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/actions/index';
import Countdown from '~/components/Countdown';

class Layout extends Component {

  static propTypes = {
    className: PropTypes.string,
    act: PropTypes.object
  };

  openCheckout(e) {
    // e.preventDefault();
    // e.stopPropagation();
    // this.props.act.openModal('checkout');
    this.doScroll('#tickets');
  }

  scrollTo(e) {
    e.stopPropagation();
    e.preventDefault();
    const t = e.target;
    $ = window.jQuery;
    const hash = t.hash;
    this.doScroll(hash);
  }

  doScroll(hash) {
    var target = $(hash);
    target = target.length ? target : $('[name=' + hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 200
      }, 400);
      setTimeout(function(){
        target.attr('name', '');
        setTimeout(function(){
          location.hash = hash;
          setTimeout(function(){
            target.attr('id', hash);
            target.attr('name', hash.slice(1));
          }, 400);
        }, 50);
      }, 500);
      return false;
    }
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
        <div className="mdl-layout__inner-container">
          <Header scrollTo={this.scrollTo.bind(this)} ticketClick={this.openCheckout.bind(this)}/>
          <main className="mdl-layout__content">
            <div children={this.props.children} className={cx(s.content, this.props.className)} />
            <Footer />
            <Modals />
          </main>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {act: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
