# Speechline examples (Python)

```bash
cp .env.example .env      # put your API key in
python -m venv .venv && . .venv/bin/activate
pip install -r requirements.txt
python 01_transcribe_file.py path/to/audio.wav
```

Needs Python ≥ 3.9.

| Script | What it does |
|--------|--------------|
| `01_transcribe_file.py <file>` | Transcribe a WAV/MP3 file, print text and timing |

`common.py` loads `.env` and builds the shared `SpeechlineClient`.
