import React from "react";

import { useStyles } from "./TopSheet.styles";
import { IProps } from "./TopSheet.types";

/**
 * @uxpindocurl https://www.uxpin.com/docs/
 * @uxpindescription Slide-down (or up) surface for menus or filters with click-away close.
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function TopSheet(props: IProps) {
  const {
    isOpen,
    children,
    handleClose,
    variant,
    disableAutoClose,
    customStyle,
    uxpinRef,
  } = props;
  const { classes } = useStyles();
  const ref = React.useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = React.useState(false);
  const [contentHeight, setContentHeight] = React.useState(0);

  const setContentRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      ref.current = node;

      if (!uxpinRef) {
        return;
      }

      if (typeof uxpinRef === "function") {
        uxpinRef(node);
        return;
      }

      (uxpinRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    },
    [uxpinRef],
  );

  const handleClickOutside = React.useCallback(
    (event: MouseEvent) => {
      if (!ref.current || disableAutoClose) {
        return;
      }

      if (!ref.current.contains(event.target as Node)) {
        setIsActive(false);
        handleClose?.();
      }
    },
    [disableAutoClose, handleClose],
  );

  React.useEffect(() => {
    setIsActive(isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    if (!ref.current || !isActive) {
      return;
    }

    const element = ref.current;
    const updateHeight = () => setContentHeight(element.offsetHeight);

    updateHeight();

    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [children, isActive, variant, customStyle]);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: isActive ? `${Math.max(contentHeight, 1)}px` : undefined,
        visibility: isActive ? "visible" : "hidden",
        zIndex: isActive ? 1000 : -1,
      }}
    >
      <div
        className={classes.tab}
        style={{
          transition: "all 0.1s ease-out",
          height: "100%",
          transformOrigin:
            variant === "bottom" ? "bottom center" : "top center",
          transform: isActive ? "scaleY(1)" : "scaleY(0)",
        }}
      ></div>
      <div
        className={`${variant === "bottom" ? classes.tabContentBottom : classes.tabContent} ${customStyle}`}
        ref={setContentRef}
      >
        <div className={`${classes.dropdownWrap} ${isActive ? "active" : ""} `}>
          {children}
        </div>
      </div>
    </div>
  );
}
