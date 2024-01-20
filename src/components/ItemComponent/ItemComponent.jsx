import React from 'react';
import './style.js';
import { WrapperItem, WrapperItemComponent } from './style.js';
import { WrapperLink } from '../../assets/style/commonStyle.js';
import { Col } from 'antd';

export default function ItemComponent(props) {
    const { item } = props;

    return (
        <WrapperItemComponent >
            <WrapperLink to={`/detail/${item.id}`} >
                <WrapperItem className=' align-items-center'>
                    <Col span={3} className=''>
                        <img alt='' src={item.imageUrl} />
                    </Col>
                    <Col span={21} className="text-left">
                        {item.name}
                    </Col>
                </WrapperItem>
            </WrapperLink>
        </WrapperItemComponent>
    )
}
