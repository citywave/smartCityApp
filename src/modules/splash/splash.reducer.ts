import storage from 'redux-persist/lib/storage';
import { persistReducer, PURGE, REHYDRATE } from 'redux-persist';

const INITIAL_STATE = {
    loading: false,
    error: '',
};

const persistConfig = {
    key: 'splash',
    storage,
    blacklist: ['loading']
};

const splashReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REHYDRATE:
            return {
                ...state,
                loading: false
            };
        case PURGE:
            return {
                ...INITIAL_STATE
            };
        default:
            return state;
    }
}


export default persistReducer(persistConfig, splashReducer);