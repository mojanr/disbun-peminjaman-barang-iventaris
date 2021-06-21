import React, { Fragment, memo } from 'react'
import { Select, Space, Button, Typography } from 'antd'
import { useModalPeminjamanBaru } from './modal-peminjaman-baru';

const { Option } = Select;

const FormPeminjamanBaru = () => {

  const modalPeminjamanBaru = useModalPeminjamanBaru()

  const closeModalPeminjamanBaru = () => modalPeminjamanBaru.close()

  return (
    <Fragment>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        // onChange={onChange}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSearch={onSearch}
        // filterOption={(input, option) =>
        //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>

      <div style={{ paddingTop: 24, textAlign: 'right' }}>
        <Space>
          <Button type="default" onClick={closeModalPeminjamanBaru}> Batal </Button>
          <Button type="primary"> Simpan </Button>
        </Space>
      </div>
    </Fragment>
  )
}

export default memo(FormPeminjamanBaru)
