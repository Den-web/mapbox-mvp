// Core Dependencies
import React from 'react'
import PropTypes from 'prop-types'

const PageNotFound = () => (
	<div className={''}>
		<div>
			<h1 data-h1="404">404</h1>
			<p data-p="NOT FOUND">NOT FOUND</p>
		</div>
	</div>
)

// Validate Props
PageNotFound.propTypes = {
	className: PropTypes.string,
}

// Expose It
export default PageNotFound
