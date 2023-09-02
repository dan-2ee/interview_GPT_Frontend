import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const InterviewHeader = styled.div`
  display: flex;
  margin: 45px 24px;
  margin-bottom: 10px !important;
`;

export const Title = styled.div`
  color: #333335;
  font-size: 18px;
  font-family: "Pretendard-Bold";
  white-space: pre-line;
`;

export const DoneButton = styled.div`
  width: 50px;
  height: 20px;
  border-radius: 40px;
  padding: 10px;
  border: 1px solid #333335;
  color: #333335;
  font-size: 15px;
  font-family: "Pretendard-Bold";
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckButton = styled.div`
  width: 100px;
  height: 22px;
  border-radius: 40px;
  padding: 10px;
  background: #333335;
  color: white;
  font-size: 14px;
  font-family: "Pretendard-medium";
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const AddButton = styled.div`
  width: 120px;
  height: 22px;
  border-radius: 40px;
  padding: 10px;
  border: 1px solid #333335;
  font-size: 14px;
  font-family: "Pretendard-medium";
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const InterviewerCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 24px;
`;

export const InterviewerCard = styled.div`
  width: 97%;
  height: 20px;
  background: #f1f4f9;
  display: flex;
  border-radius: 8px;
  padding: 24px;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
  > span {
    font-size: 15px;
    font-family: "Pretendard-Medium";
    color: #333335;
    margin-right: 10px;
  }
`;

export const LinkCopyButton = styled.div`
  width: 120px;
  height: 19px;
  border-radius: 40px;
  padding: 10px;
  border: 1px solid #0548fb;
  font-size: 14px;
  color: #0548fb;
  font-family: "Pretendard-medium";
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 16px;
  justify-content: end;
  margin: 400px 0 10px 0;
`;
