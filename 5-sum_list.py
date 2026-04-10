#!/usr/bin/env python3
"""Type-annotated function for summing a list of floats."""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of a list of floating-point numbers."""
    return float(sum(input_list))
