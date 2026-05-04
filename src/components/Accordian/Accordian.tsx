import { useCommonStyles } from "../../theme/CommonStyles";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useStyles } from "./Accordian.styles";
import { UpArrow } from "./Accordian.svg";
import { IProps } from "./Accordian.types";

/**
 * @uxpindocurl https://mui.com/material-ui/react-accordion/
 * @uxpindescription Expandable panel with a summary row and detail content, styled for Amura.
 */
const Accordian = (props: IProps) => {
  const {
    accordianTitle,
    children,
    customStyle,
    subTitle,
    disabled,
    iconColor,
    ...restProps
  } = props;
  const { classes } = useStyles(props);
  const commonClass = useCommonStyles();

  return (
    <div className={`${classes.accordianWrap} ${customStyle}`}>
      <Accordion {...restProps}>
        <AccordionSummary
          expandIcon={<UpArrow iconColor={iconColor} />}
          disabled={disabled}
        >
          {!subTitle && (
            <Typography
              className={`${commonClass.body15Medium} ${classes.wordbreak}`}
            >
              {accordianTitle}
            </Typography>
          )}
          {subTitle && (
            <span className={`${classes.accordianTitleWrap}`}>
              <Typography className={commonClass.body15Medium}>
                {accordianTitle}
              </Typography>
              <Typography
                className={`${commonClass.caption12Medium} ${classes.justifyRight}`}
              >
                {subTitle}
              </Typography>
            </span>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={commonClass.body15Regular}>
            {children}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
