import React from "react";
import QuizApp from "../components/quizComponents/QuizApp/index";
import Layout from "../components/Layout/Layout";

export default function QuizPage() {
  return (
    <div>
      <Layout>
        <QuizApp />
      </Layout>
    </div>
  );
}
