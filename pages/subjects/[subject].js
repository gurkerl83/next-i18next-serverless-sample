import React from "react";
import getNextI18NextInstance from "../../i18n";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
const { i18n, Link, useTranslation } = getNextI18NextInstance;

const Subject = () => {
  const { t } = useTranslation(["subjects", "common", "footer"]);
  return (
    <React.Fragment>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Header title={t("title.singular")} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Subject;
