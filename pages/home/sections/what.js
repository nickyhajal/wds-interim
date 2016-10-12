import React from 'react';
import styles from './what.css';
import CSSModules from 'react-css-modules';
import CheckoutButton from '~/components/CheckoutButton'
import VideoChooser from '~/components/VideoChooser'
import Illo from '~/components/Illo'

// Content
import { html as strKeynotes }  from './what-keynotes.md';
import { html as strActivities }  from './what-activities.md';
import { html as strAcademies }  from './what-academies.md';
import { html as strMeetups }  from './what-meetups.md';
import { html as strParties }  from './what-parties.md';

const What = () => {
  return (
    <section styleName="shell">
    	<a name="activities"></a>
    	<Illo right="60" top="280" size="230x220" name="what-1" />
    	<Illo left="0" top="670" size="107x540" name="what-2" />
    	<div styleName="contentainer">
	    	<div styleName="title"/>
	    	<div styleName="sub-shell" className="keynotes">
	    		<div styleName="img"></div>
	    		<div styleName="text"  dangerouslySetInnerHTML={{ __html: strKeynotes}} />
		    	<div className="clear" />
	    	</div>
	    	<div styleName="sub-shell" className="academies">
		    	<Illo right="-40" top="175" size="432x276" name="what-3" z="0" />
	    		<div styleName="img"></div>
	    		<div styleName="text"  dangerouslySetInnerHTML={{ __html: strAcademies}} />
		    	<div className="clear" />
	    	</div>
	    	<div styleName="sub-shell" className="meetups">
		    	<Illo right="110" top="115" size="223x261" name="what-4" z="4" />
		    	<Illo left="-80" top="190" size="384x300" name="what-5" z="0" />
	    		<div styleName="img"></div>
	    		<div styleName="text"  dangerouslySetInnerHTML={{ __html: strMeetups}} />
		    	<div className="clear" />
	    	</div>
	    	<div styleName="sub-shell" className="activities">
		    	<Illo right="-35" top="204" size="404x300" name="what-6" z="0" />
	    		<div styleName="img"></div>
	    		<div styleName="text"  dangerouslySetInnerHTML={{ __html: strActivities}} />
		    	<div className="clear" />
	    	</div>
	    	<div styleName="sub-shell" className="parties">
		    	<Illo left="350" top="20" size="227x217" name="what-7" z="4" />
	    		<div styleName="img"></div>
	    		<div styleName="text"  dangerouslySetInnerHTML={{ __html: strParties}} />
		    	<div className="clear" />
	    	</div>
	    	<div className="clear" />
    	</div>
    </section>
  );
}

export default CSSModules(What, styles);
