import { useState } from "react";

import { useCommonStyles } from "../../theme/CommonStyles";
import { Avatar } from "@mui/material";

import { useStyles } from "./KnowledgeBaseCard.styles";
import { KBImage, SendIcon } from "./KnowledgeBaseCard.svg";
import { IProps } from "./KnowledgeBaseCard.types";

const KnowledgeBaseCard = (props: IProps) => {
  const { heading, description, onSubmit, tenant, postId } = props;
  const [disable, setDisable] = useState(false);
  const { classes } = useStyles();
  const commonClass = useCommonStyles();

  return (
    <div className={classes.cardWrap}>
      <div className={classes.imgWrap}>
        <Avatar className={`${classes.profilePic}`} src={""}>
          {<KBImage />}
        </Avatar>
      </div>
      <div className={classes.cardContentWrap}>
        <div className={classes.flexWrap}>
          <strong
            className={`${classes.cardTitle} ${commonClass.body15Medium}`}
          >
            {heading?.snippet || ""}
          </strong>
          <span
            onClick={(e) => {
              e.stopPropagation();
              onSubmit(tenant?.snippet, postId, setDisable);
            }}
          >
            {<SendIcon className={disable ? classes.disable : ""} />}
          </span>
        </div>
        <span className={`${classes.discription} ${commonClass.body14Regular}`}>
          {description?.snippet || ""}
        </span>
      </div>
    </div>
  );
};

export default KnowledgeBaseCard;
