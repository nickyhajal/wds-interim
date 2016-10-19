import React, { PropTypes } from 'react';
import styles from './join.css';
import CSSModules from 'react-css-modules';
import Button from '~/components/Button';
import Illo from '~/components/Illo'
import WaitList from '~/components/WaitList'

// Strings
import { html as strJoin }  from './join-text.md';
import { html as strWait}  from './join-waitlist.md';

const active = (openCheckout) => (
  <section styleName="shell">
    <a name="tickets"></a>
    <div styleName="box">
      <Illo right="65" top="-64" size="271x149" name="join-1" />
      <div styleName="box-angle" />
      <div styleName="img" />
      <div styleName="title" />
      <div styleName="text"  dangerouslySetInnerHTML={{ __html: strJoin }} />
      <div styleName="realtime">Limited tickets available! Don’t miss out!</div>
      <Button styleName="button" onClick={openCheckout}>Buy Ticket</Button>
      <div className="clear"></div>
    </div>
    <Illo left="0" bottom="46" size="497x332" name="join-2" />
  </section>
);

const inactive = () => (
  <section styleName="shell">
    <a name="tickets"></a>
    <div styleName="box">
      <Illo right="65" top="-64" size="271x149" name="join-1" />
      <div styleName="box-angle" />
      <div styleName="img" />
      <div styleName="text"  dangerouslySetInnerHTML={{ __html: strWait }} />
      <WaitList />
      <div className="clear"></div>
    </div>
    <Illo left="0" bottom="46" size="497x332" name="join-2" />
  </section>
);

const Join = ({openCheckout}) =>
  (
    inactive()
  );

export default CSSModules(Join, styles);
