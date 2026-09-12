"""01 — Transcribe a file.

One REST call: upload the audio bytes, get the transcript back. WAV and MP3
are detected server-side; anything else is treated as raw 16 kHz 16-bit mono
PCM.

    python 01_transcribe_file.py path/to/audio.wav
"""

import sys

from common import ASR_LANGUAGE, make_client


def main() -> None:
    if len(sys.argv) < 2:
        raise SystemExit("usage: python 01_transcribe_file.py <audio file>")
    path = sys.argv[1]

    with make_client() as client:
        result = client.asr.transcribe_file(path, language=ASR_LANGUAGE)

    print(result.text)
    print(
        f"\n{result.duration_seconds:.1f}s of audio, "
        f"{result.processing_seconds:.2f}s processing"
    )


if __name__ == "__main__":
    main()
