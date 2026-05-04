import { useCommonStyles } from "../../theme/CommonStyles";
import { useStyles } from "./EventCard.styles";
import { AmuraTenantIcon, CalendarEventIcon, DotIcon } from "./EventCard.svg";
import { IEventCardProps } from "./EventCard.types";

// Utility function to format time range
const formatTimeRange = (
  startTime: string | Date,
  endTime: string | Date,
): string => {
  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, "0")}${ampm}`;
  };

  const start = new Date(startTime);
  const end = new Date(endTime);
  return `${formatTime(start)} - ${formatTime(end)}`;
};

const EventCard = (props: IEventCardProps) => {
  const {
    title,
    callType = "Video",
    fromTime,
    toTime,
    isSelected = false,
    onClick,
    showBlackDot = false,
    countdownDisplay,
    progress = 0,
    className,
  } = props;

  const { classes } = useStyles({ isSelected });
  const CommonStyles = useCommonStyles();

  return (
    <div className={`${classes.mainContainer} ${className || ""}`}>
      <div className={classes.contentContainer} onClick={onClick}>
        <div className={classes.nameCardHeader}>
          <div className={classes.profilecontainer}>
            <div className={classes.avatarCon}>
              <div className={classes.profileDiv}>
                <CalendarEventIcon isSelected={isSelected} />
              </div>
            </div>
          </div>

          <div className={classes.nameContainer}>
            <div className={classes.nameContainerHead}>
              <div className={classes.profileNameHeadText}>
                <div className={classes.roleWrapper}>
                  <span
                    title={callType}
                    className={`${classes.roleName} ${CommonStyles.caption10Regular}`}
                  >
                    {callType?.charAt(0).toUpperCase() + callType?.slice(1)}{" "}
                    Call
                  </span>
                  <div
                    className={`${classes.timeRange} ${CommonStyles.caption12Regular}`}
                  >
                    {formatTimeRange(fromTime, toTime)}
                  </div>
                </div>
                <div
                  title={title}
                  className={`${classes.userNametext} ${CommonStyles.body15Medium}`}
                >
                  {title}
                </div>
              </div>
            </div>
            <div className={classes.contentWrap}></div>
          </div>
        </div>

        <div className={classes.roomDotWrapper}>
          <div className={classes.roomWrapper}>
            <AmuraTenantIcon isSelected={isSelected} />
          </div>

          <div className={classes.dotsContainer}>
            <div className={classes.dotWrapper}>
              <div className={classes.Wrapper}>
                {countdownDisplay && (
                  <span className={classes.countdownText}>
                    {countdownDisplay}
                  </span>
                )}
                {progress > 0 && (
                  <div className={classes.progressBarWrapper}>
                    <div
                      className={classes.progressBar}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
                <div className={classes.blueCardAlignment}>
                  <DotIcon color={showBlackDot ? "#252427" : "#007AFF"} />
                </div>
              </div>
              <DotIcon color="#E1E1E1" />
              <DotIcon color="#E1E1E1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
