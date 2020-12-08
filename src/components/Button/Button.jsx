import React from 'react';
import cx from 'classnames';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';

import styles from './Button.scss';

function Button({ label, className, onClick }) {
	return (
		<button onClick={onClick} className={cx(styles.container, className)}>
			{ label }
		</button>
	);
}

Button.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
}

Button.defaultProps = {
	label: '',
	className: '',
	onClick: noop,
}

export default Button;
