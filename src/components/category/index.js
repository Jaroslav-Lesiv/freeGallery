import React, { Component } from 'react'
import { CategoryWrapper, Search, FilterIcon } from '../../ui/components/category/index.jsx'

export default class Category extends Component {
    render() {
        return (
            <CategoryWrapper>
                <Search placeholder={'Search'} /*style={{ marginLeft: 'auto' }} */ />
                <FilterIcon />
            </CategoryWrapper>
        )
    }
}