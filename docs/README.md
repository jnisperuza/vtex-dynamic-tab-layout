# VTEX-DYNAMIC-TAB-LAYOUT

The vtex-dynamic-tab-layout app provides you the needed structure to create shelf layouts based in collections from the use of tabs.

## Configuration

1. Adding the app as a theme dependency in the `manifest.json` file;

    ```bash
    ...
    "dependencies": {
        ...
        "CHANGE_ME.dynamictabapp": "0.x",
        ...
    },
    ...
    ```

    you should replace CHANGE_ME with the Vtex account.

2. Declaring the app's main block in a given theme template or inside another block from the theme.

    ```bash
    ...
    "store.home": {
        "blocks": [
            ...
            "DynamicTab#shelf-1",
            ...
        ]
    },
    ...
    ```

    ```bash
    ...
    "DynamicTab#shelf-1": {
        "blocks": [
        "product-summary.shelf"
        ]
    },
    ...
    ```

**`Important:`** The context in this block returns product listing information to use with a shelf block.

## Publishing an app

vtex.io-documentation@0.88.24

Following I share the Vtex official documentation in order to understand the three important pieces in order to publishing our app.

1. [Publishing](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-publishing-an-app)
2. [Deploying](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-deploying-the-app-stable-version)
3. [Promoting](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-promoting-a-workspace-to-master)

### Vtex site editor

![Site editor 1](https://cdn.statically.io/gh/jnisperuza/vtex-dynamic-tab-layout/master/docs/images/site-editor-1.png)

![Site editor 2](https://cdn.statically.io/gh/jnisperuza/vtex-dynamic-tab-layout/master/docs/images/site-editor-2.png)

![Site editor 3](https://cdn.statically.io/gh/jnisperuza/vtex-dynamic-tab-layout/master/docs/images/site-editor-3.png)

![Site editor 4](https://cdn.statically.io/gh/jnisperuza/vtex-dynamic-tab-layout/master/docs/images/site-editor-4.png)

### Example Result

![Tab 1](https://cdn.statically.io/gh/jnisperuza/vtex-dynamic-tab-layout/master/docs/images/tab-1.png)

![Tab 2](https://cdn.statically.io/gh/jnisperuza/vtex-dynamic-tab-layout/master/docs/images/tab-2.png)

## Customization

The first thing that should be present in this section is the sentence below, showing users the recipe pertaining to CSS customization in apps:

`In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).`

Thereafter, you should add a single column table with the available CSS handles for the app, like the one below. Note that the Handles must be ordered alphabetically.

| CSS Handles |
| ----------- |
| `DynamicTab` |
| `DynamicTab--NavigationLeft` |
| `DynamicTab--NavigationRight` |
| `container` |
| `contentContainer` |
| `contentItem` |
| `listContainer` |
| `listItem` |
| `listItemActive` |

## Author ✨

- **Jeison Nisperuza** - [jnisperuza](https://github.com/jnisperuza) - [jnisperuza.github.io](https://jnisperuza.github.io/)
