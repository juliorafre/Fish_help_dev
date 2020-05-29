module.exports = {
  purge: {
    enabled: false,
    content: ['./index.html'],
  },
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      colors: {
        'fish-background-lightGray': '#F6F7FB',
        'fish-text-primary': '#001567',
        'fish-text-small': '#828282',
        'fish-button-default': '#EFEFEF',
        'fish-button-selected': '#22F2FF',
        'fish-accent-cian': '#79FFE1',
        'fish-accent-blue': '#5850EC',
        'fish-accent-red': '#FF0080',
        'fish-accent-green': '#3DF165',
      },
      spacing: {
        imageFixed: '0.01rem',
        '28': '7rem',
        '52': '15rem',
        '72': '18rem',
        fisTileWMAx: '18.75rem',
        fishHTileDefault: '6.6875rem',
        fishTileWMin: '14.75rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
