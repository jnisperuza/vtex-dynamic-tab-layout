import React, { Fragment } from "react";
import { useQuery } from 'react-apollo';
import { useCssHandles } from "vtex.css-handles";
// @ts-ignore
import ProductSummaryListWithoutQuery from 'vtex.product-summary/ProductSummaryListWithoutQuery';
import { CSS_HANDLES } from "./DynamicTabConstants";
import getCollection from '../../graphql/getCollection.gql';
import ProductListContent from "../ProductListContent/ProductListContent";

interface ConditionalTabContentProps {
    query: any,
    tab: Tab;
}

function ConditionalTabContent(props: ConditionalTabContentProps) {
    const handles = useCssHandles(CSS_HANDLES);
    const {
        query,
        tab,
    } = props;

    if (query?.__siteEditor) {
        return <Fragment />
    }

    if (tab?.collectionId) {
        const { data, loading, error } = useQuery(getCollection, {
            variables: {
                collectionId: tab.collectionId,
            },
            ssr: false,
        });

        if (loading) {
            return (
                <div className={handles['DynamicTab--Loading']}>
                    <div className={handles['DynamicTab--Preloader']}></div>
                </div>
            );
        }

        if (error) {
            return (
                <div className={handles['DynamicTab--Error']}>
                    <span>Error!</span>
                </div>
            );
        }

        return (
            <ProductSummaryListWithoutQuery
                products={data?.products || []}
            >
                <ProductListContent />
            </ProductSummaryListWithoutQuery>
        )

    } else {
        return (
            <div className={handles['DynamicTab--Collection-Not-Found']}>
                <span>Collection not found</span>
            </div>
        );
    }
}

export default ConditionalTabContent;