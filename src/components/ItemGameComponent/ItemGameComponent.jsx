import React from 'react'
import { ItemGameContainer, WrapperItemGameComponent } from './style';
import { Link } from 'react-router-dom';
import { WrapperLink } from '../../assets/style/commonStyle';

export default function ItemGameComponent(props) {
    const { game } = props;
    return (
        <WrapperItemGameComponent className='col-md-4 my-2 '>
            <WrapperLink to={`/detail/${game.id}`} >
                <ItemGameContainer className='p-2 d-md-flex w-100' style={{ border: "2px solid var(--primary-fade)" }}>
                    <div className='col-md-8 text-left'>
                        <h5>
                            {game.name}
                        </h5>
                        <div>
                            {game.manufacturer}
                        </div>
                    </div>
                    <img src={game.imageUrl} className='col-md-4' alt='' />
                </ItemGameContainer>
            </WrapperLink >
        </WrapperItemGameComponent >
    )
}
