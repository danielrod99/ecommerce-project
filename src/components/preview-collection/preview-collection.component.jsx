import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './preview.styles.scss';

const PreviewCollection = ({title,items}) => {
    return <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items.filter((itm,indx)=>{return indx<4}).map(({id,...otherProps})=>{
                return <CollectionItem key={id} {...otherProps} ></CollectionItem>
            })
        }
        </div>
    </div>
}
export default PreviewCollection;