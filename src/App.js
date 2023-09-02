import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import JoinPage from "./pages/join";
import HomePage from "./pages/home";
import BasicInfo from "./pages/interviewPrepare/basicInfo";
import QuestionList from "./pages/interviewPrepare/questionList";
import InterviewHelper from "./pages/interviewHelper";
import ContentSummary from "./pages/interviewSummary/contentSummary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/joinpage" element={<JoinPage />} />
        {/* 홈화면 및 대시보드 */}
        <Route path="/homepage" element={<HomePage />} />
        {/* 인터뷰 질문 자동 생성 */}
        <Route path="/prepare/basic-info" element={<BasicInfo />} />
        <Route path="/prepare/question-list" element={<QuestionList />} />
        {/* 실시간 인터뷰 도우미 */}
        <Route path="/helper" element={<InterviewHelper />} />
        {/* 인터뷰 내용 정리 및 인사이트 도출 */}
        <Route path="/summary/content-summary" element={<ContentSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
