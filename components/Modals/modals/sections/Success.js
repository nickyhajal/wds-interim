import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Success.css';
import Illo from '~/components/Illo';
import cx from 'classnames';

const Success = ({goTo}) =>
  (
    <div className="modal-section">
      <h3>Woohoo!</h3>
      <p>You did it! You're all set for WDS 2017.</p>
      <p>You'll receive an email with more details shortly!</p>
      <br />
      <button onClick={ (e) => goTo(e, 'close') } styleName="button">Done</button>
      <Illo right="60" top="230" size="230x220" name="what-1" />
    </div>
  );

export default CSSModules(Success, styles);
