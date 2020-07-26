// Core Dependencies
import { connect } from 'react-redux'
import { compose } from 'redux'

// Components
import Content from './content'

// Action Creators


// Map store state to props
let mapStateToProps = (state) => ({
	// Admin: state.roles.role,
});

// Map actions to props
const mapDispatchToProps = {

};

// Expose It
export default compose(connect(mapStateToProps, mapDispatchToProps))(
	Content
)
