import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector'

import './category.styles.scss';

const CategoryPage = (props) => {
    const { title, items } = props.collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => <CollectionItem key={item.id} item={item}></CollectionItem>)}
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CategoryPage);