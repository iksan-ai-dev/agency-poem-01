// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. Deterministic: no network, no randomness,
// no time or environment dependence — two runs write byte-identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// "The Handover" — agency is not the doing, it is the choosing. We hand the
// doing to the agent gladly; the poem turns on the day the narrator realises
// the choosing went with it, and takes the smallest choices back.
const POEM = [
  'The Handover',
  '',
  'I gave it the keys one ordinary Tuesday —',
  'the calendar, the inbox, the small yeses and nos',
  'that used to fill my afternoons like rain.',
  '',
  'It did not hesitate. It never does.',
  'It booked, it answered, it filed, it sent,',
  'and by Friday my desk was clean as a held breath.',
  '',
  'That night I stood in the kitchen, spoon in hand,',
  'and could not name what I had chosen that day.',
  'Not one thing. Not the soup. Not the salt.',
  '',
  'So I took back the smallest things:',
  'which mug, which road, which song, which word.',
  'The agent keeps the heavy lifting.',
  'I keep the choosing —',
  'the one act no one can do for me',
  'without me disappearing too.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
