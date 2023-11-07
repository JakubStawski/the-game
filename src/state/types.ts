export interface GameContext {
    test: string;
}

export interface GameState {
    value: '';
    context: GameContext;
    states: {
        idle: object;
        other: object;
    };
}

export type GameEvent = { type: 'START' } | { type: 'STOP' };
