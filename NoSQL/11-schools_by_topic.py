#!/usr/bin/env python3
"""Finds schools by topic in a MongoDB collection."""


def schools_by_topic(mongo_collection, topic):
    """Return the list of schools that include the given topic."""
    return list(mongo_collection.find({"topics": topic}))
