// 01 — Transcribe a file.
//
// One REST call: upload the audio bytes, get the transcript and word
// timestamps back. WAV and MP3 are detected server-side; anything else is
// treated as raw 16 kHz 16-bit mono PCM.
//
//   npm run 01 -- path/to/audio.wav

import { readFileSync } from 'node:fs';
import { client, asrLanguage } from './client.js';

const path = process.argv[2];
if (!path) {
  console.error('usage: npm run 01 -- <audio file>');
  process.exit(1);
}

const buf = readFileSync(path);
const audio = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);

const result = await client.asr.transcribe(audio, { language: asrLanguage });

console.log(result.text);
console.log(
  `\n${result.duration_seconds.toFixed(1)}s of audio, ` +
    `${result.processing_seconds.toFixed(2)}s processing`,
);
for (const w of result.words ?? []) {
  console.log(`${(w.start_ms / 1000).toFixed(2)}-${(w.end_ms / 1000).toFixed(2)}  ${w.word}`);
}
