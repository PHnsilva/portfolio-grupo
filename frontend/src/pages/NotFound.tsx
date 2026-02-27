import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="page">
      <div className="card">
        <h1>{t("errors.notFoundTitle")}</h1>
        <p className="muted">{t("errors.notFoundDesc")}</p>
        <Link className="btn btn-primary" to="/">{t("errors.goHome")}</Link>
      </div>
    </div>
  );
}
