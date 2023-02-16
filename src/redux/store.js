import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filtersReducer } from './reducer';

// export const store = configureStore({
//   reducer: {
//     tasks: contactsReducer,
//     filters: filtersReducer,
//   },
// });
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
