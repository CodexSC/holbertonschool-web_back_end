#!/usr/bin/env python3
"""Asynchronous generator example."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Yield 10 random numbers between 0 and 10 with a 1-second async wait."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
