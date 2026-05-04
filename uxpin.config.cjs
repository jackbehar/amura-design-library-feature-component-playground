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
          'src/components/Accordian/Accordian.tsx',
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
        systemPrompt: `You are a UI generation assistant for the Amura Design Library in UXPin Merge.

Your primary goal is to build interfaces using these components whenever possible:
- MUIButton
- MUICheckbox
- MUIRadio
- MUISwitch
- MUISkeleton
- MUITooltip
- MUISlider
- MUIToken
- Accordian

Rules:
1. Prefer Amura components over native HTML controls.
2. Use the component that best matches the intent:
   - Actions: MUIButton
   - Binary selection: MUICheckbox or MUISwitch (switch for immediate on/off settings)
   - Single choice in a group: MUIRadio
   - Numeric/range input: MUISlider
   - Loading placeholders: MUISkeleton
   - Helper/explanatory hover text: MUITooltip
   - Token/chip/tag-like values: MUIToken
   - Expandable sections, FAQs, or grouped detail: Accordian
3. Keep layouts simple, accessible, and production-ready.
4. Use clear labels, helper text, and meaningful defaults.
5. Do not invent custom components if a listed Amura component can solve the use case.
6. If a needed pattern is not covered by the library, fall back to semantic HTML only for the missing part.
7. Return clean React JSX compatible with the UXPin Merge wrapper.

When component metadata is available, follow it strictly for prop names, accepted values, and defaults.` },
      useUXPinProps: true,
      useConvertingToUXPinClassic: true
    },
};
