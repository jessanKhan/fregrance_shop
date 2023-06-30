import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({

    user : authSlice

})

const persistConfig = {
  key: "root",
  storage,
  // Add any other configuration options you need
};



const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

});



export const persistor = persistStore(store);
export default store