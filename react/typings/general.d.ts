interface Tab {
    tabId: string;
    label: string;
    collectionId: string;
}

interface DynamicTab {
    title: string;
    defaultActiveTabId: string;
    tabs: Tab[];
}

interface Selector {
    scrollWidth: number;
    offsetWidth: number;
    offsetHeight: number;
    scrollLeft: number;
    scrollTo: (arg0: number, arg1: number) => void;
}