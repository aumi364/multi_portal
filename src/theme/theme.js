export const mq = (breakpoint, screen) => {
  return screen === 'up'
    ? `@media (min-width: ${breakpoint}px)`
    : `@media (max-width: ${breakpoint}px)`;
};
export const theme = {
  neutral: {
    100: '#ffffff',
    200: '#f2f2f6',
    300: '#f2f2f8',
    350: '#E6E8F0',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  breakpoint: {
    xs: {
      up: mq(480, 'up'),
      down: mq(480, 'down'),
    },
    sm: {
      up: mq(768, 'up'),
      down: mq(768, 'down'),
    },
    md: {
      up: mq(992, 'up'),
      down: mq(992, 'down'),
    },
    lg: {
      up: mq(1200, 'up'),
      down: mq(1200, 'down'),
    },
    xl: {
      up: mq(1500, 'up'),
      down: mq(1500, 'down'),
    },
    xxl: {
      up: mq(1920, 'up'),
      down: mq(1920, 'down'),
    },
  },

  primary: {
    main: '#007C98',
    light: '#828DF8',
    dark: '#024e5f',
    contrastText: '#FFFFFF',
    transparentLight: 'rgba(91,198,210,0.2)',
    transparentLighter: 'rgba(224,248,255,0.2)',
    transparentDark: 'rgba(8,191,215,0.5)',
  },
  secondary: {
    main: '#19857b',
    light: '#3FC79A',
    dark: '#0B815A',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#14B8A6',
    light: '#43C6B7',
    dark: '#0E8074',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#2196F3',
    light: '#64B6F7',
    dark: '#0B79D0',
    contrastText: '#FFFFFF',
  },

  warning: {
    main: '#FFB020',
    light: '#FFBF4C',
    dark: '#B27B16',
    contrastText: '#FFFFFF',
  },

  error: {
    main: '#D14343',
    light: '#DA6868',
    dark: '#922E2E',
    contrastText: '#FFFFFF',
  },
  text: {
    primary: '#121828',
    secondary: '#65748B',
    disabled: 'rgba(55, 65, 81, 0.48)',
  },
  shadow: [
    'none',
    '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
    '0px 1px 2px rgba(100, 116, 139, 0.12)',
    '0px 1px 4px rgba(100, 116, 139, 0.12)',
    '0px 1px 5px rgba(100, 116, 139, 0.12)',
    '0px 1px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 6px rgba(100, 116, 139, 0.12)',
    '0px 3px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
    '0px 5px 12px rgba(100, 116, 139, 0.12)',
    '0px 5px 14px rgba(100, 116, 139, 0.12)',
    '0px 5px 15px rgba(100, 116, 139, 0.12)',
    '0px 6px 15px rgba(100, 116, 139, 0.12)',
    '0px 7px 15px rgba(100, 116, 139, 0.12)',
    '0px 8px 15px rgba(100, 116, 139, 0.12)',
    '0px 9px 15px rgba(100, 116, 139, 0.12)',
    '0px 10px 15px rgba(100, 116, 139, 0.12)',
    '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
    '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
  ],
};
