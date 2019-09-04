---
index: 2
path: ui
title: DHIS2 UI libraries
description: Learn to use the DHIS2 UI libraries.
---

# DHIS2 UI libraries

A design system consists of a collection of reusable components, standards for when and how to use the components, as well as a style guide. These componentes and guides can be assemblaged together to build applications. 


The goal of a design system is to make both development of applications easier, as well as making applications more consistent. 


The dhis2 design system consists of *three parts*; 
- design principles (general style guide), 
- a collection of UI components, and 
- standards for using the components. 


## Design principles
For dhis2, design principles consists of five focus areas:
- Typography: guidance for font sizes (scale) and line length
- Color: color scale and guidelines for use
- Spacing, alignment, stacking
- Content & comminication: guidelines for writing understandable messages for the user.
- Icons: guidelines for how to use icons


The style guide is available here: 
https://github.com/dhis2/design-system

## Collection of components
Collections of components can consist of components that are visual, or functional, or both. The dhis2 provides UI components, in other words components providing a visual interface. Functional components provides  pre-made functionality to the applications. 

The components can be seen as building-blocks of various sizes. Atomic design splits them up in atoms, molecules, organisms, and templates. Atoms, the smallest components, are the basic bulding-block, for example buttons or inputfields. By combining atoms together, one can build more complex structures, such as molecules and organisms. You can read more about atomic design here http://bradfrost.com/blog/post/atomic-web-design/ . 

The dhis2 UI component library consists mostly of atomic elements. This library is called "ui-core". Currently, the only organism in the UI is the dhis2 headerbar, this is located in the library "ui-widgets". 


### Dhis2 Atomic UI components - [ui-core] [https://github.com/dhis2/ui-widgets]:
https://github.com/dhis2/ui-core

### [UI widgets] [https://github.com/dhis2/ui-widgets], eg. Headerbar:


## Standards
For each of the components in the UI there is are recommended usages, in other words standards for how (and when) to use the different components. They are described [here] [https://github.com/dhis2/design-system]


## Getting started
To use the ui-core and the ui-widgets (headerbar), we can install the neccessary packages through npm.
- npm i @dhis2/ui-core [(link to npm package)][https://www.npmjs.com/package/@dhis2/ui-core]
- npm i @dhis2/ui-widgets [(link to npm package)][https://www.npmjs.com/package/@dhis2/ui-widgets]


If you are using the skeleton applications, these libraries are already installed. 

### Examples of use
*Examples coming...*
