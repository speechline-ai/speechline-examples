# Speechline examples (JS / TypeScript)

```bash
cp .env.example .env      # put your API key in
npm install
npm run 01 -- path/to/audio.wav
```

Needs Node ≥ 22 (global `WebSocket`). Scripts run with `tsx`, no build step.

| Script | What it does |
|--------|--------------|
| `npm run 01 -- <file>` | Transcribe a WAV/MP3 file, print text + word timestamps |

`src/env.ts` loads `.env`; `src/client.ts` builds the shared `SpeechlineClient`.
