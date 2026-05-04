import { useCommonStyles } from "../../theme/CommonStyles";

import { useStyles } from "./DotStatus.styles";
import { RightPointerIcon } from "./DotStatus.svg";
import { IProps } from "./DotStatus.types";

/**
 * @uxpindocurl https://www.uxpin.com/docs/
 * @uxpindescription Compact circular status badge for counts or unread indicators.
 */
const DotStatus = (props: IProps) => {
  const {
    count,
    onClick,
    onSelectedChange,
    isSelected,
    dotType,
    markAsUnread,
    clickable = true,
  } = props;
  const { classes } = useStyles(props);
  const CommonStyles = useCommonStyles();
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (clickable) {
      onSelectedChange?.(!Boolean(isSelected));
      onClick?.(event);
    }
  };

  return (
    <div className={classes.mainContainer} onClick={handleClick}>
      <div className={classes.wrapper}>
        <div className={`${CommonStyles.sm8Regular} ${classes.numStyleText}`}>
          {markAsUnread ? "" : count > 9 ? "9+" : count || ""}
          {count && clickable ? (
            <span style={{ marginLeft: "1px" }}>
              <RightPointerIcon />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DotStatus;
