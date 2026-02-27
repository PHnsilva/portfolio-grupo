import { profile } from "../../data/profile";
import { useI18n } from "../../i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <small>{t("footer.copyright", { year, name: profile.name })}</small>
      </div>
    </footer>
  );
}
