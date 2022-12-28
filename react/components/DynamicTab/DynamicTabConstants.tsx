export const CSS_HANDLES = [
  'DynamicTab',
  'DynamicTab--TabList',
  'DynamicTab--Loading',
  'DynamicTab--Error',
  'DynamicTab--Collection-Not-Found',
  'DynamicTab--NavigationLeft',
  'DynamicTab--NavigationRight',
  'DynamicTab--Preloader',
  'DynamicTab--ProductListContent',
  'DynamicTab--Slider',
  'DynamicTab--InitializedView',
];

export const CHEVRON_DOWN_SVG = `%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='25' height='24' viewBox='0 0 25 24' fill='none' version='1.1' id='svg12' sodipodi:docname='icon-chevron-down.svg' inkscape:version='1.0.2 (e86c8708, 2021-01-15)'%3E%3Cmetadata id='metadata18'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=''%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cdefs id='defs16' /%3E%3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='1280' inkscape:window-height='755' id='namedview14' showgrid='false' inkscape:zoom='23.708333' inkscape:cx='12.373462' inkscape:cy='13.602812' inkscape:window-x='0' inkscape:window-y='81' inkscape:window-maximized='1' inkscape:current-layer='svg12' /%3E%3Cpath d='M6.1626 9L12.1626 15L18.1626 9' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' id='path10' style='stroke:%23000000;stroke-opacity:1' /%3E%3C/svg%3E%0A`;

export const LIST_CONTAINER = '[class*="DynamicTab"] [class*="listContainer"]';

export const MOVEMENT_SIZE = 100;

export const MAX_HEIGHT = 56;

export const SCHEMA = {
  type: 'object',
  title: 'admin/editor.DynamicTab.title',
  description: 'admin/editor.DynamicTab.description',
  properties: {
    isActive: {
      title: 'admin/editor.DynamicTab.isActive.title',
      description: 'admin/editor.DynamicTab.isActive.description',
      type: 'boolean',
      default: true,
    },
    title: {
      type: 'string',
      title: 'admin/editor.DynamicTab.section.title',
    },
    defaultActiveTabId: {
      type: 'string',
      title: 'admin/editor.DynamicTab.section.defaultActiveTabId',
    },
    tabs: {
      title: 'admin/editor.DynamicTab.tabs.title',
      type: 'array',
      items: {
        type: 'object',
        title: 'admin/editor.DynamicTab.tabs.tab.title',
        properties: {
          tabId: {
            type: 'string',
            title: 'admin/editor.DynamicTab.tabs.tab.id',
          },
          label: {
            type: 'string',
            title: 'admin/editor.DynamicTab.tabs.tab.label',
          },
          collectionId: {
            type: 'string',
            title: 'admin/editor.DynamicTab.tabs.tab.collectionId',
          },
        },
        required: ['tabId', 'label', 'collectionId'],
      },
    },
  },
};