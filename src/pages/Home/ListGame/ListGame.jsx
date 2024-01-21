import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import data from '../../../data.json';
import ItemGameComponent from '../../../components/ItemGameComponent/ItemGameComponent';

const categories = ["Tất cả", "Global", "Japan", "China"];

const ListGame = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderGameByCategory = (category) => {
    return data
      .filter((game) => (category === "Tất cả" ? true : game.category === category))
      .map((game) => (
        <ItemGameComponent key={game.id} game={game} />
      ));
  };

  const renderTabContent = () => {
    return (
      <div className='row'>
        {renderGameByCategory(categories[value])}
      </div>
    );
  };

  return (
    <div className='container py-4'>
      <div className='text-left'>
        <h4>Danh sách game</h4>
      </div>
      <div className="">
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              {categories.map((category, index) => (
                <Tab key={index} label={category} />
              ))}
            </Tabs>
          </Box>
          {renderTabContent()}
        </Box>
      </div>
      <div>
        <button
          type='button'
          className='w-100 border-round rounded text-light p-2'
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          Xem tất cả
        </button>
      </div>
    </div>
  );
};

export default ListGame;
