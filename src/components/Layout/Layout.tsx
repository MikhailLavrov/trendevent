import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import c from './Layout.module.css';
import { HeaderComponent } from '../Header/Header';
import { FooterComponent } from '../Footer/Footer';

const { Content } = Layout;

const FallbackComponent = () => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div className='container' style={styles}>
      <Spin size="large" aria-label="Loading..." />
    </div>
  )
}

export const LayoutComponent = () => {
  return (
    <Layout className={c.layout}>
      <HeaderComponent />
      <Content>
        <Suspense fallback={<FallbackComponent />}>
          <Outlet />
        </Suspense>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
