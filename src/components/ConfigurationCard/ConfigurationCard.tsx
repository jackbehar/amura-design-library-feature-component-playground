import { useCommonStyles } from "../../theme/CommonStyles";
import { Avatar } from "@mui/material";

import { useStyles } from "./ConfigurationCard.styles";
import { AmuraIcon, Clock } from "./ConfigurationCard.svg";
import { IProps } from "./ConfigurationCard.types";

const ConfigurationCard = (props: IProps) => {
  const { cardTitle, cardCaption, recordTitle, time, acronym } = props;
  const { classes } = useStyles(props);
  const commonClass = useCommonStyles();

  return (
    <div className={classes.cardWrap}>
      <div className={classes.imgWrap}>
        <i className={classes.logoIcon}>{<AmuraIcon />}</i>
        <Avatar className={`${classes.profilePic}`}>{acronym}</Avatar>
      </div>
      <div className={classes.cardContentWrap}>
        <strong className={`${classes.cardTitle} ${commonClass.body15Medium}`}>
          {cardTitle}
        </strong>
        <span className={`${classes.cardCaption} ${commonClass.body15Regular}`}>
          {cardCaption}
        </span>
        <div className={classes.recordWrap}>
          <span
            className={`${classes.recordTitle} ${commonClass.caption12Regular}`}
          >
            {recordTitle}
          </span>
          {time && (
            <span
              className={`${classes.recordTime} ${commonClass.caption12Regular}`}
            >
              <i className={classes.timeIcon}>{<Clock />}</i>
              {time}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfigurationCard;
