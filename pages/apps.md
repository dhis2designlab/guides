---
index: 3
path: apps
title: DHIS2 apps
description: Learn to create DHIS2 apps.
---

# DHIS2 apps (WIP)

## Header bar
![Header bar][header-image]

[DHIS2 Design System][design-system] contains helpful principles to design DHIS apps. Below you will find an extract from the [part about the header bar][design-system-header].

>The header bar is mandatory for all apps, this creates a stable, understandable point of reference for the user across all kinds of different apps. It must always be displayed fixed to the top of the screen. Do not interfere or obstruct interaction with the header bar.

The header bar is available in the [@dhis2/ui-widgets][npm-widgets] package. Further instruction to use the library can be found [here][ui].

## App skeleton
[The app skeleton repository][app-skeleton] may be used as a foundation to create DHIS2 web apps. The following files have variables/properties that need to be changed (e.g. name of the app):
* [package.json][app-skeleton-package]
* [public/index.html][app-skeleton-html]
* [public/manifest.json][app-skeleton-manifest]
* [src/index.js][app-skeleton-js]

## App example
[This example DHIS2 app][app-example] may be used to get some ideas on how to develop DHIS2 web apps. The functionality of the app is to edit the code of organisation units (which probaly isn't useful for anyone). [App skeleton][apps-app-skeleton] was used as a foundation to create the app. The app also uses libraries such as:
* [prop-types][prop-types] for type checking
* [styled-components][styled-components] for styling
* [husky][husky] and [@dhise/cli-style][cli-style] for enforcing git commit and code formatting, as well as linting

[header-image]: images/headerbar.png
[design-system]: https://github.com/dhis2/design-system
[design-system-header]: https://github.com/dhis2/design-system/blob/master/organisms/header-bar.md
[npm-widgets]: https://www.npmjs.com/package/@dhis2/ui-widgets
[ui]: ../ui
[app-skeleton]: https://github.com/dhis2designlab/app-base
[react-cra]: ../react#running-the-app
[app-skeleton-package]: https://github.com/dhis2designlab/app-base/tree/master/package.json
[app-skeleton-html]: https://github.com/dhis2designlab/app-base/tree/master/public/index.html
[app-skeleton-manifest]: https://github.com/dhis2designlab/app-base/tree/master/public/manifest.json
[app-skeleton-js]: https://github.com/dhis2designlab/app-base/tree/master/src/index.js
[apps-app-skeleton]: #app-skeleton
[app-example]: https://github.com/dhis2designlab/app-example
[prop-types]: https://www.npmjs.com/package/prop-types
[styled-components]: https://www.styled-components.com/
[husky]: https://www.npmjs.com/package/husky
[cli-style]: https://www.npmjs.com/package/@dhis2/cli-style