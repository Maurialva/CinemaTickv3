module.exports = {
  purge: [
    './src/**/*.svelte',
  ],
  variants: {},
  theme: {
    colors:
    {
      blue:{
        greeni:'#2a727a'
      },

    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
    ,
    extend: {
      backgroundImage: theme => ({

        'bggray': "https://i.ibb.co/b2VvvCh/background.jpg",
        borderRadius: ['hover', 'focus'],
    })
  },
  plugins: [],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
}}
