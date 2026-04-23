import { useCommonStyles } from '../../theme/CommonStyles';

import { ButtonStyled } from './MUIButton.styles';
import { IProps } from './MUIButton.types';

/**
 * @uxpindocurl https://mui.com/material-ui/react-button/
 * @uxpindescription Placeholder: The Button triggers actions and supports multiple variants, states, and sizes.
 */
export default function MUIButton(props: IProps) {
  const commonStyles = useCommonStyles();
  return <ButtonStyled className={commonStyles.sm10Medium} {...props} />;
}
