import { FC } from "react";

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
    default:
      null;
  }
};
