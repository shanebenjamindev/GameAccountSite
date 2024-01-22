import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../data.json';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import ListAccountComponent from '../../components/ListAccountComponent/ListAccountComponent';

const Container = styled.div`
  padding: 100px 0;
  width: 75%;
  margin: auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const DetailsContainer = styled.div`
  margin-top: 20px;
`;

const DetailsItem = styled.div`
  margin-bottom: 10px;
`;

const ImportantNote = styled.div`
  margin-top: 20px;
`;

const RecommendedGamesContainer = styled.div`
  margin-top: 20px;
`;

export default function DetailAccount() {
  const { id } = useParams();

  const renderRecommend = () => {
    const game = data.find((item) =>
      item.account.some((account) => account.id === id)
    );

    const otherGames = data.filter((item) => item !== game);
    const randomIndex = Math.floor(Math.random() * otherGames.length);
    const randomGame = otherGames[randomIndex];

    return <ListAccountComponent game={randomGame} />;
  };

  const renderAccountDetail = () => {
    const game = data.find((item) =>
      item.account.some((account) => account.id === id)
    );

    if (!game) {
      return <p>No account found with id: {id}</p>;
    }

    const accountDetail = game.account.find(
      (account) => account.id === id
    );

    return (
      <Container>
        <Title>{game.name}</Title>
        <div className='row'>
          <div className='col-md-6'>
            <Image src={accountDetail.imgUrl} alt='' />
          </div>
          <div className='col-md-6'>
            <DetailsContainer>
              <DetailsItem>ID: {accountDetail.id}</DetailsItem>
              <DetailsItem>Price: {accountDetail.price}</DetailsItem>
              <div>
                <ButtonComponent
                  variant="primary-outlined"
                  text="Thêm vào giỏ hàng"
                />
                <ButtonComponent variant="primary-outlined" text="Mua ngay" />
              </div>
            </DetailsContainer>
          </div>
        </div>
        <DetailsContainer>
          <h4>Chi tiết tài khoản</h4>
          <p>{accountDetail.descriptions}</p>
        </DetailsContainer>
        <DetailsContainer>
          <h4>Lưu ý quan trọng</h4>
          <ImportantNote>
            Vào được acc vui lòng bind lại mã mới vì mật khẩu chỉ dùng được 1 lần
            chuyển đổi
          </ImportantNote>
        </DetailsContainer>
        <DetailsContainer>
          <h4>Có thể bạn quan tâm</h4>
          <RecommendedGamesContainer>{renderRecommend()}</RecommendedGamesContainer>
        </DetailsContainer>
      </Container>
    );
  };

  return <div>{renderAccountDetail()}</div>;
}
