#!/usr/bin/env python3
"""Updates school topics in a MongoDB collection."""


def update_topics(mongo_collection, name, topics):
    """Update all school documents matching name with the given topics."""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
