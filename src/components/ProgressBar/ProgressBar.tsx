import { useStyles } from "./ProgressBar.styles";
import { ProgressProps } from "./ProgressBar.types";

/**
 * @uxpindocurl https://www.uxpin.com/docs/
 * @uxpindescription Horizontal progress track showing a filled portion by percentage and color.
 */
const ProgressBar = (props: ProgressProps) => {
  const { classes } = useStyles(props);
  return (
    <div className={classes.progressWrap}>
      <span className={classes.progressField} />
    </div>
  );
};

export default ProgressBar;
