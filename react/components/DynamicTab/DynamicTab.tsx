import React, { useState, useEffect, Fragment, useRef } from 'react';
// @ts-ignore
import ProductSummaryListWithoutQuery from 'vtex.product-summary/ProductSummaryListWithoutQuery';
import { useCssHandles } from 'vtex.css-handles';
import LayoutContent from './LayoutContent';
import {
  CSS_HANDLES,
  LIST_CONTAINER,
  MAX_HEIGHT,
  MOVEMENT_SIZE,
  SCHEMA,
} from './DynamicTabConstants';

import './DynamicTab.css';

declare var window: any;
declare var document: any;

export const getListContainer = () => document.querySelector(LIST_CONTAINER);

interface Tabs {
  tabId: string;
  label: string;
  collectionId: string;
}

interface DynamicTabProps {
  query: any;
  isActive: boolean;
  defaultActiveTabId: string;
  title: string;
  tabs: Tabs[];
}

function DynamicTab(props: DynamicTabProps) {
  const handles = useCssHandles(CSS_HANDLES);
  const [afterViewInit, setAfterViewInit] = useState(false);
  const wrapperRef = useRef<any>(null);
  const {
    query,
    isActive,
    defaultActiveTabId,
    title,
    tabs,
  } = props;

  useEffect(() => {
    window.addEventListener('resize', computedClass);
    return () => {
      window.removeEventListener('resize', computedClass);
    };
  }, []);

  useEffect(() => {
    if (handles && wrapperRef.current) {
      setAfterViewInit(true);
      computedClass();
    }
  }, [handles, wrapperRef]);

  const computedClass = () => {
    const listContainer = getListContainer();
    if (listContainer) {
      if (listContainer.offsetHeight > MAX_HEIGHT) {
        wrapperRef.current.classList.add(handles['DynamicTab--Slider']);
      } else {
        wrapperRef.current.classList.remove(handles['DynamicTab--Slider']);
      }
    }
  }

  const moveForward = (event: any) => {
    const listContainer = getListContainer();
    const navigationLeft = document.querySelector(`.${handles['DynamicTab--NavigationLeft']}`);

    if (listContainer && navigationLeft && event?.currentTarget && !event.currentTarget.disabled) {
      const maxScroll =
        listContainer.scrollWidth - listContainer.offsetWidth;
      if (MOVEMENT_SIZE > listContainer.scrollLeft) {
        const TO = listContainer.scrollLeft + MOVEMENT_SIZE;
        listContainer.scrollTo(TO, 0);
        navigationLeft.disabled = false;
      } else {
        listContainer.scrollTo(maxScroll, 0);
        event.currentTarget.disabled = true;
      }
    }
  };

  const moveBack = (event: any) => {
    const listContainer = getListContainer();
    const navigationRight = document.querySelector(`.${handles['DynamicTab--NavigationRight']}`);

    if (listContainer && navigationRight && event?.currentTarget && !event.currentTarget.disabled) {
      if (MOVEMENT_SIZE < listContainer.scrollLeft) {
        const TO = listContainer.scrollLeft - MOVEMENT_SIZE;
        listContainer.scrollTo(TO, 0);
        navigationRight.disabled = false;
      } else {
        listContainer.scrollTo(0, 0);
        event.currentTarget.disabled = true;
      }
    }
  };

  return (
    <Fragment>
      {!!isActive && (
        <div className={handles['DynamicTab']} ref={wrapperRef}>
          {!!title && <h3 className="c-on-base db tc t-heading-3">{title}</h3>}
          {afterViewInit && (
            <LayoutContent
              query={query}
              tabs={tabs}
              defaultActiveTabId={defaultActiveTabId}
              onNavigationLeftClick={moveBack}
              onNavigationRightClick={moveForward} />
          )}
        </div>
      )}
    </Fragment>
  );
}

DynamicTab.schema = SCHEMA;

export default DynamicTab;
