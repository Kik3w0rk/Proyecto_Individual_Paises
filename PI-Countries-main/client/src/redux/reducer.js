import { GET_ALL_COUNTRY, GET_ID_COUNTRY, GET_NAME_COUNTRY, CLEAN_INPUT_NAME, ERROR, CLEAN_INPUT_CONTINENT, GET_COUNTRY_CONTINENT, CLEAN_DETAILS, GET_ACTIVITY, GET_COUNTRIES_ACTIVITIES, CLEAN_INPUT_ACTIVITY } from "./actions";

const initialState = {
    countries: [],
    countryId: {},
    countryRegion: [],
    countriesActivity: [],
    countryName: {},
    activities: [],
    error: "",
}

const rootReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_ALL_COUNTRY:
            return{
                ...state,
                countries: action.payload
            }
        case GET_ID_COUNTRY:
            return{
                ...state,
                countryId: action.payload
            }
        case GET_NAME_COUNTRY:
            return{
                ...state,
                countryName: action.payload
            }
        case GET_COUNTRY_CONTINENT:
            return{
                ...state,
                countryRegion: action.payload
            }
        case GET_ACTIVITY:
            return{
                ...state,
                activities: action.payload
            }
        case GET_COUNTRIES_ACTIVITIES:
            return{
                ...state,
                countriesActivity: action.payload
            }
        case CLEAN_INPUT_NAME:
            return{
                ...state,
                countryName: {} 
            }
        case CLEAN_INPUT_CONTINENT:
            return{
                ...state,
                countryRegion: [] 
            }
        case CLEAN_INPUT_ACTIVITY:
            return{
                ...state,
                countriesActivity: []
            }
        case CLEAN_DETAILS:
            return{
                ...state,
                countryId: {}
            }
        case ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return {...state}
    }

}

export default rootReducer;