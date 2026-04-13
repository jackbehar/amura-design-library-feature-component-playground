import { useEffect, useState } from 'react';

import { SliderProps } from '@mui/material';

import { SliderStyled } from './MUISlider.styles';

const MUISlider = (props: SliderProps) => {
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
