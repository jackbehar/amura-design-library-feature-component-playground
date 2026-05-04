import * as React from 'react';
import TopSheet from '../TopSheet';

export default (
  <TopSheet isOpen={true} handleClose={() => {}} variant="top" uxpId="top-sheet-default">
    <div style={{ padding: 16 }}>Top sheet content (filters, actions, etc.).</div>
  </TopSheet>
);
