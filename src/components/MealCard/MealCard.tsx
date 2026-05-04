import React from "react";

import { useCommonStyles } from "../../theme/CommonStyles";
import { useStyles } from "./MealCard.styles";
import { IMealCardProps } from "./MealCard.types";

/**
 * @uxpindocurl https://www.uxpin.com/docs/
 * @uxpindescription Meal timeline card with image, macros, actions (done/swap/redo), and slot state.
 */
const MealCard: React.FC<IMealCardProps> = ({
  time,
  title,
  kcal,
  mins,
  imageUrl,
  rightTime,
  showDoneButton,
  onDoneClick,
  showRedoIcon,
  onRedoClick,
  redoIcon,
  showSwapIcon = true,
  onSwapClick,
  swapIcon,
  mealState = "active",
  progress = 0,
  canInteract = true,
  loggedAt,
  isLastMealOfDay,
  className,
}) => {
  const { classes, cx } = useStyles({ isLastMealOfDay });
  const CommonStyles = useCommonStyles();

  // Format logged time for display
  const formatLoggedTime = (timestamp: string): string => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };

  // Determine Done button state
  const isDoneDisabled =
    mealState === "before_slot" ||
    mealState === "missed" ||
    mealState === "loading";
  const isMissed = mealState === "missed";
  const isLoading = mealState === "loading";

  // Determine if we should show the logged time instead of Done button
  const showLoggedTime = mealState === "logged" && loggedAt;

  const handleDoneClick = () => {
    if (!isDoneDisabled && onDoneClick) {
      onDoneClick();
    }
  };

  // Determine if redo should be shown and clickable
  const shouldShowRedo = showRedoIcon && canInteract;

  const handleRedoClick = () => {
    if (canInteract && onRedoClick) {
      onRedoClick();
    }
  };

  return (
    <div className={`${classes.timelineItem} ${className || ""}`}>
      <div className={classes.trackLine}></div>
      <div style={{ width: "100%" }}>
        {/* LEFT TIME */}
        <div className={`${classes.time} ${CommonStyles.caption12Medium}`}>
          {time}
        </div>

        {/* CONTENT */}
        <div className={classes.card} style={{ width: "100%" }}>
          <img
            className={classes.image}
            src={imageUrl || "https://via.placeholder.com/48x48?text=No+Image"}
            alt={title}
          />

          <div className={classes.details}>
            <div className={CommonStyles.body15Medium}>{title}</div>

            {/* SUBTEXT */}
            <div
              className={`${classes.subText} ${CommonStyles.caption12Medium}`}
            >
              {kcal} kcal • {mins} mins
            </div>
          </div>

          <div className={classes.rightSection}>
            {/* Show logged time when meal is logged */}
            {showLoggedTime && (
              <div
                className={`${classes.rightTime} ${CommonStyles.caption12Regular}`}
              >
                {formatLoggedTime(loggedAt!)}
              </div>
            )}

            {/* Show Done button when not logged */}
            {showDoneButton && !showLoggedTime && (
              <button
                className={cx(
                  classes.doneButton,
                  isDoneDisabled && classes.doneButtonDisabled,
                )}
                onClick={handleDoneClick}
                disabled={isDoneDisabled}
              >
                <span
                  className={`${classes.doneText} ${CommonStyles.body15Medium}`}
                >
                  {isLoading ? "..." : "Done"}
                </span>

                <div className={classes.progressWrapper}>
                  <div
                    className={cx(
                      classes.progressBar,
                      isMissed && classes.progressBarMissed,
                    )}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </button>
            )}

            {/* Show redo icon only when logged and can interact */}
            {shouldShowRedo && (
              <div className={classes.icon} onClick={handleRedoClick}>
                {redoIcon}
              </div>
            )}

            {showSwapIcon && (
              <div className={classes.icon} onClick={onSwapClick}>
                {swapIcon}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
