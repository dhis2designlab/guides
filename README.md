# DHIS2 design lab guides

This is the source code for [dhis2designlab.github.io][site].

### Installation

```bash
yarn install
```

### Development

```bash
yarn start
```

Sometimes it may be necessary to delete files in *.cache/* and *public/*.

```bash
yarn clean
```

### Deployment

```bash
yarn deploy
```

This will push to the [dhis2designlab.github.io repo][site-repo], making the website available at [dhis2designlab.github.io][site].

### Adding a new page

Create a new .md file in the [pages directory](pages), then deploy.

### Metadata
Your markdown need to include the following at the top.
```md
---
index: 7                    <!-- order in home -->
path: code                  <!-- url path -->
title: Code                 <!-- title in home and sidebar -->
description: Learn to Code. <!-- description in home -->
---
```

#### Headers

`h2` headers show up in the sidebar along with the title (set in the markdown file's metadata).

#### Code highlighting

    ```js{1,3-5}
    const line1 // highlighted
    const line2
    const line3 // highlighted
    const line4 // highlighted
    const line5 // highlighted
    ```

#### Styling

Want to change the styling for some elements in articles? Do it in [StyledArticle.js][styled-article].



[site]: https://dhis2designlab.github.io/
[site-repo]: https://github.com/dhis2designlab/dhis2designlab.github.io
[styled-article]: src/components/Article/StyledArticle.js
