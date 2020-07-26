import dataLayerConstants from '../constants/dataLayer'

const features = [
    {
      "type": "Feature",
      "properties": {
        "title": "Title 1",
        "description": "Very welcome"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.00365721603264,
          40.71316364960617
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Title 2",
        "description": "Hello"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.00076076940603,
          40.71398907807483
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Title 3",
        "description": "Hi"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.00610191975098, 40.713035098088085
        ]
      }
    }
  ]

const layerOptions = {
  'id': '3d-buildings',
  'source': 'composite',
  'source-layer': 'building',
  'filter': ['==', 'extrude', 'true'],
  'type': 'fill-extrusion',
  'minzoom': 15,
  'paint': {
    'fill-extrusion-color': '#aaa',
    'fill-extrusion-height': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'height']
    ],
    'fill-extrusion-base': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'min_height']
    ],
    'fill-extrusion-opacity': 0.6
  }
}

const initialState = {
  features,
  layerOptions,
};

function dataLayer(state = initialState, action) {
  switch (action.type) {
    case dataLayerConstants.LOAD_DATA_LAYER:
      return state
    case dataLayerConstants.SET_POINT_DATA:
      return {
        ...state,
          features: [...state.features, action.payload],
      }
    default:
      return state;
  }
}

export default dataLayer;
