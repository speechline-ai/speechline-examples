// Install `ws` as the global WebSocket the SDK uses for streaming examples.
// Must run before any session opens; importing this module first guarantees it.
import { WebSocket as NodeWebSocket } from 'ws';
(globalThis as unknown as { WebSocket: typeof NodeWebSocket }).WebSocket = NodeWebSocket;

import { SpeechlineClient } from '@speechline/sdk';
import { loadEnv } from './env.js';

loadEnv();

const baseUrl = process.env.SPEECHLINE_BASE_URL;
const apiKey = process.env.SPEECHLINE_API_KEY;
if (!baseUrl) throw new Error('Set SPEECHLINE_BASE_URL (see .env.example).');
if (!apiKey) throw new Error('Set SPEECHLINE_API_KEY (see .env.example).');

export const client = new SpeechlineClient({ baseUrl, apiKey });

/** Optional ASR language from .env; undefined = server default. */
export const asrLanguage = process.env.ASR_LANG || undefined;
