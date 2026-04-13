import { useCommonStyles } from '../../theme/CommonStyles';
import type { ChipProps } from '@mui/material';
import { Chip } from '@mui/material';

import { useStyles } from './MUIToken.styles';
import { IProps } from './MUIToken.types';
import { Close } from './MUIToken.svg';

const MUIToken = (props: IProps) => {
  const { className, active, ...restProps } = props;
  const commonClasses = useCommonStyles();
  const { classes } = useStyles(props);

  return (
    <Chip
      data-testid="token"
      className={`${commonClasses.body15Regular} ${classes.rootStyle} ${className} ${active ? classes.active : classes.inActive}`}
      variant="outlined"
      color="default"
      deleteIcon={Close}
      title={(restProps?.label as string) || ''}
      {...(restProps as ChipProps)}
    />
  );
};

export default MUIToken;
