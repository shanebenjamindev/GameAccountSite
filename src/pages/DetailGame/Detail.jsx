import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WrapperSection } from '../../assets/style/commonStyle';
import data from '../../data.json';

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

    const renderGameAccount = () => {
        return game && game.account.length > 0
            ? game.account.map((account) => (
                <div key={account.id}>
                    <p>Name: {account.name}</p>
                    <p>Password: {account.password}</p>
                    <p>Price: {account.price}</p>
                </div>
            ))
            : <p>No account information available</p>;
    };


    return (
        <WrapperSection>
            <div className='container py-2 d-md-flex text-left'>
                <div className='col-md-4'>{renderGameDetail()}</div>
                <div className='col-md-8'>{renderGameAccount()}</div>
            </div>
        </WrapperSection>
    );
}
