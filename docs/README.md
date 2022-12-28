# VTEX-DYNAMIC-TAB-LAYOUT

The vtex-dynamic-tab-layout app provides you the needed structure to create shelf layouts based in collections from the use of tabs.

## Configuration

In this section, you first must **add the primary instructions** that will allow users to use the app's blocks in their store, such as:

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

### Vtex site editor

![Site editor 1](https://cdn.statically.io/gh/jnisperuza/vtex-dynamic-tab-layout/master/docs/images/site-editor-1.png)

![Site editor 2](https://cdn.statically.io/gh/jnisperuza/vtex-dynamic-tab-layout/master/docs/images/site-editor-2.png)

![Site editor 3](https://cdn.statically.io/gh/jnisperuza/vtex-dynamic-tab-layout/master/docs/images/site-editor-3.png)

![Site editor 4](https://cdn.statically.io/gh/jnisperuza/vtex-dynamic-tab-layout/master/docs/images/site-editor-4.png)

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

If there are none, add the following sentence instead:

`No CSS Handles are available yet for the app customization.`

<!-- DOCS-IGNORE:start -->

## Author ✨

- **Jeison Nisperuza** - [jnisperuza](https://github.com/jnisperuza) - [jnisperuza.github.io](https://jnisperuza.github.io/)
