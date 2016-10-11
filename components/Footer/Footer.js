/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import CSSModules from 'react-css-modules';
import styles from './Footer.css';

function Footer() {
  return (
    <footer className="mdl-mini-footer" styleName="footer">
      <div className="mdl-mini-footer__left-section">
        <ul className="mdl-mini-footer__link-list">
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
        <div styleName="content">© World Domination Summit 2011-2016</div>
      </div>
    </footer>
  );
}

export default CSSModules(Footer, styles);
