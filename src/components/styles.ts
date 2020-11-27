import { createUseStyles } from "react-jss";

import { Styles } from "./Windows.d";

export const useStyles = (styles: Styles) => {
  const {
    borderRadius,
    headerSize,
    headerColor,
    headerBackground,
    bodyColor,
    bodyBackground,
    boxShadow,
    IconMaximize,
    IconMinimize,
    IconResize,
  } = styles;

  return createUseStyles({
    "tw-windows": {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",

      "& .tw-taskbar": {
        display: "flex",
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
      },

      "& .tw-window": {
        position: "absolute",
        overflow: "hidden",
        borderRadius: `${borderRadius} ${borderRadius} 0 ${borderRadius}`,
        border: `1px solid ${headerBackground}`,
        boxShadow: boxShadow,

        "& .tw-header": {
          display: "flex",
          position: "relative",
          width: "100%",
          height: headerSize,
          lineHeight: headerSize,
          color: headerColor,
          backgroundColor: headerBackground,
          boxShadow: boxShadow,
          zIndex: "1000",
          cursor: "pointer",
          userSelect: "none",

          "&.tw-draggable": {
            cursor: "move",
          },

          "& .tw-title": {
            flexGrow: "10",
            padding: "0 1rem",
            overflow: "hidden",
          },

          "& .tw-buttons": {
            display: "flex",
            flexShrink: "0",
            padding: "0 0.5rem",

            "& .tw-button": {
              width: headerSize,
              height: headerSize,
              transition: "opacity 0.3s",
              backgroundSize: "50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "0.5",
              cursor: "pointer",

              "&:hover": {
                opacity: "1",
              },

              "&.tw-minimize": {
                backgroundImage: IconMinimize,
              },

              "&.tw-maximize": {
                backgroundImage: IconMaximize,
              },
            },
          },
        },

        "& .tw-body": {
          overflow: "auto",
          color: bodyColor,
          backgroundColor: bodyBackground,
        },

        "&.tw-minimize-on": {
          borderRadius: borderRadius,

          "&.tw-taskbar-on": {
            position: "relative",
            transform: "none !important",
            borderRadius: borderRadius,
            margin: "0.25rem",
          },

          "& .tw-body": {
            display: "none",
          },
        },

        "&.tw-maximize-on": {
          top: "0 !important",
          left: "0 !important",
          width: "100% !important",
          height: "100% !important",
          transform: "none !important",
          borderRadius: "0 !important",

          "& .tw-header": {
            width: "100% !important",
          },

          "& .tw-body": {
            display: "block !important",
            width: "100% !important",
            height: "100% !important",
          },
        },
      },

      "& .react-resizable": {
        position: "relative",
      },

      "& .react-resizable-handle": {
        position: "absolute",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "content-box",
        boxSizing: "border-box",
        backgroundImage: IconResize,
        backgroundPosition: "bottom right",
        backgroundSize: "50%",
        opacity: "0.5",
        padding: "0 3px 3px 0",
        transition: "opacity 0.3s",

        "&:hover": {
          opacity: "1",
        },
      },

      "& .react-resizable-handle-sw": {
        bottom: "0",
        left: "0",
        cursor: "sw-resize",
        transform: "rotate(90deg)",
      },

      "& .react-resizable-handle-se": {
        bottom: "0",
        right: "0",
        cursor: "se-resize",
      },

      "& .react-resizable-handle-nw": {
        top: "0",
        left: "0",
        cursor: "nw-resize",
        transform: "rotate(180deg)",
      },

      "& .react-resizable-handle-ne": {
        top: "0",
        right: "0",
        cursor: "ne-resize",
        transform: "rotate(270deg)",
      },

      "& .react-resizable-handle-w, & .react-resizable-handle-e": {
        top: "50%",
        marginTop: "-10px",
        cursor: "ew-resize",
      },

      "& .react-resizable-handle-w": {
        left: "0",
        transform: "rotate(135deg)",
      },

      "& .react-resizable-handle-e": {
        right: "0",
        transform: "rotate(315deg)",
      },

      "& .react-resizable-handle-n, & .react-resizable-handle-s": {
        left: "50%",
        marginLeft: "-10px",
        cursor: "ns-resize",
      },

      "& .react-resizable-handle-n": {
        top: "0",
        transform: "rotate(225deg)",
      },

      "& .react-resizable-handle-s": {
        bottom: "0",
        transform: "rotate(45deg)",
      },
    },
  });
};
