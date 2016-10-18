import React from 'react';
import styles from './details.css';
import CSSModules from 'react-css-modules';
import CheckoutButton from '~/components/CheckoutButton'
import VideoChooser from '~/components/VideoChooser'
import Illo from '~/components/Illo'

// Content
import { html as strDate }  from './details-date.md';
import { html as strIntro } from './details-intro.md';
import { html as strIncluded } from './details-included.md';
import { html as strSchedule } from './details-schedule.md';
import { html as strScheduleMobile } from './details-schedule-mobile.md';


const Details = () => {
	let schedule = strSchedule;
	if (window.outerWidth < 1025) {
		schedule = strScheduleMobile;
	}
  return (
    <section styleName="shell">
      <div styleName="top-angle"/>
    	<div styleName="title"/>
    	<div styleName="date" dangerouslySetInnerHTML={{ __html: strDate }} />
    	<div styleName="intro-shell">
	    	<Illo left="-54" top="254" size="362x190" name="details-1" />
	    	<div styleName="intro-img"/>
	    	<div styleName="intro" dangerouslySetInnerHTML={{ __html: strIntro }} />
	    	<div className="clear"/>
	    </div>
	    <div styleName="included" className="checked">
	      <div styleName="inc-angle"/>
	    	<div styleName="inc-content" dangerouslySetInnerHTML={{ __html: strIncluded }} />
	    </div>
	    <div styleName="separator">
	    	<Illo right="-60" top="-120" size="357x419" name="details-2" z="0"/>
	    	<Illo left="382" top="-60" size="452x452" name="details-3" z="0"/>
	    	<div styleName="sep-img-1"/>
	    	<div styleName="sep-img-2"/>
	    </div>
	    <div styleName="schedule">
	      <div styleName="sch-angle"/>
	    	<div styleName="sch-content" dangerouslySetInnerHTML={{ __html: schedule }} />
	    </div>
	    <div styleName="under">
	    	<Illo left="10" top="-190" size="452x452" name="details-3" />
	    	<div styleName="sep-img-3"/>
	    </div>
    </section>
  );
}

export default CSSModules(Details, styles);