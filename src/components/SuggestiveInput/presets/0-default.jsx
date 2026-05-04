import * as React from 'react';
import SuggestiveInput from '../SuggestiveInput';

export default (
  <SuggestiveInput
    placeholder="Search with suggestions"
    label="Suggestive"
    onInputChange={() => {}}
    onSearchAPICall={async () => [
      { label: 'Alpha result', value: 'alpha' },
      { label: 'Beta result', value: 'beta' },
    ]}
    listRenderer={(data) => <span>{data.label}</span>}
    uxpId="suggestive-input-default"
  />
);
