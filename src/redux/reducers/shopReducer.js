import { UPDATE_SHOP } from "../actions/shopAction";

const INITIAL_STATE = {
    arrShop: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_SHOP:
            return {
                ...state,
                arrShop: action.data.newShop,
            };

        default:
            return state;
    }
};

export default shopReducer;
