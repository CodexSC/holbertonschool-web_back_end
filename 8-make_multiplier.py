#!/usr/bin/env python3
"""Type-annotated function factory for float multipliers."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by multiplier."""

    def multiplier_func(value: float) -> float:
        """Multiply value by the captured multiplier."""
        return value * multiplier

    return multiplier_func
