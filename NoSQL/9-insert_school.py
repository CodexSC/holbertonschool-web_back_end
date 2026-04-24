#!/usr/bin/env python3
"""Inserts a new document into a MongoDB collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a document in the collection and return its new _id."""
    return mongo_collection.insert_one(kwargs).inserted_id
