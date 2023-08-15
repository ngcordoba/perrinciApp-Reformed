import { WALKSACTIVES } from "../../data/walker_WalksActives";

const initialState = {
    walker_walksActives: WALKSACTIVES, //lo que obtengo desde la BD en un escenario ideal
    selected: null,

};

const Walker_WalksActives = (state = initialState, action) => {
    return state;
}

export default Walker_WalksActives; 