import create from 'zustand';

export const appStore = create(set => ({
  collapsed: false,
  openDrawer: false,
  toggleCollapsed: () => set(state => ({ collapsed: !state.collapsed })),
  toggleOpenDrawer: () => set(state => ({ openDrawer: !state.openDrawer })),
}));
