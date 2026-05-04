import { useEffect, useState } from "react";

import { useCommonStyles } from "../../theme/CommonStyles";
import MUISlider from "../MUISlider/MUISlider";
import MUITooltip from "../MUITooltip/MUITooltip";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useStyles } from "./PropertyCard.styles";
import { InfoIcon } from "./PropertyCard.svg";
import { IProps, marks } from "./PropertyCard.types";

const PropertyCard = (props: IProps) => {
  const {
    onRangeChange,
    id,
    isResetFilter,
    defaultRangeValue,
    customStyle,
    headerTitle,
    tooltipText,
    rangeHeader,
    profileProgress,
  } = props;
  const { classes } = useStyles();
  const commonClass = useCommonStyles();
  const [range, setRange] = useState(defaultRangeValue);

  useEffect(() => {
    if (isResetFilter) setRange(defaultRangeValue);
  }, [isResetFilter, defaultRangeValue]);

  const handleRange = (_: unknown, value: number | number[]) => {
    const numValue = Array.isArray(value) ? value[0] : value;
    onRangeChange({ [id]: numValue });
    setRange(numValue);
  };

  return (
    <div className={`${classes.PropertyCardWrap} ${customStyle || ""}`}>
      <div className={classes.cardHeader}>
        <div className={classes.contentWrap}>
          <div className={classes.contentText}>
            <span className={commonClass.caption12Regular}>{headerTitle}</span>
            <MUITooltip title={tooltipText} arrow>
              <InfoIcon />
            </MUITooltip>
          </div>
          <strong
            className={`${classes.contentDetails} ${commonClass.body15Medium}`}
            title={rangeHeader}
          >
            {rangeHeader}
          </strong>
        </div>
        <div className={classes.graphWrap}>
          {profileProgress?.map((item, index) => {
            const progressVal = typeof item[id] === "number" ? item[id] : 0;
            return (
              <ProgressBar
                key={index}
                progressValue={progressVal * 100}
                progreesColor={item?.progreesColor}
              />
            );
          })}
        </div>
      </div>
      <MUISlider
        value={range}
        min={0}
        max={10}
        onChange={handleRange}
        marks={marks}
      />
    </div>
  );
};

export default PropertyCard;
