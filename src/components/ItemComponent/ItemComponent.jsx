import React from 'react'
import './style.js'
import { WrapperItemComponent } from './style.js';
export default function ItemComponent(props) {
    const { item } = props;
console.log(item.imageUrl);
    return (
        <WrapperItemComponent>
            <img src={item.imageUrl} />
            {item.name}
        </WrapperItemComponent>
    )
}
