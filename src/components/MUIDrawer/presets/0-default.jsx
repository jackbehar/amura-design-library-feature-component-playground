import * as React from 'react';
import MUIDrawer from '../MUIDrawer';

export default (
  <MUIDrawer
    open={true}
    anchor="bottom"
    headerTitle="Drawer title"
    handleClose={() => {}}
    uxpId="mui-drawer-default"
  >
    <span>Drawer body content.</span>
  </MUIDrawer>
);
