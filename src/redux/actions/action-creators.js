import dataLayerConstants from '../constants/dataLayer'

const setPointItem = ( customPoint ) => ({
  type: dataLayerConstants.SET_POINT_DATA,
  payload: customPoint
});

export default setPointItem
