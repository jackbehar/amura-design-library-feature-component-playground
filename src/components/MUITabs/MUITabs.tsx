import { useEffect, useState } from "react";

import { IconButton } from "@mui/material";

import { TabStyled, TabsStyled, useStyles } from "./MUITabs.styles";
import { EditIcon } from "./MUITabs.svg";
import { IProps } from "./MUITabs.types";

/**
 * @uxpindocurl https://mui.com/material-ui/react-tabs/
 * @uxpindescription Horizontal tabs with optional edit affordance and Amura styling.
 */
const MUITabs = (props: IProps) => {
  const {
    tabOptions,
    activeTab,
    handleEditTab,
    onTabChange,
    customStyle,
    ...restProps
  } = props;

  const { classes } = useStyles(props);
  const [currentActiveTab, setCurrentActiveTab] = useState(activeTab);

  useEffect(() => {
    setCurrentActiveTab(activeTab);
  }, [activeTab]);

  const handleChange = (_: React.SyntheticEvent, value: string) => {
    onTabChange?.(value);
    setCurrentActiveTab(value);
  };

  return (
    <div className={`${classes.rootTabsContainer} ${customStyle || ""}`}>
      <TabsStyled
        selectionFollowsFocus
        value={currentActiveTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
      >
        {tabOptions.map((data, index) => (
          <TabStyled
            disableFocusRipple
            key={index}
            label={data}
            value={data}
            tabIndex={-1}
          />
        ))}
      </TabsStyled>
      {handleEditTab && (
        <IconButton onClick={handleEditTab}>
          <EditIcon />
        </IconButton>
      )}
    </div>
  );
};

export default MUITabs;
