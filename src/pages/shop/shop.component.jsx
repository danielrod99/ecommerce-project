import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectShopItems } from '../../redux/shop/shop.selector.';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

const ShopPage = ({ collections }) => {
    return (
        <div className='ShopPage'>
            {
                collections.map(({ id, ...collProps }) => {
                    return <PreviewCollection key={id} {...collProps}></PreviewCollection>
                })
            }
        </div>
    )
}
const mapStateToProps= createStructuredSelector({
    collections: selectShopItems
})

export default connect(mapStateToProps)(ShopPage);