import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RadioGroup, FormControlLabel, Box } from '@mui/material';

import CreateCustomTheme from './theme';
import { MUIButton, MUICheckbox, MUIRadio, MUISwitch, MUISkeleton, MUITooltip, MUISlider, MUIToken } from './components';
import './App.css';

const theme = CreateCustomTheme({});

function App() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState<number>(30);

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <h1 className="main-title">Amura Design Library</h1>
        <p className="subtitle">Component Showcase</p>

        {/* MUIButton Section */}
        <section className="component-section">
          <h2 className="section-title">MUIButton</h2>
          <p className="section-description">Styled button component with multiple variants</p>
          <div className="component-demo">
            <div className="demo-row">
              <MUIButton variant="contained">Contained</MUIButton>
              <MUIButton variant="outlined">Outlined</MUIButton>
              <MUIButton variant="text">Text</MUIButton>
            </div>
            <div className="demo-row">
              <MUIButton variant="contained" size="small">Small</MUIButton>
              <MUIButton variant="contained">Medium</MUIButton>
              <MUIButton variant="contained" size="large">Large</MUIButton>
            </div>
            <div className="demo-row">
              <MUIButton variant="contained" disabled>Disabled</MUIButton>
            </div>
          </div>
        </section>

        {/* MUICheckbox Section */}
        <section className="component-section">
          <h2 className="section-title">MUICheckbox</h2>
          <p className="section-description">Custom checkbox with SVG icons</p>
          <div className="component-demo">
            <div className="demo-row">
              <label className="demo-label">
                <MUICheckbox
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                />
                <span>Interactive Checkbox</span>
              </label>
            </div>
            <div className="demo-row">
              <label className="demo-label">
                <MUICheckbox checked={true} />
                <span>Checked</span>
              </label>
              <label className="demo-label">
                <MUICheckbox checked={false} />
                <span>Unchecked</span>
              </label>
              <label className="demo-label">
                <MUICheckbox disabled />
                <span>Disabled</span>
              </label>
            </div>
          </div>
        </section>

        {/* MUIRadio Section */}
        <section className="component-section">
          <h2 className="section-title">MUIRadio</h2>
          <p className="section-description">Styled radio button component</p>
          <div className="component-demo">
            <RadioGroup
              value={radioValue}
              onChange={(e) => setRadioValue(e.target.value)}
            >
              <FormControlLabel
                value="option1"
                control={<MUIRadio />}
                label="Option 1"
              />
              <FormControlLabel
                value="option2"
                control={<MUIRadio />}
                label="Option 2"
              />
              <FormControlLabel
                value="option3"
                control={<MUIRadio />}
                label="Option 3"
              />
            </RadioGroup>
          </div>
        </section>

        {/* MUISwitch Section */}
        <section className="component-section">
          <h2 className="section-title">MUISwitch</h2>
          <p className="section-description">Toggle switch with custom styling</p>
          <div className="component-demo">
            <div className="demo-row">
              <label className="demo-label">
                <MUISwitch
                  checked={switchChecked}
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                />
                <span>Interactive Switch: {switchChecked ? 'ON' : 'OFF'}</span>
              </label>
            </div>
            <div className="demo-row">
              <label className="demo-label">
                <MUISwitch checked={true} />
                <span>On</span>
              </label>
              <label className="demo-label">
                <MUISwitch checked={false} />
                <span>Off</span>
              </label>
              <label className="demo-label">
                <MUISwitch disabled isGrayWhenDisabled />
                <span>Disabled (Gray)</span>
              </label>
            </div>
          </div>
        </section>

        {/* MUISkeleton Section */}
        <section className="component-section">
          <h2 className="section-title">MUISkeleton</h2>
          <p className="section-description">Loading placeholder with custom gradient</p>
          <div className="component-demo">
            <div className="demo-row skeleton-demos">
              <div className="skeleton-item">
                <span className="skeleton-label">Text</span>
                <MUISkeleton variant="text" width={200} height={20} />
              </div>
              <div className="skeleton-item">
                <span className="skeleton-label">Rectangular</span>
                <MUISkeleton variant="rectangular" width={200} height={100} />
              </div>
              <div className="skeleton-item">
                <span className="skeleton-label">Circular</span>
                <MUISkeleton variant="circular" width={50} height={50} />
              </div>
            </div>
            <div className="demo-row">
              <div className="skeleton-card">
                <MUISkeleton variant="circular" width={40} height={40} />
                <div className="skeleton-card-content">
                  <MUISkeleton variant="text" width={150} height={16} />
                  <MUISkeleton variant="text" width={100} height={14} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MUITooltip Section */}
        <section className="component-section">
          <h2 className="section-title">MUITooltip</h2>
          <p className="section-description">Styled tooltip component for hover information</p>
          <div className="component-demo">
            <div className="demo-row">
              <MUITooltip title="This is a tooltip!" arrow>
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>Hover over me</span>
              </MUITooltip>
            </div>
            <div className="demo-row">
              <MUITooltip title="Tooltip on button" arrow placement="top">
                <span>
                  <MUIButton variant="outlined">Button with Tooltip</MUIButton>
                </span>
              </MUITooltip>
              <MUITooltip title="Right placement" arrow placement="right">
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>Right tooltip</span>
              </MUITooltip>
            </div>
          </div>
        </section>

        {/* MUISlider Section */}
        <section className="component-section">
          <h2 className="section-title">MUISlider</h2>
          <p className="section-description">Range slider with custom styling</p>
          <div className="component-demo">
            <div className="demo-row" style={{ flexDirection: 'column', gap: '24px' }}>
              <div style={{ width: '100%' }}>
                <span className="skeleton-label">Interactive Slider: {sliderValue}</span>
                <Box sx={{ padding: '0 16px', marginTop: '16px' }}>
                  <MUISlider
                    value={sliderValue}
                    onChange={(_, value) => setSliderValue(value as number)}
                    min={0}
                    max={100}
                  />
                </Box>
              </div>
              <div style={{ width: '100%' }}>
                <span className="skeleton-label">Slider with Marks</span>
                <Box sx={{ padding: '0 16px', marginTop: '16px' }}>
                  <MUISlider
                    defaultValue={50}
                    marks={[
                      { value: 0, label: '0' },
                      { value: 25, label: '25' },
                      { value: 50, label: '50' },
                      { value: 75, label: '75' },
                      { value: 100, label: '100' },
                    ]}
                    min={0}
                    max={100}
                  />
                </Box>
              </div>
            </div>
          </div>
        </section>

        {/* MUIToken Section */}
        <section className="component-section">
          <h2 className="section-title">MUIToken</h2>
          <p className="section-description">Tag/chip component with active and inactive states</p>
          <div className="component-demo">
            <div className="demo-row">
              <MUIToken label="Active Token" active />
              <MUIToken label="Inactive Token" active={false} />
              <MUIToken label="With Delete" active onDelete={() => alert('Delete clicked!')} />
            </div>
            <div className="demo-row">
              <MUIToken label="Tag 1" active />
              <MUIToken label="Tag 2" active />
              <MUIToken label="Tag 3" active={false} />
              <MUIToken label="Tag 4" active={false} />
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
