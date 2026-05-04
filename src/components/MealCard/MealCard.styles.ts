import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles<{ isLastMealOfDay: boolean }>()(
  (theme, { isLastMealOfDay }) => ({
    timelineItemBefore: {
      content: '""',
      position: "absolute",
      left: "10px",
      top: "5px",
      width: "14px",
      height: "14px",
      background: "#999",
      borderRadius: "50%",
    },

    time: {
      color: "#777",
      marginBottom: "8px",
    },

    card: {
      display: "flex",
      alignItems: "center",
      background: "#fff",
      borderRadius: "10px",
      justifyContent: "space-between",
    },

    image: {
      width: "48px",
      height: "48px",
      borderRadius: "2px",
      objectFit: "cover",
    },

    details: {
      marginLeft: "10px",
      flex: 1,
    },

    subText: {
      color: "#777",
    },

    rightSection: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },

    rightTime: {
      color: "#333",
    },

    doneButton: {
      background: "#373639",
      color: "#fff",
      border: "1px solid #5C5A61",
      padding: "6px 10px",
      borderRadius: "8px",
      fontSize: "14px",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2px",

      "&:disabled": {
        cursor: "not-allowed",
      },
    },

    doneButtonDisabled: {
      background: "#5A595D",
      opacity: 0.6,
      cursor: "not-allowed",
    },

    doneText: {
      lineHeight: 1,
      padding: "0 4px",
      fontWeight: 500,
    },

    progressWrapper: {
      width: "100%",
      height: "2px",
      background: "#5A595D",
      borderRadius: "2px",
      overflow: "hidden",
    },

    progressBar: {
      height: "100%",
      background: "#FFFFFF",
      transition: "width 0.3s ease",
    },

    progressBarMissed: {
      background: "#E53935",
    },

    icon: {
      fontSize: "18px",
      cursor: "pointer",
    },

    timelineItem: {
      position: "relative",
      display: "flex",
      gap: "20px",
      height: "76px",
    },

    trackLine: {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      background: theme.palette.colors.gray[700],
      marginTop: "6px",
      position: "relative",
      border: `1px solid ${theme.palette.colors.gray[700]}`,
      ...(!isLastMealOfDay && {
        "&::after": {
          content: '""',
          position: "absolute",
          left: "2px",
          top: "3px",
          bottom: 0,
          width: "1px",
          background: theme.palette.colors.gray[500],
          height: "90px",
        },
      }),
    },
  }),
);
