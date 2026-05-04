import { useCommonStyles } from "../../theme/CommonStyles";
import { CrossIcon } from "../../icons/CommonIcons";
import { Dialog } from "@mui/material";

import MUIButton from "../MUIButton/MUIButton";
import { useStyles } from "./ModalBox.styles";
import { IModalBoxProps } from "./ModalBox.types";

/**
 * @uxpindocurl https://mui.com/material-ui/react-dialog/
 * @uxpindescription Modal dialog with title, body, configurable footer buttons, and optional backdrop.
 */
export default function ModalBox(props: IModalBoxProps) {
  const {
    customStyle,
    open,
    modalTitle,
    children,
    buttonConfig,
    handleClose,
    hideCloseIcon = false,
    titleAlignment = "left",
    showOnlyChildern,
    hideBackdrop = true,
    ...restProps
  } = props;
  const { classes } = useStyles(restProps);
  const commonClasses = useCommonStyles();

  return (
    <Dialog
      open={open}
      hideBackdrop={hideBackdrop}
      className={`${classes.dialogueBox} ${customStyle}`}
    >
      {!showOnlyChildern && (
        <div className={`${classes.modalContainer}`}>
          <header
            className={`${commonClasses.body17Medium} ${classes.modalTitle}`}
            style={{ textAlign: titleAlignment }}
          >
            {modalTitle}
            {!hideCloseIcon && (
              <span className={classes.marginR16}>
                <CrossIcon
                  className={classes.closeIcon}
                  data-testid="modal-close-icon"
                  onClick={handleClose}
                />
              </span>
            )}
          </header>
          <div
            className={`${commonClasses.body15Regular} ${classes.modalBody}`}
          >
            {children}
          </div>
          <footer className={classes.modalFooter}>
            {buttonConfig?.map(({ text, ...rest }, index) => (
              <MUIButton key={index} {...rest}>
                {text}
              </MUIButton>
            ))}
          </footer>
        </div>
      )}
      {showOnlyChildern && (
        <div className={`${commonClasses.body15Regular} ${classes.modalBody}`}>
          {children}
        </div>
      )}
    </Dialog>
  );
}
