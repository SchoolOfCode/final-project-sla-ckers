import React from "react";
import QuizApp from "../components/quizComponents/QuizApp/index";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function QuizPage() {
  return (
    <div>
      <Layout>
        <QuizApp />
        <Footer />
      </Layout>
    </div>
  );
}
