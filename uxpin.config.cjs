/**
 * UXPin Merge library configuration.
 * @see https://www.uxpin.com/docs/merge/config-file/
 *
 * Use .cjs so Node can require() this file while the repo uses "type": "module".
 */
module.exports = {
  name: 'Amura Design Library',
  components: {
    categories: [
      {
        name: 'Components',
        include: [
          'src/components/MUIButton/MUIButton.tsx',
          'src/components/MUICheckbox/MUICheckbox.tsx',
          'src/components/MUIRadio/MUIRadio.tsx',
          'src/components/MUISwitch/MUISwitch.tsx',
          'src/components/MUISkeleton/MUISkeleton.tsx',
          'src/components/MUITooltip/MUITooltip.tsx',
          'src/components/MUISlider/MUISlider.tsx',
          'src/components/MUIToken/MUIToken.tsx',
        ],
      },
    ],
    wrapper: 'src/uxpin/UXPinWrapper.tsx',
    webpackConfig: 'webpack.uxpin.config.cjs',
  },
};
