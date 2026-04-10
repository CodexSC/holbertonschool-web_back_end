#!/usr/bin/env python3
"""Type-annotated function for iterable element lengths."""

from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return each element paired with its length."""
    return [(i, len(i)) for i in lst]
