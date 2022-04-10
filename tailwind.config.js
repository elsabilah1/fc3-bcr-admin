module.exports = {
  content: ['./src/views/**/*.ejs'],
  theme: {
    extend: {
      colors: {
        darkblue05: '#091B6F',
        darkblue04: '#0D28A6',
        darkblue03: '#5E70C4',
        darkblue02: '#AEB7E1',
        darkblue01: '#CFD4ED',
        limegreen05: '#3D7B3F',
        limegreen04: '#5CB85F',
        limegreen03: '#92D094',
        limegreen02: '#C9E7CA',
        limegreen01: '#DEF1DF',
        neutral05: '#151515',
        neutral04: '#3C3C3C',
        neutral03: '#8A8A8A',
        neutral02: '#D0D0D0',
        neutral01: '#FFFFFF',
        danger: '#FA2C5A',
        warning: '#F9CC00',
        success: '#73CA5C',
        board: '#F4F5F7',
      },
      boxShadow: {
        low: '0px 0px 4px rgba(0, 0, 0, 0.15)',
        high: '0px 0px 10px rgba(0, 0, 0, 0.15)',
        head: '0px 2px 8px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
