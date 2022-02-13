import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_POPULATION = "FILTER_BY_POPULATION";
export const FILTER_BY_LETTER = "FILTER_BY_LETTER";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const FILTER_BY_AREA = "FILTER_BY_AREA";
export const ACT_STATE = "ACT_STATE";

export function getAllCountries() {
  return async function (dispatch) {
    try {
      const api = await axios.get("http://localhost:3002/countries/");
      dispatch({ type: GET_ALL_COUNTRIES, payload: api.data });
    } catch (err) {
      console.log(err);
    }
  };
}

export const getCountry = (name) => {
  return async function (dispatch) {
    try {
      const api = axios.get("http://localhost:3002/countries?name=" + name);
      return dispatch({ type: GET_COUNTRY_NAME, payload: api.data });
    } catch (err) {
      console.lop(err);
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const api = axios.get(`http://localhost:3001/countries/${id}`);
      dispatch({ type: GET_DETAIL, payload: api.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
};

export const filterByPopulation = (payload) => {
  return {
    type: FILTER_BY_POPULATION,
    payload,
  };
};

export const filterByLetter = (payload) => {
  return {
    type: FILTER_BY_LETTER,
    payload,
  };
};

export const createActivity = (activity) => {
  return async function (dispatch) {
    try {
      const pos = await axios.post(
        "http://localhost:3002/activities",
        activity
      );
      dispatch({ type: CREATE_ACTIVITY, payload: pos.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllActivities = () => {
  return async function (dispatch) {
    try {
      const api = await axios.get("http://localhost:3002/activities");
      dispatch({ type: GET_ACTIVITIES, payload: api.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const filterByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
};

export const filterByArea = (payload) => {
  return {
    type: FILTER_BY_AREA,
    payload,
  };
};

export const activities = () => {
  return async function (dispatch) {
    try {
      const act = await axios("http://localhost:3002/activities");
      dispatch({ type: ACT_STATE, payload: act.data });
    } catch (err) {
      console.log(err);
    }
  };
};
