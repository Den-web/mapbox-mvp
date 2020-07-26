// Core Dependencies
import { createStore } from 'redux'
import throttle from 'lodash/throttle'

// Utilities
import reducers from './reducers'
import { loadState, saveState } from './../helpers/localStorage'

const persistedState = loadState();
const store = createStore(
    reducers,
    persistedState,
);

store.subscribe(
    throttle(() => {
        saveState({
            dataLayer: store.getState().dataLayer,
        })
    }, 1000)
);

// HMR for development
if (module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(reducers)
    })
}

window.store = store;
// Expose It
export default store
