export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

export interface ExampleAction {
  type: typeof EXAMPLE_ACTION;
  payload: string;
}

export function exampleAction(payload: string): ExampleAction {
  return {
    type: EXAMPLE_ACTION,
    payload,
  };
}
