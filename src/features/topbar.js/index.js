import React from 'react';
import { Layout, Row, Col } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import UserSettings from '../../components/useSettings';
import TopbarWrapper from '../../components/styled/topbar';
import { appStore } from '../../store/app';

const { Header } = Layout;

export default function Topbar() {
  const { toggleCollapsed, collapsed, openDrawer, toggleOpenDrawer } = appStore(
    state => state,
  );

  const handleToggle = React.useCallback(() => toggleCollapsed());
  const isCollapsed = collapsed && !openDrawer;

  return (
    <TopbarWrapper>
      <Header
        className={
          isCollapsed ? 'header shadow-long collapsed' : 'header shadow-long'
        }
      >
        <Row
          style={{ height: '100%' }}
          type="flex"
          justify="space-between"
          align="middle"
        >
          <Col>
            {isCollapsed ? (
              <MenuUnfoldOutlined
                style={{ fontSize: '2rem' }}
                onClick={handleToggle}
              />
            ) : (
              <MenuFoldOutlined
                style={{ fontSize: '2rem' }}
                onClick={handleToggle}
              />
            )}
          </Col>
          <Col>
            <Row
              className="header-right"
              type="flex"
              justify="end"
              align="middle"
              gutter={[25, 0]}
            >
              {/* <Col>
                <TopBarLangSwitch />
              </Col> */}
              <Col>
                <UserSettings />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </TopbarWrapper>
  );
}
