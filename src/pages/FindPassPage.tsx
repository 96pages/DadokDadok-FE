import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useState } from "react";

const container = css`
  background-color: #f6f6f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const password_card = css`
  width: 408px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px #4d7742a2;
  text-align: center;
  align-content: center;
  padding: 50px;
  padding-bottom: 50px;
`;

const password_btn = css`
  margin-top: 20px;
  background-color: #4d7742 !important;
  width: 408px;
  height: 3rem;
  font-size: 1rem !important;
`;

const input_wrap = css`
  margin-top: 10px;
  width: 100%;
  display: flex;
`;

const inputstyle = css`
  border: 1px solid #e0e0e0;
  height: 28px;
  padding: 10px;
  border-radius: 5px;
  flex: 1;
`;

const FindPassPage = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div css={container}>
      <div css={password_card}>
        {toggle === true ? (
          <div>
            <h2>비밀번호 찾기</h2>
            <div style={{ textAlign: "left" }}>
              <span>아이디</span>
            </div>
            <div css={input_wrap}>
              <input css={inputstyle} placeholder="ex) abc@email.com"></input>
            </div>
            <Button
              css={password_btn}
              onClick={() => setToggle(!toggle)}
              disableElevation
              variant="contained"
            >
              임시 비밀번호 발급
            </Button>
          </div>
        ) : (
          <div>
            <h2>비밀번호 찾기</h2>
            <span>입력하신 이메일</span>
            <span style={{ fontWeight: "600" }}> abc@email.com으로</span>
            <br />
            <span>새로운 임시 비밀번호가 발급되었습니다</span>
            <br />
            <br />
            <span>로그인 후 비밀번호를 꼭 변경해주세요.</span>
            <Button
              css={password_btn}
              onClick={() => setToggle(!toggle)}
              disableElevation
              variant="contained"
            >
              로그인 하기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindPassPage;
