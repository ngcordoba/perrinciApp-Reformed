import { WALKER_WALKSFINISHED } from "../../data/walker_WalksFinished";

const initialState = {
    walker_walksFinished: WALKER_WALKSFINISHED, //lo que obtengo desde la BD en un escenario ideal
    selected: null,

};

const Walker_WalksFinishedReducer = (state = initialState, action) => {
    return state;
}

export default Walker_WalksFinishedReducer; 