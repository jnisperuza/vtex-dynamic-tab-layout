import React, { Fragment, useEffect } from "react";
import { useCssHandles } from "vtex.css-handles";
import {
    TabLayout,
    TabList,
    TabListItem,
    TabContent,
    TabContentItem,
    // @ts-ignore
} from 'vtex.tab-layout';
import ConditionalTabContent from "./ConditionalTabContent";
import { getListContainer } from "./DynamicTab";
import { CHEVRON_DOWN_SVG, CSS_HANDLES, MAX_HEIGHT } from "./DynamicTabConstants";

declare var document: any;
declare var MutationObserver: any;

function LayoutContent(props: any) {
    const handles = useCssHandles(CSS_HANDLES);
    const {
        query,
        tabs,
        defaultActiveTabId,
        onNavigationLeftClick,
        onNavigationRightClick,
    } = props;

    let observer: any;

    useEffect(() => {
        observeItemActive();

        // returned function will be called on component unmount
        () => {
            if (observer) {
                observer.disconnect();
            }
        }
    }, []);

    const handleNavigationLeft = (event: any) => {
        if (onNavigationLeftClick instanceof Function) {
            onNavigationLeftClick(event);
        }
    }
    const handleNavigationRight = (event: any) => {
        if (onNavigationRightClick instanceof Function) {
            onNavigationRightClick(event);
        }
    }

    const handleCenter = (selector: any) => {
        const listContainer = getListContainer();
        const navigationLeft = document.querySelector(`.${handles['DynamicTab--NavigationLeft']}`);
        const navigationRight = document.querySelector(`.${handles['DynamicTab--NavigationRight']}`);

        if (listContainer?.offsetHeight > MAX_HEIGHT) {
            selector.scrollIntoView({ block: "center", inline: 'center', behavior: 'auto' });

            if (navigationLeft) {
                navigationLeft.disabled = false;
            }
            if (navigationRight) {
                navigationRight.disabled = false;
            }
        }
    }

    const observeItemActive = () => {
        const listContainer = getListContainer();
        function callback(mutationList: any[]) {
            mutationList.forEach((mutation) => {
                switch (mutation.type) {
                    case "attributes":
                        switch (mutation.attributeName) {
                            case "class":
                                const selector = mutation.target;
                                const itemList = Array.from(selector.classList) as string[];
                                const active = itemList.find(className => className.includes('listItemActive'));

                                if (active) {
                                    handleCenter(selector);
                                }
                                break;
                        }
                        break;
                }
            });
        }

        observer = new MutationObserver(callback);

        observer.observe(listContainer, {
            attributeFilter: ["class"],
            attributeOldValue: true,
            subtree: true,
            childList: true,
        });
    }

    if (!tabs?.length) {
        return <Fragment />
    }

    return (
        <TabLayout
            defaultActiveTabId={defaultActiveTabId || tabs[0].tabId}
        >
            <TabList className={handles['DynamicTab--TabList']}>
                <button
                    type="button"
                    className={handles['DynamicTab--NavigationLeft']}
                    onClick={handleNavigationLeft}
                >
                    <img
                        src={`data:image/svg+xml;charset=UTF-8,${CHEVRON_DOWN_SVG}`}
                        alt="navigation-left"
                    />
                </button>
                <button
                    type="button"
                    className={handles['DynamicTab--NavigationRight']}
                    onClick={handleNavigationRight}
                >
                    <img
                        src={`data:image/svg+xml;charset=UTF-8,${CHEVRON_DOWN_SVG}`}
                        alt="navigation-right"
                    />
                </button>
                {tabs.map((tab: Tab, index: number) => (
                    <TabListItem
                        key={index}
                        tabId={tab.tabId}
                        label={tab.label}
                    />
                ))}
            </TabList>
            <TabContent>
                {tabs.map((tab: Tab, index: number) => (
                    <TabContentItem key={index} tabId={tab.tabId}>
                        <ConditionalTabContent query={query} tab={tab} />
                    </TabContentItem>
                ))}
            </TabContent>
        </TabLayout>
    )
}

export default LayoutContent;