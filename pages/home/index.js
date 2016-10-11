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

class HomePage extends React.Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <Hero />
        <Overview />
        <What />
        <Details />
        <Testimonials />
        <Join />
        <Contact />
      </Layout>
    );
  }

}

    // return (
    //   <Layout className={s.content}>
    //     <div dangerouslySetInnerHTML={{ __html: html }} />
    //     <p>
    //       <br /><br />
    //     </p>
    //   </Layout>
    // );
export default HomePage;
