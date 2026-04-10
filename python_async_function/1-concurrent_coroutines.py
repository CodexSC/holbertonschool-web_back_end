#!/usr/bin/env python3
"""Execute multiple coroutines concurrently."""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times and return delays in ascending completion order."""
    delays: List[float] = []
    coroutines = [wait_random(max_delay) for _ in range(n)]

    for task in asyncio.as_completed(coroutines):
        delays.append(await task)

    return delays
