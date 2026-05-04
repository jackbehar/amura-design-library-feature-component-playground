import { useCommonStyles } from "../../theme/CommonStyles";

import { useStyles } from "./DotStatus.styles";
import { RightPointerIcon } from "./DotStatus.svg";
import { IProps } from "./DotStatus.types";

const DotStatus = (props: IProps) => {
  const { count, onClick = () => {}, dotType, markAsUnread } = props;
  const { classes } = useStyles(props);
  const CommonStyles = useCommonStyles();

  return (
    <div className={classes.mainContainer} onClick={onClick}>
      <div className={classes.wrapper}>
        <div className={`${CommonStyles.sm8Regular} ${classes.numStyleText}`}>
          {markAsUnread ? "" : count > 9 ? "9+" : count || ""}
          {count && props.clickable ? (
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
