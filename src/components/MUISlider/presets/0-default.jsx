import * as React from 'react';
import MUISlider from '../MUISlider';

export default (
  <MUISlider
    defaultValue={45}
    min={0}
    max={100}
    sx={{ width: 280, maxWidth: '100%', px: 1.5, py: 1 }}
    uxpId="mui-slider-default"
  />
);
