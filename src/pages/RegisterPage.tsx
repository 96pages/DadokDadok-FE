import { css } from "@emotion/react";
import { Button } from "@mui/material";
import "../styles/Register.css";

const container = css`
  background-color: #f6f6f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const item_wrap = css`
  margin-top: 10px;
`;

const input_wrap = css`
  width: 100%;
  display: flex;
`;

const inputstyle = css`
  border: 1px solid #e0e0e0;
  height: 28px;
  padding: 10px;
  border-radius: 5px;
  flex: 4;
`;

const warning = css`
  font-size: 12px;
  margin-left: 10px;
  color: #f67373;
`;

const btn_yellow = css`
  margin-left: 10px;
  background-color: #f1b24a !important;
  height: 48px;
  flex: 1;
`;

const select_style = css`
  border: 1px solid #e0e0e0;
  padding: 15px 10px;
  border-radius: 5px;
  flex: 4;
`;

const register_btn = css`
  margin-top: 20px;
  background-color: #4d7742 !important;
  width: 408px;
  height: 3rem;
  font-size: 1rem !important;
`;

const RegisterPage = () => {
  return (
    <div css={container}>
      <div className="register_card">
        <div>
          <span className="text_small">다독다독</span>
          <br />
          <span className="text_big">회원가입</span>
        </div>
        <div css={item_wrap}>
          <span>아이디</span>
          <div css={input_wrap}>
            <input css={inputstyle} placeholder="ex) abc@email.com"></input>
            <Button disableElevation css={btn_yellow} variant="contained">
              중복확인
            </Button>
          </div>
        </div>
        <div css={item_wrap}>
          <span>비밀번호</span>
          <span css={warning}>숫자, 특수문자 포함 8~12자로 입력해주세요</span>
          <div css={input_wrap}>
            <input css={inputstyle} placeholder="비밀번호"></input>
          </div>
        </div>
        <div css={item_wrap}>
          <span>비밀번호 확인</span>
          <div css={input_wrap}>
            <input css={inputstyle} placeholder="비밀번호 확인"></input>
          </div>
        </div>
        <div css={item_wrap}>
          <span>연령</span>
          <div css={input_wrap}>
            <select css={select_style}>
              <option>선택안함</option>
              <option>10대</option>
              <option>20대</option>
              <option>30대</option>
              <option>40대</option>
              <option>50대</option>
              <option>60대</option>
              <option>70대</option>
            </select>
          </div>
        </div>
        <div css={item_wrap}>
          <span>성별</span>
          <div css={input_wrap}>
            <select css={select_style}>
              <option>선택안함</option>
              <option>남자</option>
              <option>여자</option>
            </select>
          </div>
        </div>
        <div>
          <Button css={register_btn} variant="contained">
            회원가입
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
