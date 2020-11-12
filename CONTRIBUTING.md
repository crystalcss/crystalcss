# Contributing
---
### Introduction
Please read through this document if you want to help with the development process.

### Guidelines
#### General Formatting:
- 2 spaces, no tabs (sorry!)
- UTF-8

#### SCSS & CSS:
All the styling is done in [`.scss`](https://sass-lang.com/) files, in the root `scss/` directory of this repository. Please place your own local `.css` files, that are compiled from a scss file-watcher, into a directory in your project's root, called `local_dev/`. This folder is setup to be ignored on the Github end, because all commits and pushes automatically have their `.scss` files compiled to `.css` using Github Actions. Uploading your own css files would then be redundant so... **you don't have to worry about providing anything besides the `.scss` files you modified when you commit :)**

Here's a project structure in case that was a little confusing:
```
root
  | ----- local_dev/ (your local directory, where your sass->css files can go)
  |         | ----- css/
  |         | ----- js/
  |
  | ----- scss/ (the files you want to modify!)
  |         | ----- crystalcss.scss
  |         | ----- _buttons.scss
  |         | ----- _text.scss
  |         | ----- etc
  |
  | ----- js/ (other files you might want to modify!)
  |
  | ----- build/ (the directory that github generates the css & minified css files)
  |         | ----- css/
  |         | ----- js/
  |  
  | ----- .gitignore
  | ----- package.json
  | ----- etc
```
Feel free to contact me if you are still lost, I will happily explain.
