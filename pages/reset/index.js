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
import Layout from '../../components/Layout';
import styles from './styles.css';
import CSSModules from 'react-css-modules';

class ResetPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout styleName="layout">
        <section styleName="shell">
            <div styleName="content">
            <div styleName="top-angle"/>
              <h1>{title}</h1>
            </div>
        </section>
      </Layout>
    );
  }

}

export default CSSModules(ResetPage, styles);
