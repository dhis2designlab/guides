---
index: 3
path: apps
title: DHIS2 apps
description: Learn to create DHIS2 apps.
---

# DHIS2 apps

## Header bar
![Header bar][header-image]

[DHIS2 Design System][design-system] contains helpful principles to design DHIS apps. Below you will find an extract from the [part about the header bar][design-system-header].

>The header bar is mandatory for all apps, this creates a stable, understandable point of reference for the user across all kinds of different apps. It must always be displayed fixed to the top of the screen. Do not interfere or obstruct interaction with the header bar.

The header bar is available in the [@dhis2/ui-widgets][npm-widgets] package. Further instruction to use the library can be found [here][ui].

## DHIS2 Application Platform
>Unified application architecture and build pipeline to simplify and standardize application development within the DHIS2 ecosystem.

More information can be found in the [official documentation][app-platform-docs].

### Prerequisites
* [Yarn][yarn]
* [Node version 8.16.1 or higher][node]

### Installation
```
yarn global add @dhis2/cli
```

Alternatively, if you have `npm`, you can run the `init` script with `npx`.

### Initialization
```bash
d2 app scripts init my-app-name
# or
npx @dhis2/cli-app-scripts init my-app-name
```

The above command will create a new folder called *my-app-name* and contain
the code for a minimal DHIS2 app.

### DHIS2 instance
By default, the app-platform assumes that you're running a local DHIS2 instance on `localhost:8000`. If you want to define some other url to the instance you can do so with environment variables. A good approach is to add a `.env.development` in your root directory.

```
DHIS2_BASE_URL=https://debug.dhis2.org/2.32.0
DHIS2_API_VERSION=32
```

Alternatively you could add them to the `start` script in `package.json`.
```json
{
    "scripts": {
        "start": "DHIS2_BASE_URL=https://debug.dhis2.org/2.32.0 DHIS2_API_VERSION=32 d2-app-scripts start"
    }
}
```


## Skeleton
[The app skeleton repository][skeleton] may be used as a foundation to create DHIS2 web apps. It's recommended to avoiding using this, unless you are having issues with the [DHIS2 Application Platform][app-platform].

### Building
After a successful `yarn build`, manifest.webapp is generated based on values in package.json. The *build* directory is then zipped as *app-name.zip*. You can change the file name in "postbuild" inside "scripts" in package.json. This zip file can then be installed in a DHIS2 instance using the *App Management* app.

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

### index.html
Change `<title>app-name</title>` in [public/index.html][skeleton-html].

### manifest.json
Many of the same keys should be changed in [public/manifest.json][skeleton-manifest] as for [manifest.json][apps-manifest]. You can read about the purpose of this file [here][google-manifest].

### index.js
Change `appName` in [src/index.js][skeleton-js].

### .env.development
It might be necessary to change `REACT_APP_DHIS2_BASE_URL` in [.env.development][skeleton-env-dev]. You need to be logged in to this server during development.

### .env
It might be necessary to change `REACT_APP_DHIS2_API_VERSION` in [.env][skeleton-env].

## Example
[This example DHIS2 app][example] may be used to get some ideas on how to develop DHIS2 web apps. The functionality of the app is to edit the code of organisation units (which probably isn't useful for anyone). [App skeleton][apps-skeleton] was used as a foundation to create the app. The app also uses libraries such as:
* [prop-types][prop-types] for type checking
* [styled-components][styled-components] for styling
* [@dhis2/cli-style][cli-style] for enforcing git commit and code formatting, as well as linting


[header-image]: images/headerbar.png
[design-system]: https://github.com/dhis2/design-system
[design-system-header]: https://github.com/dhis2/design-system/blob/master/organisms/header-bar.md
[npm-widgets]: https://www.npmjs.com/package/@dhis2/ui-widgets
[app-platform-docs]: https://platform.dhis2.nu/#/
[yarn]: https://yarnpkg.com/lang/en/docs/install/
[node]: https://nodejs.org/en/
[ui]: ../ui
[app-platform]: #dhis2-application-platform
[skeleton]: https://github.com/dhis2designlab/app-skeleton
[skeleton-package]: https://github.com/dhis2designlab/app-skeleton/tree/master/package.json
[skeleton-html]: https://github.com/dhis2designlab/app-skeleton/tree/master/public/index.html#L38
[skeleton-manifest]: https://github.com/dhis2designlab/app-skeleton/tree/master/public/manifest.json
[apps-manifest]: #manifestjson
[google-manifest]: https://developers.google.com/web/fundamentals/web-app-manifest/
[skeleton-js]: https://github.com/dhis2designlab/app-skeleton/tree/master/src/index.js#L9
[skeleton-env-dev]: https://github.com/dhis2designlab/app-skeleton/tree/master/.env.development
[skeleton-env]: https://github.com/dhis2designlab/app-skeleton/tree/master/.env
[apps-skeleton]: #skeleton
[example]: https://github.com/dhis2designlab/app-example
[prop-types]: https://www.npmjs.com/package/prop-types
[styled-components]: https://www.styled-components.com/
[cli-style]: https://www.npmjs.com/package/@dhis2/cli-style