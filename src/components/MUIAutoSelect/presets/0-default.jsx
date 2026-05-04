import * as React from 'react';
import MUIAutoSelect from '../MUIAutoSelect';

export default (
  <MUIAutoSelect
    options={[
      { label: 'Option one', value: '1' },
      { label: 'Option two', value: '2' },
      { label: 'Option three', value: '3', subLabel: 'With sublabel' },
    ]}
    uxpId="mui-autoselect-default"
  />
);
