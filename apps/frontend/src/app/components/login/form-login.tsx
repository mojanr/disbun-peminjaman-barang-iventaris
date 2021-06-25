import React, { Fragment, memo, useEffect } from 'react'
import styled from 'styled-components';
import { Card, Form, Input, Checkbox, Button, Row, Col, Typography, Alert } from 'antd'
import { FormItemComponent } from '../common'
import { UserOutlined, LockOutlined, } from '@ant-design/icons'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import { Api } from '../../api/api';
import { useLocalStorageState, useRequest } from 'ahooks';
import { AuthApi } from '../../api/auth.api';
import { Api } from '../../api/api';
import { useHistory } from 'react-router-dom';

// const { Title } = Typography;

// const StyledCard = styled(Card)`
//   &&& {
//     border-radius: 6px;
//   }
// `

// const StyledTitle = styled(Title)`
//   &&& {
//     /* color: white; */
//     text-align: center;
//   }
// `


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

  const history = useHistory()
  const [token, setToken] = useLocalStorageState('token')

  const { run, data, loading, error } = useRequest(Api.AuthApi.login, {
    manual: true,
    throwOnError: true,
    // onSuccess: (data) => {
    //   console.log('data', data)
    //   // Promise.resolve(data)
    // },
    // onError: (errors) => {
    //   console.log('err', errors)
    // }
  })

  // effect response data
  useEffect(() => {
    if (data) {
      // console.log(data.data.message.token_ews)
      setToken(data.data.message.token_ews || '')
    }
  }, [data])

  const { handleSubmit, control, formState: { errors } } = useForm<IFormLogin>({
    resolver: yupResolver(FormLoginSchema),
    mode: 'onChange'
  })

  const onSubmit = async (formData: IFormLogin) => {
    try {
      await run(formData.username, formData.password)
      history.push('/dashboard/peminjaman')
    } catch (error) {
      console.log(error)
    }
  }

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

        <Form.Item>
          <Button type="primary" htmlType="submit" block className="login-form-button" loading={loading}>
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>

        {/* <Form.Item>
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
        </Form.Item> */}

        <p> {!loading && error && (<Alert message={error?.message} type="error" showIcon />)} </p>
      </Form>
    </Fragment>
  )
}

export default memo(FormLogin)
