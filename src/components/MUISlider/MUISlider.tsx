import { useEffect, useState } from 'react';

import type { MUISliderProps } from './MUISlider.types';

import { SliderStyled } from './MUISlider.styles';

/**
 * @uxpindocurl https://mui.com/material-ui/react-slider/
 * @uxpindescription Placeholder: The Slider lets users select a value or range along a bounded track.
 */
const MUISlider = (props: MUISliderProps) => {
  const { value, onChange, ...restprops } = props;
  const [range, setRange] = useState(value);

  useEffect(() => {
    if (value !== undefined) {
      setRange(value);
    }
  }, [value]);

  const handleChange = (event: Event, rangevalue: number | number[], activeThumb: number) => {
    setRange(rangevalue);
    onChange && onChange(event, rangevalue, activeThumb);
  };

  return <SliderStyled value={range} onChange={handleChange} {...restprops} />;
};

export default MUISlider;
