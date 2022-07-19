import React from 'react';
import { Layout } from 'antd';
// import Topbar from 'features/Topbar';
import Sidebar from '../sidebar/sidebar';
import { DashboardContainer } from '../../components/styled/dashboard';
import DashboardRouter from './dashboardRouter';

const { Content } = Layout;
const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    padding: '90px 0 0',
    flexShrink: '0',
    position: 'relative',
  },
};

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Layout style={{ height: '100vh' }}>
        {/*<Topbar />*/}
        <Layout style={styles.layout}>
          <Sidebar />
          <Layout className="main-content" style={{ height: '100vh' }}>
            <Content style={styles.content}>
              <DashboardRouter />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
}
