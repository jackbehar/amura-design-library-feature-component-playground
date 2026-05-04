import * as React from 'react';
import MUITabs from '../MUITabs';

export default (
  <MUITabs
    tabOptions={['Overview', 'Details', 'History']}
    activeTab="Overview"
    onTabChange={() => {}}
    uxpId="mui-tabs-default"
  />
);
