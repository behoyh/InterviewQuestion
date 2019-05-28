import { Graph } from './graph';
import { Cascade } from './cascade';

export const CREATE_GRAPH = 'CREATE_GRAPH';
export const UPDATE_GRAPH = 'UPDATE_GRAPH';
export const CASCADE_GRAPH = 'CASCADE_GRAPH';

export class Reducer {

    public static StateChange(state = Graph.Init(), action) {
        switch (action.type) {
            case CREATE_GRAPH: {
                return {
                    ...state
                };
            }
            case UPDATE_GRAPH: {
                const { id, input } = action;

                if (input.length == 1) {
                    return {
                        ...state,
                        ...state[id] = {
                            id: input[0],
                            input: input
                        }
                    };
                }

                return {
                    ...state,
                    ...state[id] = {
                        id: input.reduce((a, b) => { return parseInt(a+b) }, input),
                        input: input
                    }
                };
            }
            case CASCADE_GRAPH: {

                return {
                    ...state,
                    ...Cascade.Updates(state)
                    }
                };
            default:
                return state;
        }
    };
}