import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapperAccountComponent = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Card = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    transition: transform 0.2s ease-in-out;
    height: 100%;
    width: 100%;
    &:hover {
        transform: scale(1.05);
    }
`;

const Image = styled.img`
    width: 100%;
    border-radius: 8px 8px 0 0;
`;

const GameName = styled.p`
    margin: 10px 0;
    font-weight: bold;
`;

const Price = styled.p`
    margin: 0;
    font-size: 18px;
`;

export default function ListAccountComponent(props) {
    const { game } = props;

    const renderGameAccount = () => {
        return game?.account.map((account, index) => (
            <Link
                className='col-md-3'
                to={`/detail-account/${account.id}`}
                key={index}>
                <Card>
                    <Image src={account.imgUrl} alt='' />
                    <GameName>{game.name}</GameName>
                    <Price>Price: {account.price}</Price>
                </Card>
            </Link>
        ));
    };

    return (
        <div className='row'>
            {renderGameAccount()}
        </div>
    );
}
