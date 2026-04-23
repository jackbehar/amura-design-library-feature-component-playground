const path = require('path');
const { pathToFileURL } = require('url');

/**
 * UXPin Merge library configuration.
 * @see https://www.uxpin.com/docs/merge/config-file/
 *
 * Use .cjs so Node can require() this file while the repo uses "type": "module".
 */
module.exports = {
  name: 'Amura Design Library',
  components: {
    // Same as index.html — Merge does not use index.html, so fonts must be injected here.
    pageHeadTags: [
      '<link href="https://fonts.cdnfonts.com/css/graphik" rel="stylesheet" />',
      '<link rel="preconnect" href="https://fonts.googleapis.com" />',
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
      '<link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600;700&display=swap" rel="stylesheet" />',
    ],
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
  settings: {
      useAI: {
        name: "Amura Design Library",
        documentationUrl: "",
        systemPrompt: "" },
      useUXPinProps: true,
      useConvertingToUXPinClassic: true
    },
};
