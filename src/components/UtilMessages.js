import "./UtilMessages.css";
import { Trans } from "react-i18next";

export const Loading = ({ loadingMessage, className }) => {
  return (
    <div className={`loading-message ${className}`}>
      <Trans i18nKey={loadingMessage}></Trans>
    </div>
  );
};

export const Error = ({ errorMessage, className }) => {
  return (
    <div className={`error-message ${className}`}>
      <Trans i18nKey={errorMessage}></Trans>
    </div>
  );
};
