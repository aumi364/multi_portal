import React from 'react';
import { Layout, Menu } from 'antd';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

// import SidebarWrapper from '../../components/styled/sidebar';
import { appStore } from '../../store/app';
import { options } from '../../utils/constraints/sidbarOptions';
import SidebarWrapper from '../../components/styled/sidebar';

const { Item: MenuItem, SubMenu } = Menu;

const { Sider } = Layout;

export default function Sidebar() {
  const collapsed = appStore(state => state?.collapsed);
  console.log(collapsed);
  return (
    <SidebarWrapper>
      <Sider
        trigger={null}
        collapsible
        width={240}
        className="sidebar shadow"
        collapsed={collapsed}
        style={{
          backgroundColor: '#fff',
          overflowY: 'auto',
        }}
      >
        <img src={logo} className="sidebarLogo" alt="demo logo" />

        <Menu mode="inline">
          {options.map((singleOption, index) => {
            const { path, title, icon, children } = singleOption;

            return children ? (
              <SubMenu
                key={title}
                icon={icon}
                title={title}
                className="sidebar-menu"
              >
                {children.map(subMenuItem => (
                  <MenuItem key={subMenuItem.title} className="sidebar-menu">
                    <NavLink end to={subMenuItem.path}>
                      {subMenuItem.title}
                    </NavLink>
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem key={title} icon={icon} className="sidebar-menu">
                <NavLink end to={path}>
                  {title}
                </NavLink>
              </MenuItem>
            );
          })}
        </Menu>
      </Sider>
    </SidebarWrapper>
  );
}
