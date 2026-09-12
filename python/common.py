"""Shared setup: load .env and build the client."""

import os

from dotenv import load_dotenv
from speechline import SpeechlineClient

load_dotenv()

BASE_URL = os.environ.get("SPEECHLINE_BASE_URL")
API_KEY = os.environ.get("SPEECHLINE_API_KEY")
if not BASE_URL:
    raise SystemExit("Set SPEECHLINE_BASE_URL (see .env.example).")
if not API_KEY:
    raise SystemExit("Set SPEECHLINE_API_KEY (see .env.example).")

# Optional ASR language from .env; None = server default.
ASR_LANGUAGE = os.environ.get("ASR_LANG") or None


def make_client() -> SpeechlineClient:
    return SpeechlineClient(base_url=BASE_URL, api_key=API_KEY)
