# <p align="center">🚀 Fast Search</p>

## 🔍 Overview

**Fast Search** is a lightweight and efficient JavaScript package designed to quickly find the index of a target number within a sorted array.

## 📦 Installation

Install the package using npm or yarn:

```sh
npm install fast-search
# or
yarn add fast-search
```

## 🚀 Usage

Import `findIndex` from `fast-search` and use it to locate the index of a target element in an array.

```javascript
const { findIndex } = require("fast-search");

const targetElement = 7;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const targetIndex = findIndex(arr, targetElement);

console.log(targetIndex); // Output: 6
```

## 📌 Features

- 🔥 **Fast & Efficient**: Optimized search for quick results.
- 🛠 **Lightweight**: Minimal dependencies, keeping your project clean.
- 🎯 **Easy to Use**: Simple API with a single function.

## 📝 API

### `findIndex(array, target)`

Finds the index of `target` in `array`. If the target is not found, returns `-1`.

#### Parameters:

- `array` _(Array)_: The array to search within.
- `target` _(Number)_: The number to find in the array.

#### Returns:

- _(Number)_: The index of the target element, or `-1` if not found.

## 🤝 Contributing

We welcome contributions! Feel free to open issues or submit pull requests.

## 📜 License

This project is licensed under the **MIT License**.

---

⭐ If you find this package useful, consider giving it a star!
