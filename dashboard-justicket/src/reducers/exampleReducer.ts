import { loop, Cmd } from 'redux-loop';
import { EXAMPLE_ACTION } from '../actions/exampleActions';

interface ExampleState {
    data: string;
    loading: boolean;
    error: boolean;
  }
  
  interface ExampleAction {
    type: string;
    payload: string;
  }
  
  const initialState: ExampleState = {
    data: "",
    loading: false,
    error: false,
  };
  
  export function exampleReducer(state: ExampleState = initialState, action: ExampleAction) {
    switch (action.type) {
      case "EXAMPLE_ACTION":
        return {
          ...state,
          data: action.payload, // Make sure to include the payload property
          loading: true,
          error: false,
        };
      default:
        return state;
    }
  }
  