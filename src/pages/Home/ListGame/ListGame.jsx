import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import data from '../../../data.json';
import ItemGameComponent from '../../../components/ItemGameComponent/ItemGameComponent';
export default function ListGame(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderAllGame = () => {
    return data.map((game, index) => {
      return <ItemGameComponent key={index} game={game} />
    })
  }
  return (
    <div className='container py-4'>
      <div className='text-left'>
        <h4>Danh sách game</h4>
      </div>
      <div className="container">

        <Box>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Tất cả" />
              <Tab label="Global/Asia/Sea" />
              <Tab label="Japan/Nhật Bản" />
              <Tab label="Trung Quốc/Sever khác" />
            </Tabs>
          </Box>
          <div className='py-2'>
            <div hidden={value !== 0}>
              <div className='row'>
                {renderAllGame()}
              </div>
            </div>
            <div hidden={value !== 1}>
              TG
            </div>
            <div hidden={value !== 2}>
              Nhật
            </div>
            <div hidden={value !== 3}>
              Trung
            </div>
          </div>
        </Box>
      </div>
      <div><button type='button' className='w-100 border-round rounded text-light p-2' style={{ backgroundColor: "var(--primary-color)" }}>Xem tất cả</button></div>
    </div >
  );
}
