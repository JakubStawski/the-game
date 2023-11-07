import { createMachine, interpret } from 'xstate';
import * as gameEngine from '../engine/core';
import { GameContext, GameState, GameEvent } from './types';

/**
 * Game main state machine
 */
export const gameMachine = createMachine<GameContext, GameEvent, GameState>({
    initial: 'idle',
    id: 'the-game',
    context: {
        test: 'IDLE',
    },
    states: {
        idle: {
            entry: [gameEngine.logStuff],
            on: {
                START: {
                    target: 'other',
                },
            },
        },
        other: {
            entry: [gameEngine.logOtherStuff],
            on: {
                STOP: {
                    target: 'idle',
                },
            },
        },
    },
});

export const gameService = interpret(gameMachine).onTransition((context, event) => {
    console.log(context.value);
});
