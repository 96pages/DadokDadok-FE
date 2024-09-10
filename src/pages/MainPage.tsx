import { css } from "@emotion/react";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

const container = css`
  background-color: #4d7742;
  height: 100vh;
  min-width: 1500px;
  min-height: 750px;
  display: flex;
`;
const logo = css`
  display: flex;
  position: absolute;
  left: 70px;
  background-color: #f1b24a;
  height: 120px;
  width: 120px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.4rem;
`;
const body_wrap = css`
  display: flex;
  background-color: #ffffff;
  margin: 30px;
  border-radius: 15px;
  width: 100%;
`;
const nav_wrap = css`
  width: 200px;
`;

const MainPage = () => {
  return (
    <div css={container}>
      <div css={logo}>
        <div>다독다독</div>
      </div>
      <div css={body_wrap}>
        <div css={nav_wrap}>
          <NavigationBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
