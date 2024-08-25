import { css } from "@emotion/react";
import { Button } from "@mui/material";
import "../styles/Login.css";

const container = css`
  background-color: #f6f6f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  return (
    <div css={container}>
      <div className="login_card">
        <div className="logo_box">
          Logo
        </div>
        <div>
          <input className="input_box" placeholder="아이디" />
        </div>
        <div>
          <input className="input_box" placeholder="비밀번호" />
        </div>
        <div>
          <Button disableElevation className="button" variant="contained">
            로그인
          </Button>
        </div>
        <div>
          <span className="text_clickable">비밀번호 찾기</span>
        </div>
        <div>
          <span className="text_clickable">회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
