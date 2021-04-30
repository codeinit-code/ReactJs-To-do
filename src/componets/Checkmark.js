import React from 'react';
import PropTypes from 'prop-types';
import '../css/checkmark.css';

function Checkmark (props) {
	return(
		<span className={`checkmark ${props.done ? 'dimmed' : ''}`}>
			<div className="checkmark_stem" />
			<div className="checkmark_kick" />
		</span>
	)
};

Checkmark.propTypes = {
	done: PropTypes.bool
}

export default Checkmark;