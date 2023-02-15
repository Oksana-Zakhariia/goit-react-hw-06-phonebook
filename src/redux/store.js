// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filtersReducer } from './reducer';

// export const store = configureStore({
//   reducer: {
//     tasks: contactsReducer,
//     filters: filtersReducer,
//   },
// });
import { rootReducer } from './reducer';
import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
