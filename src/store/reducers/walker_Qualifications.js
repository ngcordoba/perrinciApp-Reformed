import { WALKERQUALIFICATIONS } from "../../data/walker_Qualifications";

const initialState = {
    walker_qualifications: WALKERQUALIFICATIONS, //lo que obtengo desde la BD en un escenario ideal
    selected: null,

};

const Walker_Qualifications = (state = initialState, action) => {
    return state;
}

export default Walker_Qualifications; 