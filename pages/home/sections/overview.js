import React from 'react';
import styles from './overview.css';
import CSSModules from 'react-css-modules';
import CheckoutButton from '~/components/CheckoutButton'
import VideoChooser from '~/components/VideoChooser'
import Illo from '~/components/Illo'

// Content
import { html as strDate }  from './overview-date.md';
import { html as strIntro } from './overview-intro.md';
import { html as strStory } from './overview-story.md';

const Overview = () => {
	const videos = [
		['2016', 'ygt7a002y5'],
		['2015', 'dl8sd19mbz'],
		['2014', 'sc7z3cohgh'],
		['2013', 'h3fo3zq459'],
		['2012', '6y21x8qomz'],
		['2011', 'hdh1ma9t8y'],
		['Attendee Feature', 'wjwdmj8t1k'],
	]
  return (
    <section styleName="shell">
    	<Illo left="0" top="180" size="218x483" name="overview-1" />
    	<Illo right="0" top="410" size="598x355" name="overview-2" />
      <div styleName="top-angle"/>
    	<div styleName="contentainer">
	    	<Illo left="-105" top="730" size="326x241" name="overview-3" z="0" />
	    	<div styleName="title"/>
	    	<div styleName="date" dangerouslySetInnerHTML={{ __html: strDate}} />
	    	<div styleName="intro-shell">
		    	<div styleName="intro" dangerouslySetInnerHTML={{ __html: strIntro}} />
		    	<CheckoutButton>Register Now!</CheckoutButton>
		    </div>
		    <VideoChooser videos={videos} styleName="videos" />
		    <div styleName="story-shell">
		    	<div styleName="story" dangerouslySetInnerHTML={{ __html: strStory}} />
		    </div>
    	</div>
    </section>
  );
}

export default CSSModules(Overview, styles);
