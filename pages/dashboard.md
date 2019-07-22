---
index: 4
path: dashboard
title: DHIS2 dashboard apps
description: Learn to create DHIS2 dashboard apps.
---

# DHIS2 dashboard apps

## Dashboard
![DHIS2 dashboard][dashboard-image]

Dashboard apps (previously referred to as *widgets*) can be added to the DHIS2 dashboard, similar to how maps and tables can be displayed in the dashboard. Dashboard apps are not displayed in the header bar's app menu. If the `appType` property in *manifest.webapp* is set to `DASHBOARD_WIDGET`, then DHIS2 will install the app as a dashboard app. If you use the [d2-manifest][d2-manifest], then this is typically done in *package.json*.

```json{3}
{
    ...
    "manifest.webapp": {
        ...
        "appType": "DASHBOARD_WIDGET"
    }
}
```

[DHIS2 Design System][design-system] contains helpful principles to design DHIS apps, including dashboard apps. There are exceptions, e.g. that dashboard apps should not include the header bar.

## Skeleton
[The dashboard app skeleton repository][skeleton] may be used as a foundation to create DHIS2 dashboard apps. Rembember to change the app name in [package.json][skeleton-package].

### Building
After a successful `yarn build`, manifest.webapp is generated based on values in package.json. The *build* directory is then zipped as *app-name.zip*. You can change the file name in "postbuild" inside "scripts" in package.json. You may also want to add the file name to [.gitignore][skeleton-gitignore]. This zip file can then be installed in a DHIS2 instance using the *App Management* app.

### package.json
The following keys should be changed in [package.json][skeleton-package]:
* name
* description
* developer
    * name (required for generating manifest.json)
    * email (optional)
    * url (optional)
* license (if you want another license)
* manifest.webapp
    * name
    * description

### index.js
It might be necessary to change `developmentServer` in [src/index.js][skeleton-js]. You need to be logged in to this server during development.

## Example
[This example DHIS2 dashboard app][example] may be used to get some ideas on how to develop DHIS2 dashboard apps. This example app displays a welcoming message to the user. [Dashboard app skeleton][apps-skeleton] was used as a foundation to create the app. The app also uses libraries such as:
* [@dhis2/app-runtime][app-runtime] to get data from the DHIS2 core
* [prop-types][prop-types] for type checking
* [styled-components][styled-components] for styling
* [@dhis2/cli-style][cli-style] for enforcing git commit and code formatting, as well as linting


[dashboard-image]: images/dashboard.png
[design-system]: https://github.com/dhis2/design-system
[d2-manifest]: https://www.npmjs.com/package/d2-manifest
[skeleton]: https://github.com/dhis2designlab/dashboard-app-skeleton
[skeleton-gitignore]: https://github.com/dhis2designlab/dashboard-app-skeleton/tree/master/.gitignore#L25
[skeleton-package]: https://github.com/dhis2designlab/dashboard-app-skeleton/tree/master/package.json
[skeleton-js]: https://github.com/dhis2designlab/dashboard-app-skeleton/tree/master/src/index.js#L15
[example]: https://github.com/dhis2designlab/dashboard-app-example
[apps-skeleton]: #skeleton
[app-runtime]: https://github.com/dhis2/app-runtime/tree/master/services/data
[prop-types]: https://www.npmjs.com/package/prop-types
[styled-components]: https://www.styled-components.com/
[cli-style]: https://www.npmjs.com/package/@dhis2/cli-style