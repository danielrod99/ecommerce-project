import React from 'react';
import { Route } from "react-router-dom";

import  CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';
const ShopPage = ({match}) => {
    return (
        <div className='ShopPage'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
            <Route path={`${match.path}/:categoryId`} component={CategoryPage} ></Route>
        </div>
    )
}


export default ShopPage;