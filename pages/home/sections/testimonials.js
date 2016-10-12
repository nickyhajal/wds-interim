import React, { PropTypes } from 'react';
import Testimonial from '~/components/Testimonial';
import styles from './testimonials.css';
import CSSModules from 'react-css-modules';

class Testimonials extends React.Component {

  static propTypes = {
    selected: PropTypes.number,
    className: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      selected: 0,
      first: true,
      last: false,
			testimonials: [
				{
					name: "Rita Chand",
					from: 'British Columbia, Canada',
					text: "WDS is the only place I can go and feel like a superhero 24/7. It's uncommon to have a world that believes in you as much as WDS folks believe in each other.",
					avatar: "https://files.wds.fm/images/home/testimonial-av-1.png"
				},
				{
					name: "Gary Ware",
					from: 'San Diego, CA',
					text: "WDS is a magical experience that I look forward to every year! When you are surrounded by so much creative, positive, and innovative energy you can't help but to leave inspired with a desire to do good in the world.",
					avatar: "https://files.wds.fm/images/home/testimonial-av-1.png"
				},
				{
					name: "Toréa Rodriguez",
					from: 'Santa Cruz, CA',
					text: "I go each year to the World Domination Summit so that I can be pushed just outside of my comfort zone, to get out of any ruts that I might be in and to kickstart me into thinking differently.",
					avatar: "https://files.wds.fm/images/home/testimonial-av-1.png"
				},
				{
					name: "Kendrick Uy",
					from: 'British Columbia, Canada',
					text: "It’s hard to explain, but everyone who’s attended know that it was worth their while. If you’ve never gone to WDS before, definitely sign up for next year. You’ll learn many things that you can use in your everyday life and the connections you make with other people is priceless.",
					avatar: "https://files.wds.fm/images/home/testimonial-av-1.png"
				}
			]
    }
  }

  testimonialList() {
  	return this.state.testimonials.map((t, i) => {
  		let position = 'selected' ;
  		if (i < this.state.selected) {
  			position = 'previous';
  		}
  		if (i > this.state.selected) {
  			position = 'next';
  		}
	  	return (
	  		<Testimonial position={position} data={t} key={i} />
	  	);
  	});
  }

  testimonialDots() {
  	return this.state.testimonials.map((t, i) => {
  		let selected = '';
  		if (i == this.state.selected) {
	  		selected = 'selected';
  		}
	  	return (
	  		<div className={selected} styleName="dot" key={`dot-${i}`} />
	  	);
  	});
  }

  next(e) {
  	e.preventDefault();
  	e.stopPropagation();
  	this.goTo(1);
  }

  prev(e) {
  	e.preventDefault();
  	e.stopPropagation();
  	this.goTo(-1);
  }

  goTo(dir) {
  	const inx = this.state.selected;
  	const newInx = inx + dir;
  	let first = this.state.first;
  	let last = this.state.last;
  	if ((first && dir < 0) || (last && dir > 0)) {
  		return;
  	}
  	if (newInx == 0) {
  		first = true;
  	}
  	else {
  		first = false;
  	}
  	if (newInx == (this.state.testimonials.length - 1)) {
  		last = true;
  	} else {
  		last = false;
  	}
  	this.setState({
  		selected: newInx,
  		first,
  		last
  	});
  }

  render() {
  	const dotsWidth = ((14 * this.state.testimonials.length) - 4)+'px';
	  return (
	    <section styleName="shell">
	      <div styleName="top-angle"/>
	      <div styleName="title"/>
	      <div styleName="testimonials">
		      <a href="#"
		      	styleName="arrow-prev"
		      	className={this.state.first ? 'disabled' : ''}
		      	onClick={this.prev.bind(this)}
		      />
		      <a href="#"
		      	styleName="arrow-next"
		      	className={this.state.last ? 'disabled' : ''}
		      	onClick={this.next.bind(this)}
      		/>
		      {this.testimonialList()}
	      </div>
	      <div styleName="dots" style={{width: dotsWidth}}>
		      {this.testimonialDots()}
	      </div>
	    </section>
	  );
	}
}

export default CSSModules(Testimonials, styles);
