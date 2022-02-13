import {
  GET_ALL_COUNTRIES,
  GET_DETAIL,
  GET_COUNTRY_NAME,
  FILTER_BY_CONTINENT,
  FILTER_BY_POPULATION,
  FILTER_BY_LETTER,
  CREATE_ACTIVITY,
  GET_ACTIVITIES,
  FILTER_BY_ACTIVITY,
  FILTER_BY_AREA,
  ACT_STATE,
} from "../actions/Actions";

const inicitialState = {
  countries: [],
  auxCountries: [],
  countryDetail: [],
};

export default function rootReducer(state = inicitialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRY_NAME: {
      return {
        ...state,
        countries: payload,
      };
    }
    case GET_ALL_COUNTRIES: {
      return {
        ...state,
        countries: payload,
        auxCountries: payload,
      };
    }
    case GET_DETAIL: {
      return {
        ...state,
        countryDetail: payload,
      };
    }
    case FILTER_BY_CONTINENT: {
      const allCoutries = state.countries;
      const continentFiltered =
        payload === "clear"
          ? allCoutries
          : allCoutries.filter((e) => e.continents === payload);
      return {
        ...state,
        countries: continentFiltered,
        auxCountries: continentFiltered,
      };
    }
    case FILTER_BY_POPULATION: {
      let allCoutries = state.countries;
      if (payload === "lowerToHigher")
        allCoutries.sort((a, b) => a.population - b.population);
      if (payload === "higherToLower")
        allCoutries.sort((a, b) => b.population - a.population);
      if (payload === "default") allCoutries = state.auxCountries;
      console.log(allCoutries);
      return {
        ...state,
        countries: [...allCoutries],
      };
    }
    case FILTER_BY_AREA: {
      let allCoutries = state.countries;
      if (payload === "lowerToHigher")
        allCoutries.sort((a, b) => a.area - b.area);
      if (payload === "higherToLower")
        allCoutries.sort((a, b) => b.area - a.area);
      if (payload === "default") allCoutries = state.auxCountries;
      return {
        ...state,
        countries: [...allCoutries],
      };
    }
    case FILTER_BY_LETTER: {
      let allCoutries = state.countries;
      if (payload === "A-Z")
        allCoutries.sort((a, b) => a.name.localeCompare(b.name));
      if (payload === "Z-A")
        allCoutries.sort((a, b) => b.name.localeCompare(a.name));
      if (payload === "default") allCoutries = state.auxCountries;
      return {
        ...state,
        countries: [...allCoutries],
      };
    }
    case CREATE_ACTIVITY: {
      return {
        ...state,
        activities: [...state.activities, payload],
      };
    }
    case GET_ACTIVITIES: {
      return {
        ...state,
        activities: payload,
      };
    }
    case FILTER_BY_ACTIVITY: {
      const act = state.countries;
      let result;
      if (payload === "default") result = state.auxCountries;
      result = act.filter((e) => e.activities[0]?.name === payload);
      console.log(act.filter((e) => e.activities[0]?.name === payload));
      return {
        ...state,
        countries: result,
      };
    }
    case ACT_STATE: {
      return {
        ...state,
        stateActivities: payload,
      };
    }

    default:
      return state;
  }
}
