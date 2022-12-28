import React from 'react';
// @ts-ignore
import { SliderLayout } from 'vtex.slider-layout';
// @ts-ignore
import { useCssHandles } from 'vtex.css-handles';
import { CSS_HANDLES } from '../DynamicTab/DynamicTabConstants';

import './ProductListContent.css';

const ProductListContent = () => {
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={handles['DynamicTab--ProductListContent']}>
      <SliderLayout
        infinite={true}
        usePagination={true}
        autoplay={{ timeout: 4000, stopOnHover: true }}
        itemsPerPage={{ desktop: 5, tablet: 3, phone: 2 }}
      />
    </div>
  );
};

export default ProductListContent;
