# Coding Style
Our project uses the Standard JavaScript Style, (also known as StandardJS), found at standardjs.com

## Standard JavaScript Style
Standard JavaScript Style was chosen for its ease of use, simplicity, and independence from large tech companies. 

## Getting Started
Here are some rules of StandardJS to get started, taken from the website:  
- 2 spaces – for indentation  
- Single quotes for strings – except to avoid escaping  
- No unused variables – this one catches tons of bugs!  
- No semicolons – It's fine. Really!
- Space after keywords if (condition) { ... }
- Space after function name function name (arg) { ... }
- Always use === instead of == – but obj == null is allowed to check null || undefined.
- Always handle the node.js err function parameter
- Declare browser globals with /* global */ comment at top of file
	- Prevents accidental use of vaguely-named browser globals like open, length, event, and name.  
	- Example: /* global alert, prompt */  
	- Exceptions are: window, document, and navigator  

You can find the rest at [standarjs.com/rules.html](standarjs.com/rules.html)

## Linter
While the linter will catch and apply our coding style on commit, the StandardJS style should be followed as much as possible.
