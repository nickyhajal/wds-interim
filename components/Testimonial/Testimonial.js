import React from 'react';
import styles from './Testimonial.css';
import CSSModules from 'react-css-modules';

const Testimonial = ({position, data}) =>
  (
    <div styleName="testimonial" className={position}>
      <img src={data.avatar} />
      <div styleName="text">"{data.text}"</div>
      <div styleName="name">{data.name}</div>
      <div styleName="from">{data.from}</div>
    </div>
  )

export default CSSModules(Testimonial, styles);
