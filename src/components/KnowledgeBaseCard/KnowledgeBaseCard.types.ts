interface headingObj {
  snippet: string;
}

export interface IcardData {
  heading: headingObj;
  description: headingObj;
  postId: string;
  tenant: headingObj;
}

export interface IProps {
  heading: headingObj;
  description: headingObj;
  onSubmit: Function;
  tenant: headingObj;
  postId: string;
}
