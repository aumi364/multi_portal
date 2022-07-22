import { tint } from 'polished';
import styled from '@emotion/styled';

const SidebarWrapper = styled.div`
  .sidebar {
    z-index: 1000;
    width: 280px;
    flex: 0 0 280px;
    height: 100%;
    transition: all 0.33s;

    @media only screen and (max-width: 767px) {
      display: none;
    }

    .ant-tooltip-inner {
      background-color: white !important;
    }

    &.ant-layout-sider-collapsed {
      .sidebarLogo {
        max-width: 50px;
      }

      @media only screen and (max-width: 767px) {
        display: block;
      }
    }

    .sidebarLogo {
      transition: all 0.33s;
      display: flex;
      width: 100%;
      margin: auto;
      padding: 2.3rem 0 3rem 0;
      max-width: 80px;
    }

    a {
      display: flex;
      justify-content: start;
      align-items: center;
      height: 100%;

      h5 {
        font-weight: 400;
        transition: all 0.3s ease;
      }

      svg {
        margin-right: 2rem;
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
`;

export default SidebarWrapper;
