import { WALKS } from "../../data/user_WalksFinished";

const initialState = {
    walks: WALKS, //lo que obtengo desde la BD en un escenario ideal
    selected: null,

};

const WalksReducer = (state = initialState, action) => {
    return state;
}

export default WalksReducer; 