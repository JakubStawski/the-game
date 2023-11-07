import { gameService } from './state/stateMachine';

// Starting game Service
gameService.start();

gameService.send({ type: 'START' });

gameService.send({ type: 'STOP' });

gameService.send({ type: 'START' });

gameService.send({ type: 'STOP' });
