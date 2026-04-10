# Python - Variable Annotations

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Type annotations in Python 3
- How you can use type annotations to specify function signatures and variable types
- Duck typing
- How to validate your code with mypy

## Requirements

- Python 3.9+
- mypy

## Tasks

| File | Description |
|------|-------------|
| `0-add.py` | Type-annotated function `add(a, b)` returning the sum of two floats |
| `1-concat.py` | Type-annotated function `concat(str1, str2)` returning the concatenation of two strings |
| `2-floor.py` | Type-annotated function `floor(n)` returning the floor of a float |
| `3-to_str.py` | Type-annotated function `to_str(n)` returning the string representation of a float |
| `4-define_variables.py` | Annotated variables: `a` (int), `pi` (float), `i_understand_annotations` (bool), `school` (str) |
| `5-sum_list.py` | Type-annotated function `sum_list(input_list)` returning the sum of a list of floats |
| `6-sum_mixed_list.py` | Type-annotated function `sum_mixed_list(mxd_lst)` returning the sum of a mixed list |
| `7-to_kv.py` | Type-annotated function `to_kv(k, v)` returning a tuple of string and squared value |
| `8-make_multiplier.py` | Type-annotated function `make_multiplier(multiplier)` returning a multiplier function |
| `9-element_sequence.py` | Duck-typed function `element_length(lst)` returning list of tuples with element lengths |

## Validation

Run mypy to validate type annotations:

```bash
mypy *.py
```
