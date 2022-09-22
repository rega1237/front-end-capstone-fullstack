import axios from 'axios';

// ACTIONS
export const GET_GAME = 'FRONT-END/SELECTED-GAME-REDUCER/GET_STADIUM';
export const GET_GAME_SUCCESS = 'FRONT-END/SELECTED-GAME-REDUCER/GET_GAME_SUCCESS';
export const GET_GAME_FAILURE = 'FRONT-END/SELECTED-GAME-REDUCER/GET_GAME_FAILURE';

// Action Creators

const getGame = () => ({
  type: GET_GAME,
});

const getGameSuccess = (item) => ({
  type: GET_GAME_SUCCESS,
  payload: item,
});

const getGameFailure = () => ({
  type: GET_GAME_FAILURE,
});

// Thunk
const fetchGame = () => async (dispatch) => {
  dispatch(getGame());
  let game = {};
  try {
    const response = await axios.get('http://localhost:3000/game');
    game = response.data;
    dispatch(getGameSuccess(game));
  } catch (error) {
    dispatch(getGameFailure());
  }
};

// Initial State
const initialState = {
  game: {},
};

// Reducer
const selectedGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME:
      return {
        ...state,
      };
    case GET_GAME_SUCCESS:
      return {
        ...state,
        game: action.payload,
      };
    case GET_GAME_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default selectedGameReducer;

export {
  fetchGame,
  getGame,
  getGameSuccess,
  getGameFailure,
};
