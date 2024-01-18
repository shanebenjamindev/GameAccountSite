import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';

export default function ListGame(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='container py-5'>
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
          <div hidden={value !== 0}>
            Load game ở đây
            Tất cả
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
        </Box>
      </div>
    </div >
  );
}
