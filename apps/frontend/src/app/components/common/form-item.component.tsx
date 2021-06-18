import React, { FC, memo, ReactNode } from 'react'
import { Form, Input, Typography } from 'antd'


interface IFieldItemComponent {
  name: string
  label?: string
  errors: any
  children?: string | ReactNode
  isRequired?: boolean
  // onReset?: () => void
}

const FormItemComponent: FC<IFieldItemComponent> = (props) => {
  return (
    <Form.Item
      label={props.label && <Typography.Text strong> {props.isRequired && <span style={{ color: 'red' }}>*</span>} {props.label} </Typography.Text>}
      validateStatus={props.errors[props.name]?.message && 'error'}
      help={props.errors[props.name]?.message}
    >
      {props.children}
    </Form.Item>
  )
}

export default memo(FormItemComponent)
