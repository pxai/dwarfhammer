# DwarfHammer

https://dwarfhammer.netlify.app

[![Build Status](https://app.travis-ci.com/pxai/dwarfhammer.svg?branch=master)](https://app.travis-ci.com/pxai/dwarfhammer)

[![Netlify Status](https://api.netlify.com/api/v1/badges/27bc0274-9b41-4273-9cc5-4acb5c8844f7/deploy-status)](https://app.netlify.com/sites/jazzy-taffy-f989eb/deploys)


# butler
```
butler push build pello/dwarfhammer:html --userversion 0.0.1
```
HTML must be tagged on itch.io


# Notes
Add this in `package.json` in order to avoid adding static urls under `/`

```json
  "homepage": "./",
```

or

```
PUBLIC_URL='CHANGE_URL'
```