import { useCommonStyles } from "../../theme/CommonStyles";
import { BackArrowIcon } from "../../icons/CommonIcons";

import MUIButton from "../MUIButton/MUIButton";
import { useStyles } from "./PageHeader.styles";
import { IProps } from "./PageHeader.types";

export default function PageHeader(props: IProps) {
  const {
    handleBack,
    isClearAll,
    clearAllText,
    headerContent,
    subtitle,
    customStyle,
    handleClearAll,
    endAdornment,
    startAdornment,
    bottomContainer,
    bottomContainerStyle,
    customClassName,
  } = props;
  const { classes } = useStyles(props);
  const commonClasses = useCommonStyles();

  return (
    <div className={`${classes.headerContainer} ${customStyle}`}>
      <div className={`${classes.firstContainer} firstContainer`}>
        {!handleBack && startAdornment}
        {props.injectComponent ? (
          props.injectComponent
        ) : handleBack ? (
          <span className={`backArrow ${customClassName}`} onClick={handleBack}>
            {<BackArrowIcon />}
          </span>
        ) : null}
      </div>

      <div className={classes.middleContainer}>
        <div className={`${commonClasses.body17Medium} ${classes.headerText}`}>
          {headerContent}
        </div>
        {subtitle && (
          <div className={classes.subtitleContainer} title={subtitle}>
            <div className={`${commonClasses.caption12Regular}`}>
              {subtitle}
            </div>
          </div>
        )}
      </div>
      <div className={classes.lastContainer}>
        {isClearAll && (
          <MUIButton
            size="small"
            fontSize="12px"
            disableRipple
            onClick={handleClearAll}
          >
            {clearAllText || "Clear All"}
          </MUIButton>
        )}
        {endAdornment}
      </div>
      {bottomContainer && (
        <div className={`${classes.bottomContainer} ${bottomContainerStyle}`}>
          {bottomContainer}
        </div>
      )}
    </div>
  );
}
