import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Countdown.css';
import cx from 'classnames';
import autoBind from 'react-autobind';
import Link from '../Link';

class Countdown extends React.Component {

  static propTypes = {
    until: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    interval: PropTypes.int,
    className: PropTypes.string,
    // children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      until: false,
      diff: 0,
    }
  }

  componentWillMount() {
    this.start();
  }

  start() {
    this.state.until = new Date(this.props.until);
    this.tick();
  }

  tick() {
    const now = +(new Date());
    const until = +(this.state.until);
    this.setState({diff: (until - now)});
    if (this.state.diff > -1) {
      setTimeout(() => this.tick(), this.props.interval * 1000);
    }
  }

  getRemaining() {
    const diff = this.state.diff/1000;
    const r = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
    if (diff > 0) {
      r.days = Math.floor(diff / 86400);
      r.hours = Math.floor((diff % 86400) / 3600);
      r.minutes = Math.floor(((diff % 86400) % 3600) / 60);
      r.seconds = Math.floor(((diff % 86400) % 3600) % 60);
    } else {
      r.over = true;
    }
    return r;
  }

  render() {
    if (this.state.until) {
      const r = this.getRemaining();
      return (
        <div styleName="counter" className={cx(this.props.className)}>
          <section className="days">
            <div>{r.days}</div>
            <label>Days</label>
          </section>
          <section className="hours">
            <div>{r.hours}</div>
            <label>Hours</label>
          </section>
          <section className="minutes">
            <div>{r.minutes}</div>
            <label>Mins</label>
          </section>
          <section className="seconds">
            <div>{r.seconds}</div>
            <label>Secs</label>
          </section>
          <div className="clear"></div>
        </div>
      );
    }
  }

}

export default CSSModules(Countdown, styles);
