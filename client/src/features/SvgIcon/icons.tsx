import { FC } from "react";
import "./icon.css";

export const getPath: FC = (name) => {
  switch (name) {
    case "tradingview":
      return (
        <svg
          width="36"
          height="28"
          viewBox="0 0 36 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 22H7V11H0V4h14v18zM28 22h-8l7.5-18h8L28 22z"
            fill="currentColor"
          ></path>
          <circle cx="20" cy="8" r="4" fill="currentColor"></circle>
        </svg>
      );
    case "loading-spinner":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="spinner_Wezc">
            <circle cx="12" cy="2.5" r="1.5" opacity=".14" />
            <circle cx="16.75" cy="3.77" r="1.5" opacity=".29" />
            <circle cx="20.23" cy="7.25" r="1.5" opacity=".43" />
            <circle cx="21.50" cy="12.00" r="1.5" opacity=".57" />
            <circle cx="20.23" cy="16.75" r="1.5" opacity=".71" />
            <circle cx="16.75" cy="20.23" r="1.5" opacity=".86" />
            <circle cx="12" cy="21.5" r="1.5" />
          </g>
        </svg>
      );
    default:
      null;
  }
};
