import { argv, stdout, stderr } from 'node:process';

console.log('arg 1', argv[2]);
console.log('arg 2', argv[3]);
console.log('arg 3', argv[4]);

stdout.write("Корни есть\n");
stderr.write("Корней нет\n");
