import React from 'react';
import styles from './hero.css';
import CSSModules from 'react-css-modules';

const Hero = () => {
  const height = window.outerWidth > 1024 ? (window.innerHeight - 120)+'px' : '308px';
  return (
    <div>
      <section styleName="shell" style={{height: height}}>
          <div styleName="image"/>
          <div styleName="logo"/>
      </section>
    </div>
  );
}

export default CSSModules(Hero, styles);
