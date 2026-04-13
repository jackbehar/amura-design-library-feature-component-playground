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
    settings: {
      useAI: { name: 'Cloudscape Design System (Amazon)',
        documentationUrl: 'https://cloudscape.design/components/',
        systemPrompt: `
        All Component Rules:
        - Do not include props that are functions or objects containing functions.
        - Only use primitive props (string, number, boolean, null, undefined) and plain objects or arrays without any functions.
        - Avoid inline arrow functions, callbacks, or event handlers in JSX.
        Container Component Rules:
        - props header and footer must always be defined.
        - If no specific content is needed for header or footer, use an empty string ("").
        - Do not omit header or footer under any circumstance.
        Pagination Component Rules:
        - omit ariaLabels property
        Cards Component Rules:
        - completely omit  cardDefinition property, it's generated automatically based on items property
        Table Component Rules:
        - columnDefinitions must be an array of objects:
          {
            id: string;
            header: string;
            sortingField?: string;
            isRowHeader?: boolean;
          }
        
        - items must be an array like:
          {
            name: string;
            alt?: string;
            description?: string;
            type?: string;
            size?: string;
          }
        - Do not pass functions in columnDefinitions (like cell or renderItem).
        Wizard Component Rules:
        - In the \`i18nStrings\` object, completely omit any properties that are functions, specifically:
          - stepNumberLabel
          - collapsedStepsLabel
          - skipToButtonLabel
        - Do not include these properties at all in the generated code, even as strings.
        - Only include the other properties as usual.
         Board Component Rules:
         - items must be an array of objects:
          {
            id: string;
            rowSpan?: number;
            columnSpan?: number;
            data: {
                title: string;
                content: React.ReactElement;
            };
          }
          - you can only include empty and items properties at all in the generated code
      ` },
      useUXPinProps: true,
      useConvertingToUXPinClassic: true
    },
  },
};
