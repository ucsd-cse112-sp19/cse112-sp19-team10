# Repo Structure

## Structure
The repo is divided into several folders:  
- *docs* contain all documentation not on Google Docs as well as our auto-generated API docs
- *examples* contain HTML files using the components
- *src* contains the code for the components
- *tests* are organized into subfolders by type

## Example
Below is an example of what the repo should look like

```
.
├── README.md
├── SauceLabCombination.txt
├── _config.yml
├── docs
│   ├── Team.md
│   ├── dev
│   │   └── CodingStyle.md
│   ├── index.html
│   └── usage
│       └── GettingStarted.md
├── examples
│   ├── rate.html
│   ├── switch.html
│   └── tooltip.html
├── img
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── core_hello.js
│   ├── core_rate.js
│   ├── core_switch.js
│   └── core_tooltip.js
├── tests
│   ├── browser
│   │   ├── SwitchBrowserTest.js
│   │   └── sampleCafetest.js
│   ├── integration
│   ├── pixel
│   └── unit
│       ├── core-hello-test.js
│       └── core-hello.html
└────
```