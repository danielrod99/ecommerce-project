import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopItems } from '../../redux/shop/shop.selector';

import PreviewCollection from '../preview-collection/preview-collection.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    if (collections) {
        var cols = []
        var keys = Object.keys(collections);
        for (let i = 0; i < keys.length; i++) {
            cols.push(collections[keys[i]]);
        }
    } else {
        return <div></div>
    }
    return (
        <div className='collections-overview'>
            {
                cols.map(({ id, ...collProps }) => {
                    return <PreviewCollection key={id} {...collProps}></PreviewCollection>
                })
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
});

export default connect(mapStateToProps)(CollectionsOverview);