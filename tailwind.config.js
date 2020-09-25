module.exports = (isProd) => ({
    prefix: '',
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
    },
    purge: {
      enabled: isProd,
      content: ['**/*.html', '**/*.ts']
    },
    theme: {
        truncate: {
          lines: {
              1: '1',
              2: '2',
              3: '3',
              5: '5',
              8: '8',
          }
      },
      plugins: [
        require('tailwindcss-truncate-multiline')(['responsive', 'hover']),
      ],
    }
});
