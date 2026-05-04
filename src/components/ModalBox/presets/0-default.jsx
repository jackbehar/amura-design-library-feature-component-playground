import * as React from 'react';
import ModalBox from '../ModalBox';

export default (
  <ModalBox
    open={true}
    modalTitle="Dialog title"
    handleClose={() => {}}
    buttonConfig={[
      { text: 'Cancel', variant: 'text', onClick: () => {} },
      { text: 'Save', variant: 'contained', onClick: () => {} },
    ]}
    uxpId="modal-box-default"
  >
    Primary message or form content goes here.
  </ModalBox>
);
