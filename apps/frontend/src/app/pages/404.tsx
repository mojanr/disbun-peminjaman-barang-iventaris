import { Result, Button } from 'antd'
import React from 'react'

const NotFound404 = () => {
  return (
    <div>
      <Result
        // status="404"
        title="404"
        subTitle="Halaman tidak ditemukan"
        // extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  )
}

export default NotFound404
