import React, { Fragment, memo } from 'react'
import styled from 'styled-components';
import { Card, Form, Input, Checkbox, Button, Row, Col, Typography } from 'antd'
import { FormItemComponent } from '../common'
import { UserOutlined, LockOutlined, } from '@ant-design/icons'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const { Title } = Typography;

const StyledCard = styled(Card)`
  &&& {
    border-radius: 6px;
  }
`

const StyledTitle = styled(Title)`
  &&& {
    /* color: white; */
    text-align: center;
  }
`


interface IFormLogin {
  username: string
  password: string
}

// form login schema
const FormLoginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

const FormLogin = () => {

  const { handleSubmit, control, formState: { errors } } = useForm<IFormLogin>({
    resolver: yupResolver(FormLoginSchema),
    mode: 'onChange'
  })

  const onSubmit = (data: IFormLogin) => console.log(data)

  return (
    <Fragment>
      {/* <StyledTitle level={3}> Login </StyledTitle> */}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        onSubmitCapture={handleSubmit(onSubmit)}
      >
        <FormItemComponent
          name="username"
          errors={errors}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) =>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                {...field}
              />
            }
          />
        </FormItemComponent>

        <FormItemComponent
          name="password"
          errors={errors}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) =>
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                {...field}
              />
            }
          />
        </FormItemComponent>


        {/* <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item> */}


        <Form.Item>
          <Button type="primary" htmlType="submit" block className="login-form-button">
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>

        <Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <a className="login-form-forgot" href="">
                Forgot password?
              </a>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Fragment>
  )
}

export default memo(FormLogin)
