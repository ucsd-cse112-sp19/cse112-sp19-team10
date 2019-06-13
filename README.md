# Shinobi Component Library
[![Build Status](https://travis-ci.com/ucsd-cse112/cse112-sp19-team10.svg?token=Nn7W4RnbZq1QGEydYuEM&branch=master)](https://travis-ci.com/ucsd-cse112/cse112-sp19-team10) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 
<a href="https://github.com/DevExpress/testcafe"><img alt="Tested with TestCafe" src="https://img.shields.io/badge/tested%20with-TestCafe-2fa4cf.svg"></a> [![Maintainability](https://api.codeclimate.com/v1/badges/a964c0b0f9918af7aefd/maintainability)](https://codeclimate.com/repos/5cc0c0aa5014ac306c010419/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a964c0b0f9918af7aefd/test_coverage)](https://codeclimate.com/repos/5cc0c0aa5014ac306c010419/test_coverage)
---

Table of Contents
=================
<!--ts-->
   * [Shinobi Component Library](#shinobi-component-library)
   * [Table of Contents](#table-of-contents)
      * [A project by Team Rockstar Ninjas](#a-project-by-team-rockstar-ninjas)
      * [Installation](#installation)
      * [Getting Started](#getting-started)
         * [API Docs](#api-docs)
      * [Coding Style](#coding-style)
      * [Testing](#testing)
      * [Contributing](#contributing)
      * [Component Architecture](#component-architecture)
      * [Build Environment](#build-environment)
      * [Repo Structure](#repo-structure)
      * [Change Log](#change-log)
      * [Team](#team)
      * [License](#license)
      * [Dependencies](#dependencies)

<!-- Added by: seannam, at: Thu Jun 13 01:35:27 PDT 2019 -->

<!--te-->

## A project by Team Rockstar Ninjas
The Shinobi Component Library (SCL) is a collection of meticulously built standard web components for you to use in any web project.  
<img src="docs/img/rockstar_ninja.PNG" title="Team Logo" alt="Team Logo" width="300px"/>

## Installation
You can install Shinobi in two ways:  
- Install using `npm install shinobirockstar`  
- Download the zip file

## Getting Started
Each component is named `core-COMPONENT_NAME`, where *COMPONENT_NAME* is the name of the component. Each component comes with default values allowing you to get started using just one simple line of code.

They can be used like so:
```
<core-tooltip>  
        <core-switch></core-switch>  
</core-tooltip>  
<core-rate></core-rate>  
```
Read more on the [Getting Started page](docs/usage/GettingStarted.md).

### API Docs
Component Specific API docs can be found: [here](docs/index.html)  
These include a full list of attributes for each component.    

## Coding Style
Our project uses the Standard JavaScript Style, (also known as StandardJS), found at [standardjs.com](standardjs.com)  
Read more about our coding style [here](docs/dev/CodingStyle.md).

## Testing
For unit tests, we are using [Mocha](https://mochajs.org/) and [Showroom](https://github.com/eavichay/showroom). Read about how to modify existing tests and write new ones in our [unit testing guide](https://docs.google.com/document/d/1lbslRDDltuQ9W85m4ydCMiX7PHPhnL075Dgzt4M1Nuo/edit).  
Browser tests are done through [Testcafe](https://devexpress.github.io/testcafe/) and [SauceLabs](https://saucelabs.com/). Find our guide [here](https://docs.google.com/document/d/1x6_YWZVBgTehy1oi4eblvHlfXKKR_XMpY9cHYgYD3EI/edit).

## Contributing
Want to contribute? Read the [guide](https://docs.google.com/document/d/131o201JKLoXA3ThO713b-uAVn71Ql5zLPmLm_eqTdMU/edit) on how to get started!

## Component Architecture
We are using a very straightforward architecture for the components. It should be easy to tell by reading the code. In case you are unsure, read this short explanation [here](docs/dev/Architecture.md).

## Build Environment
Learn how to set up the build environment and use the tools here: [setting up the build pipeline](https://docs.google.com/document/d/1T7znBZnsLRjiv7TSTTOygoxcIgXU88AOVcoRg2jSkuY/edit)

## Repo Structure
Learn about how our project directories are set up [here](docs/dev/Repo.md).

## Change Log
This project uses [semantic-release](https://github.com/semantic-release/semantic-release#how-does-it-work) to generate a change log from the git commit messages. Please follow the format as outline in their [docs](https://github.com/semantic-release/semantic-release#how-does-it-work).

## Team
The Shinobi Component Library is brought to you by Team Rockstar Ninjas, a group of students from UCSD's CSE 112 course. [Meet the team!](docs/Team.md)

## License
## Dependencies
