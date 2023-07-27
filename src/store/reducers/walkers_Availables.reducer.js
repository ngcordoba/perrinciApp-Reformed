import { WALKERS } from "../../data/walkers_Availables";

const initialState = {
    walkers: WALKERS, //lo que obtengo desde la BD en un escenario ideal
    selected: null,

};

const WalkersReducer = (state = initialState, action) => {
    return state;
}

export default WalkersReducer; 
