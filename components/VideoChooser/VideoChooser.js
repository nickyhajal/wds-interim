import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './VideoChooser.css';
import cx from 'classnames';
import Link from '../Link';

class VideoChooser extends React.Component {

  static propTypes = {
    videos: PropTypes.array,
    className: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      selected: 0
    }
  }

  showVideo(inx) {
    const currInx = this.state.selected;
    const cV = this.props.videos[currInx];
    const curr = Wistia.api(cV[1]);
    curr.pause();
    const nV = this.props.videos[inx];
    const next = Wistia.api(nV[1]);
    next.play();
    this.setState({selected: inx});
  }

  videos() {
    return this.props.videos.map((v, i) => {
      const id = v[1];
      let className = `wistia_embed wistia_async_${id}`;
      if (this.state.selected === i) {
        className += ' visible';
      }
      return (
        <div key={id}>
          <div
            className={className}
            style={{height:'402px', width:'715px'}}
          />
        </div>
      )
    });
  }

  videoButtons() {
    return this.props.videos.map((v, i) => {
      const id = v[1];
      console.info(id);
      let className = '';
      if (this.state.selected === i) {
        className += 'active';
      }
      return (
        <button
          key={id}
          onClick={this.showVideo.bind(this, i)}
          className={className}
        >
          {v[0]}
        </button>
      )
    });
  }

  render() {
    return (
      <div styleName="shell" className={cx(this.props.className)}>
        {this.videos()}
        <div styleName="controls">
          <div styleName="label">More Videos:</div>
          <div styleName="buttons">{this.videoButtons()}</div>
        </div>
      </div>
    )
  }

}

export default CSSModules(VideoChooser, styles);
