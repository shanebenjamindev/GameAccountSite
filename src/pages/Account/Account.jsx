import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from 'antd';
import { WrapperSection } from '../../assets/style/commonStyle';

export default function Account() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    gender: true,
    birthday: '1990-01-01',
    role: 'USER',
    avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [userAvatar, setUserAvatar] = useState({
    avatar: user.avatar,
    avatarPreview: '',
  });

  const [editedUser, setEditedUser] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    gender: user.gender,
    birthday: user.birthday,
    role: user.role,
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    gender: '',
    email: '',
    password: '',
    birthday: '',
  });

  const renderListGameByUser = () => {
    return (
      <>
        <table className="table text-center">
          <thead>
            <tr className="text-center">
              <th>Tên Game</th>
              <th>NSX</th>
              <th>Giá</th>
              <th>Ngày Mua</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test</td>
              <td>NSX</td>
              <td>20000</td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
    // Validate input fields here and update errors state
  };

  const handleSave = (e) => {
    // Perform save logic here
    setIsEditMode(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAvatarChange = (e) => {
    setUserAvatar({
      avatarPreview: URL.createObjectURL(e.target.files[0]),
      avatar: e.target.files[0],
    });
  };

  const handleDelete = (e) => {
    // Perform delete logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can add your form submission logic here
  };

  const [value, setValue] = React.useState(0);

  return (
    <WrapperSection>
      <div className='d-md-flex p-4 container'>
        <div className='col-md-3 py-2'>
          <div className='d-flex justify-content-center'>

            <img
              className=''
              width="200"
              height="200"
              alt=""
              src={userAvatar.avatarPreview || user.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            />

          </div>
          <div className='py-2'>{user.name}</div>
        </div>

        <div className="col-md-9">
          <Box>
            <Tabs
              value={value}
              className=""
              onChange={handleChange}
              aria-label=""
            >
              <Tab label="Thông Tin Khách Hàng" className="" value={0} />
              <Tab label="Đơn Hàng" value={1} />
            </Tabs>

            {/* Content for Tab 1 (User Information) */}
            {value === 0 && (
              <div className="p-4">
                <form className="" onSubmit={handleSubmit}>

                  <div className='d-flex justify-content-end'>
                    <div className='d-flex align-items-center'>
                      <Button
                        variant="contained"
                        color="warning"
                        className='mr-2'
                        onClick={() => setIsEditMode(!isEditMode)}
                      >
                        {isEditMode ? 'Close' : 'Edit'}
                      </Button>

                      <Button
                        variant="contained"
                        color="warning"
                        onClick={handleSave}
                        disabled={!isEditMode || Object.values(errors).some(error => error !== '')}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className=''>Email:</label>
                    <input
                      type='email'
                      name='email'
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      defaultValue={editedUser.email}

                      readOnly={!isEditMode} // Make the input editable only in edit mode
                      onChange={handleOnChange}
                    />
                    {errors.email && <div className="alert alert-danger error-message">{errors.email}</div>}

                  </div>

                  <div className='d-md-flex'>
                    <div className='col-lg-6 col-md-6 '>
                      <div>
                        <label className=''>Tên:</label>
                        <input
                          type='text'
                          name='name'
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          defaultValue={editedUser.name}
                          onChange={handleOnChange}
                          readOnly={!isEditMode} // Make the input editable only in edit mode
                        />
                        {errors.name && <div className="alert alert-danger error-message">{errors.name}</div>}
                      </div>
                      <div className=''>
                        <label className=''>Giới tính:</label>
                        <select
                          name='gender'
                          className='form-control'
                          disabled={!isEditMode} // Make the input editable only in edit mode
                          onChange={handleOnChange}
                          defaultValue={editedUser.gender}
                        >
                          <option className='' value={true}>Nam</option>
                          <option className='' value={false}>Nữ</option>
                        </select>
                      </div>

                      <div className="col-lg-6 col-md-6 d-flex my-4">
                        <label htmlFor="avatar" className='mx-2'>Avatar</label>
                        <input type='file' name="avatar" onChange={handleAvatarChange} />
                      </div>

                    </div>

                    <div className='col-lg-6 col-md-6 '>
                      <div className=''>
                        <label className=''>Số điện thoại:</label>
                        <input
                          type='tel'
                          name='phone'
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          defaultValue={editedUser.phone}
                          readOnly={!isEditMode} // Make the input editable only in edit mode
                          onChange={handleOnChange}
                        />
                        {errors.phone && <div className="alert alert-danger error-message">{errors.phone}</div>}
                      </div>
                      <div className=''>
                        <label className=''>Ngày sinh</label>
                        <input
                          type="date"
                          name="birthday"
                          id="birthday"
                          defaultValue={editedUser.birthday}
                          readOnly={!isEditMode}
                          className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                          required
                          onChange={handleOnChange}
                        />
                        {errors.birthday && <div className="alert alert-danger error-message">{errors.birthday}</div>}
                      </div>

                      <div className=''>
                        <label className=''>Chức vụ:</label>
                        {(user.role === "ADMIN") ?
                          <select
                            name='role'
                            className='form-control'
                            disabled={!isEditMode} // Make the input editable only in edit mode
                            onChange={handleOnChange}
                            defaultValue={editedUser.gender}
                          >
                            <option className='' value="ADMIN">ADMIN</option>
                            <option className='' value="USER">USER</option>
                          </select>
                          :
                          <input
                            type="text"
                            name="role"
                            id="role"
                            className='form-control'
                            value={user.role}
                            readOnly
                          />
                        }
                      </div>
                    </div>
                  </div>

                </form>
              </div>
            )}

            {/* Content for Tab 2 (Room) */}
            {value === 1 && (
              <div>
                <div className="user__ListRoom">
                  {null ? (
                    <div className="my-3">
                      <div className="text-right my-2">
                        <button className="btn__Primary">Thêm phòng</button>
                      </div>
                      <div className="p-2 table-responsive">
                        <>
                          {renderListGameByUser()}
                        </>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center noti__NotFound">
                      <div>
                        <h3 className="main__Title">Not Found</h3>
                        <div className="main__">
                          Đơn hàng trống
                        </div>
                        <button>Hãy đặt thêm tại đây</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Box>
        </div>

      </div>
    </WrapperSection>
  );
}
