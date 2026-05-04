import { useCommonStyles } from '../../theme/CommonStyles';
import { Chip } from '@mui/material';

import { useStyles } from './MUIToken.styles';
import { IProps } from './MUIToken.types';
import { Close } from './MUIToken.svg';

/**
 * @uxpindocurl https://mui.com/material-ui/react-chip/
 * @uxpindescription Placeholder: The Token (Chip) represents compact information, attributes, or actions.
 */
const MUIToken = (props: IProps) => {
  const {
    className,
    active,
    clickable = true,
    disabled,
    onClick,
    onActiveChange,
    ...restProps
  } = props;
  const commonClasses = useCommonStyles();
  const { classes } = useStyles(props);
  const handleClick: IProps['onClick'] = (event) => {
    if (clickable && !disabled) {
      onActiveChange?.(!Boolean(active));
    }
    onClick?.(event);
  };

  return (
    <Chip
      data-testid="token"
      className={`${commonClasses.body15Regular} ${classes.rootStyle} ${className} ${active ? classes.active : classes.inActive}`}
      variant="outlined"
      color="default"
      clickable={clickable}
      disabled={disabled}
      onClick={handleClick}
      deleteIcon={Close}
      title={(restProps?.label as string) || ''}
      {...restProps}
    />
  );
};

export default MUIToken;
