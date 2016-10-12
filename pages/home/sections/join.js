import React, { PropTypes } from 'react';
import styles from './join.css';
import CSSModules from 'react-css-modules';
import Button from '~/components/Button';
import Illo from '~/components/Illo'

// Strings
import { html as strJoin }  from './join-text.md';

const Join = ({openCheckout}) =>
  (
    <section styleName="shell">
      <a name="tickets"></a>
      <div styleName="box">
        <Illo right="65" top="-64" size="271x149" name="join-1" />
        <div styleName="box-angle" />
        <div styleName="img" />
        <div styleName="title" />
        <div styleName="text"  dangerouslySetInnerHTML={{ __html: strJoin }} />
        <div styleName="realtime">Only 83 tickets left! Don’t miss out!</div>
        <Button styleName="button" onClick={openCheckout}>Buy Ticket</Button>
        <div className="clear"></div>
      </div>
      <Illo left="0" bottom="46" size="497x332" name="join-2" />
    </section>
  );

export default CSSModules(Join, styles);
