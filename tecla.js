
import * as readlineSync from 'readline-sync';

// Exibe uma mensagem e espera que o usuário pressione uma tecla
const pressedKey = readlineSync.keyIn('Pressione qualquer tecla: ');
console.log(`Você pressionou: ${pressedKey}`);



