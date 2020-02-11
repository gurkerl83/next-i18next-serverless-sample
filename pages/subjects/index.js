import React from "react";
import getNextI18NextInstance from "../../i18n";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const { i18n, Link, useTranslation } = getNextI18NextInstance;

const Subjects = () => {
  const { t } = useTranslation(["subjects", "common"]);
  return (
    <React.Fragment>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Header title={t("title.plural")} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Subjects;
