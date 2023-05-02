import {
    AlipayCircleOutlined,
    LockOutlined,
    MobileOutlined,
    RedEnvelopeFilled,
    TaobaoCircleOutlined,
    UserOutlined,
    WeiboCircleOutlined,
  } from '@ant-design/icons';
  import {
    LoginForm,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
    ProConfigProvider,
  } from '@ant-design/pro-components';
  import { message, Space, Tabs } from 'antd';
  import type { CSSProperties } from 'react';
  import { useState } from 'react';
  
  type LoginType = 'register' | 'login';
  
  const iconStyles: CSSProperties = {
    marginInlineStart: '16px',
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  };
  
  export default () => {
    const [loginType, setLoginType] = useState<LoginType>('login');
    return (
      <ProConfigProvider hashed={false}>
        <div style={{ backgroundColor: 'white' }}>
          <LoginForm
            title="Voyageur"
          >
            <Tabs
              centered
              activeKey={loginType}
              onChange={(activeKey) => setLoginType(activeKey as LoginType)}
            >
              <Tabs.TabPane key={'register'} tab={'register'} />
              <Tabs.TabPane key={'login'} tab={'login'} />
            </Tabs>
            {loginType === 'register' && (
              <>
                <ProFormText
                  name="lastname"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={'prefixIcon'} />,
                  }}
                  placeholder={"Nom"}
                  rules={[
                    {
                      required: true,
                      message: 'Entrez votre nom',
                    },
                  ]}
                />
                <ProFormText
                  name="firstname"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={'prefixIcon'} />,
                  }}
                  placeholder={"Prénom"}
                  rules={[
                    {
                      required: true,
                      message: 'Entrez votre prénom',
                    },
                  ]}
                />
                <ProFormText
                  name="email"
                  fieldProps={{
                    size: 'large',
                    prefix: <RedEnvelopeFilled className={'prefixIcon'} />,
                  }}
                  placeholder={"Email"}
                  rules={[
                    {
                      required: true,
                      message: 'Entrez votre email',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={'prefixIcon'} />,
                  }}
                  placeholder={'Mot de passe'}
                  rules={[
                    {
                      required: true,
                      message: 'Entrez une mot de passe valid',
                    },
                  ]}
                />
              </>
            )}
            {loginType === 'login' && (
              <>
                <ProFormText
                    name="email"
                  fieldProps={{
                    size: 'large',
                    prefix: <MobileOutlined className={'prefixIcon'} />,
                  }}
                  placeholder={'Email'}
                  rules={[
                    {
                      required: true,
                      message: 'Entrez votre email',
                    }
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={'prefixIcon'} />,
                  }}
                  placeholder={'Mot de passe'}
                  rules={[
                    {
                      required: true,
                      message: 'Entrez une mot de passe valid',
                    },
                  ]}
                />
               
              </>
            )}
          </LoginForm>
        </div>
      </ProConfigProvider>
    );
  };