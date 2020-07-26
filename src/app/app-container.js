import { connect } from 'react-redux';

import App from '../app/App';
import setPointItem from './../redux/actions/action-creators'
import "./App.css";

const mapStateToProps = state => ({
    data: state.dataLayer.data,
    layerOptions: state.dataLayer.layerOptions,
});

const mapDispatchToProps = state => ({
    setPointItem
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
