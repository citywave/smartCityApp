import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../combinedReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'splash',
        'home'
    ]
};

const persit = persistReducer(persistConfig, reducers);

export const store = createStore(
    persit,
    {},
    applyMiddleware(ReduxThunk)
);


export const persistor = persistStore(store);
