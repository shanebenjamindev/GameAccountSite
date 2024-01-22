import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { WrapperSection } from '../../assets/style/commonStyle';
import data from '../../data.json';
import ListAccountComponent from '../../components/ListAccountComponent/ListAccountComponent';

export default function Detail() {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const foundGame = data.find((item) => item.id === id);
        setGame(foundGame);
    }, [id]);

    const renderGameDetail = () => {
        if (game) {
            return (
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <img width={"100%"} src={game.imageUrl} alt={game.name} />
                            </td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>{game.name}</td>
                        </tr>
                        <tr>
                            <td>Manufacturer:</td>
                            <td>{game.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Category:</td>
                            <td>{game.category}</td>
                        </tr>
                    </tbody>
                </table>
            );
        } else {
            return <p>Game not found</p>;
        }
    };

    return (
        <WrapperSection>
            <div className='container py-2 d-md-flex text-left'>
                <div className='col-md-4'>{renderGameDetail()}</div>
                <div className='col-md-8'>
                    {game ? <ListAccountComponent game={game} /> : <>Hiện không có Account nào cho game này</>}
                </div>
            </div>
        </WrapperSection>
    );
}
