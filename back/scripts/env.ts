import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path';
import { TAB } from '@local/shared/dist/const/string';

console.info('create env type file...');

const file = readFileSync(path.resolve(__dirname, '../env/.env'), { encoding: 'utf8' });

const envKeys = file
  .split('\n')
  .filter((line) => line[0] !== '#')
  .map((line) => line.split('=')[0]);

const data = envKeys.reduce((prev, key) => prev + `${TAB}${key}: string;\n`, 'interface Env {\n') + '}\n';

writeFileSync(path.resolve(__dirname, '../src/types/env.d.ts'), data);

console.info('done.');
