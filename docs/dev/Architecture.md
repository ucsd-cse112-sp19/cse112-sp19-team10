# Component Architecture

Each component is written in a file `core_COMPONENT.js`, where *COMPONENT* is the name of the component. Unless specified otherwise, *COMPONENT* refers to the name of the component. The structure of the file is as follows:  

- create a template element with the name componentTemplate
- innerHTML is set. This is where the CSS for the component lives
- CoreComponent class, which includes the constructor
- Getter/Setter methods for accessing and modifying component attributes
- Callback functions

This structure should be pretty obvious and easy to follow by looking at the existing component files in the `src` folder. It's derived from the structure described in Google's guide on Custom Elements, found [here](https://developers.google.com/web/fundamentals/web-components/customelements) and should be followed at all times.
