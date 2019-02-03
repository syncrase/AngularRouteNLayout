import { Action } from '@ngrx/store';

interface StepSwitcherAction extends Action {
    payload?: number;
}

export const UPDATE_STEP = 'UPDATE_STEP';

const initialState = 1;

export const stepSwitcherReducer = (state: number = initialState, action: StepSwitcherAction) => {
    switch (action.type) {
        case UPDATE_STEP:
            return action.payload;

        default:
            return state;
    }
};
