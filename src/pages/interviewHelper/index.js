import React, { useState } from "react";
import * as S from "./style";
import { convertCreateInterviewContentsUrl } from "../../utils/apis";
import axios from "axios";
import { useSpeechSynthesis } from "react-speech-kit";

function InterviewHelper() {
  const [isStart, setIsStart] = useState(true);
  const [isRecord, setIsRecord] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [textToSpeak, setTextToSpeak] = useState("");
  const { speak } = useSpeechSynthesis();

  const readingQuestion = (text) => speak({ text });

  const getQuestion = () => {
    console.log("getQuestion");
    var userId = localStorage.getItem("user_id");
    var interviewId = localStorage.getItem("interview_id");
    var result_id = localStorage.getItem("result_id");

    const response = axios
      .post(
        convertCreateInterviewContentsUrl(userId, interviewId, result_id),
        // 녹음본 담아서 전달
        {},
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data?.isFinished) {
          setIsFinished(true);
          setTextToSpeak("인터뷰가 종료되었습니다. 참여해주셔서 감사합니다");
          readingQuestion("인터뷰가 종료되었습니다. 참여해주셔서 감사합니다");
        } else {
          setTextToSpeak(response.data?.interviewQuestion);
          readingQuestion(response.data?.interviewQuestion);
        }
      })
      .catch(function (error) {});
  };

  const handleButtonClick = (type) => {
    switch (type) {
      case "start":
        getQuestion();
        setIsStart(false);
        break;
      case "record":
        setIsRecord(!isRecord);
        break;
      case "stop":
        getQuestion();
        setIsRecord(!isRecord);
        break;
      default:
    }
  };

  return (
    <S.Wrap>
      <S.Title>{textToSpeak}</S.Title>
      <img
        src={process.env.PUBLIC_URL + "/images/Record/logo.gif"}
        alt="gif"
        style={{ width: "350px", height: "350px" }}
      />
      {isStart ? (
        <img
          src={process.env.PUBLIC_URL + "/images/Record/startButton.svg"}
          alt="start"
          style={{
            width: "150px",
            height: "50px",
            cursor: "pointer",
            display: isFinished ? "none" : "block",
          }}
          onClick={() => handleButtonClick("start")}
        />
      ) : isRecord ? (
        <img
          src={process.env.PUBLIC_URL + "/images/Record/recordButton.svg"}
          alt="record"
          style={{
            width: "150px",
            height: "50px",
            cursor: "pointer",
            display: isFinished ? "none" : "block",
          }}
          onClick={() => handleButtonClick("record")}
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + "/images/Record/stopButton.svg"}
          alt="stop"
          style={{
            width: "150px",
            height: "50px",
            cursor: "pointer",
            display: isFinished ? "none" : "block",
          }}
          onClick={() => handleButtonClick("stop")}
        />
      )}
    </S.Wrap>
  );
}

export default InterviewHelper;
