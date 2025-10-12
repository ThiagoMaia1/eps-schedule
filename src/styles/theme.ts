export const theme = {
  colors: {
    // Primary colors
    primary: '#3730a3',
    primaryHover: '#312e81',
    primaryLight: '#eef2ff',
    primaryBorder: '#c7d2fe',

    // Session states
    selected: '#fff7ed',
    selectedBorder: '#fdba74',
    eps: '#ebf5ff',
    epsBorder: '#93c5fd',

    // General event colors
    generalEventBg: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
    generalEventBorder: '#4caf50',
    specialEventBg: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
    specialEventBorder: '#9c27b0',

    // Tags and badges
    invitedGuestBg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    panelDiscussionBg: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
    moderatorBg: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
    moderatorAccent: '#ffd700',
    moderatorAccentHover: '#ffed4e',

    // Text colors
    textPrimary: '#000',
    textSecondary: '#374151',
    textTertiary: '#4b5563',
    textQuaternary: '#6b7280',
    textLight: '#b0b0b0',
    textWhite: '#fff',
    textGreen: '#e8f5e9',
    textGreenLight: '#c8e6c9',

    // Background colors
    bgWhite: '#fff',
    bgGray: '#f6f7f9',
    bgLightGray: '#fcfcfd',
    bgEmptyRow: '#fef2f2',
    bgEmptyCell: 'rgb(255, 237, 237)',

    // Border colors
    borderPrimary: '#e5e7eb',
    borderSecondary: '#d1d5db',
    borderLight: '#f3f4f6',
    borderGray: 'lightgray',

    // Warning/Error colors
    error: '#dc2626',
    errorBg: '#fee2e2',
    errorBorder: '#fca5a5',
    errorLight: 'rgb(237, 237, 237)',
    errorDark: 'rgb(228, 228, 228)',

    // Highlight colors
    highlight: '#fef08a',
    highlightText: '#854d0e',
    highlightYellow: '#ffeb3b',

    // Shadow colors
    shadowLight: 'rgba(0, 0, 0, 0.05)',
    shadowMedium: 'rgba(0, 0, 0, 0.15)',
    shadowDark: 'rgba(0, 0, 0, 0.3)',
    shadowError: 'rgba(220, 38, 38, 0.15)',
    shadowInvitedGuest: 'rgba(139, 92, 246, 0.3)',
    shadowPanelDiscussion: 'rgba(234, 179, 8, 0.3)',
    backdropBg: 'rgba(0, 0, 0, 0.3)',
  },

  spacing: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '10px',
    xl: '12px',
    xxl: '16px',
    xxxl: '20px',
    xxxxl: '24px',
  },

  borderRadius: {
    sm: '3px',
    md: '6px',
    lg: '8px',
    xl: '10px',
    xxl: '12px',
    round: '999px',
  },

  transitions: {
    fast: '0.2s',
    medium: '0.3s',
    slow: '0.5s',
    easeOut: 'ease-out',
    ease: 'ease',
  },

  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 2px 4px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.3)',
    xl: '0 4px 12px rgba(0, 0, 0, 0.15)',
    card: '2px 0 4px rgba(0, 0, 0, 0.05)',
    insetSelected: 'inset 0 0 0 1px #fdba74',
  },

  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },

  zIndex: {
    background: 1,
    generalEvent: 30,
    moderatorBlock: 40,
    session: 50,
    shiftTrackHighlight: 400,
    header: 500,
    timeHeader: 501,
    timeColumn: 550,
    dayHeader: 600,
    sessionHover: 700,
    tooltip: 999,
    modal: 1000,
  },

  dimensions: {
    colWidth: '280px',
    colWidthMobile: 'min(320px, calc(100vw - 70px))',
    timeColWidth: '65px',
    timeColWidthMobile: '50px',
    linearColWidth: '640px',
  },

  fontSizes: {
    xs: '0.7em',
    sm: '0.75em',
    md: '0.85em',
    base: '0.9em',
    lg: '0.92em',
    xl: '1em',
    xxl: '1.1em',
    xxxl: '1.5rem',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const

export type Theme = typeof theme
