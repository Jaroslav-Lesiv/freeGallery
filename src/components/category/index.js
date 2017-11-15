import React, { Component } from 'react'
import { CategoryWrapper, Search, FilterIcon } from '../../ui/components/category/index.jsx'
import {
    ModalInput,
  } from '../../ui/components/modal/index.jsx'
export default class Category extends Component {
    render() {
        return (
            <CategoryWrapper>
                <ModalInput placeholder={'Search'} style={{ marginLeft: 'auto' }} />
                <FilterIcon />
            </CategoryWrapper>
        )
    }
}