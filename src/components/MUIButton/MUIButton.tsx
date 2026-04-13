import { useCommonStyles } from '../../theme/CommonStyles';

import { ButtonStyled } from './MUIButton.styles';
import { IProps } from './MUIButton.types';

export default function MUIButton(props: IProps) {
  const commonStyles = useCommonStyles();
  return <ButtonStyled className={commonStyles.sm10Medium} {...props} />;
}
