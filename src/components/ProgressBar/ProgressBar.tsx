import { useStyles } from "./ProgressBar.styles";
import { ProgressProps } from "./ProgressBar.types";

const ProgressBar = (props: ProgressProps) => {
  const { classes } = useStyles(props);
  return (
    <div className={classes.progressWrap}>
      <span className={classes.progressField} />
    </div>
  );
};

export default ProgressBar;
