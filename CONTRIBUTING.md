# Contributing
---
### Introduction
Please read through this document if you want to help with the development process.

### Guidelines
#### General Formatting:
- 2 spaces, no tabs (sorry!)
- UTF-8

#### SCSS & CSS:
All the styling is done in `.scss` files, in the root `scss/` directory of this repository. Please place your own local `.css` files, that are compiled from a scss file-watcher, into a root `local_dev/` directory in your IDE. This folder is setup to be ignored on the Github end, because all commits and pushes automatically have their `.scss` files compiled to `.css` using Github Actions. **You don't have to worry about providing anything besides the `.scss` files you modified when you commit.**