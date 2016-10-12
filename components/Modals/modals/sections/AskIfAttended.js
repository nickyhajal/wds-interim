import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './AskIfAttended.css';
import cx from 'classnames';
import Illo from '~/components/Illo';

const AskIfAttended = ({goTo}) =>
  (
    <div className="modal-section" styleName="ask">
      <h3>Have you attended WDS before?</h3>
      <p>If you've attended WDS in the past, we'll connect to your
      existing account.</p>
      <button styleName="bigButton" onClick={ () => goTo('login') }>Yup, let's connect my account!</button>
      <button styleName="bigButton" onClick={ () => goTo('checkout') }>It's my first time!</button>
      <Illo right="15" top="254" size="404x300" name="what-6" z="-1" />
    </div>
  );

export default CSSModules(AskIfAttended, styles);
