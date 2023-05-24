import { WALKERACTIVES } from "../../data/walkersActives";

const initialState = {
    walkers: WALKERACTIVES, //lo que obtengo desde la BD en un escenario ideal
    selected: null,

};

const WalkersActivesReducer = (state = initialState, action) => {
    return state;
}

export default WalkersActivesReducer; 
