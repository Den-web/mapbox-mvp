import { connect } from 'react-redux';

import Home from './home';
import setPointItem from './../../redux/actions/action-creators'


const mapStateToProps = state => ({
	features: state.dataLayer.features,
	layerOptions: state.dataLayer.layerOptions,
});

const mapDispatchToProps = ({
	setPointItem
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
