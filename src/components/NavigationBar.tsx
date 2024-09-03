import { css } from "@emotion/react";
import "../styles/navIconPos.css";
import iconSprite from "../assets/main_icon.png";
import iconSpriteWhite from "../assets/main_icon_white.png";
import "../styles/navIconPos.css";

const content_wrap = css`
  display: flex;
  flex-direction: column;
  height: calc(100% - 120px);
  margin-top: 120px;
  width: 200px;
`;

const user_wrap = css`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #b3b3b3;
  margin-bottom: 50px;
`;

const menu_wrap = css`
  flex-grow: 1;
  div {
    display: flex;
    align-items: center;
    margin: 8px 10px;
    padding: 5px 0px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      color: #ffffff;
      background-color: #f1b24a;
    }
    :hover .icon {
      filter: brightness(0) invert(1);
    }
  }
`;

const icon_style = css`
  width: 26px;
  height: 26px;
  padding: 0 !important;
  margin: 0 10px 0 20px !important;
  background-image: url(${iconSprite});
  background-repeat: no-repeat;
  :hover {
    background-image: url(${iconSpriteWhite});
  }
`;

const login_wrap = css`
  margin-top: auto;
  margin-bottom: 10px;
  div {
    display: flex;
    align-items: center;
    margin: 8px 10px;
    padding: 5px 0px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      color: #ffffff;
      background-color: #f1b24a;
    }
    :hover .icon {
      filter: brightness(0) invert(1);
    }
  }
`;

const NavigationBar = () => {
  return (
    <div css={content_wrap}>
      <div css={user_wrap}>
        <div>Lv.0</div>
        <div>로그인하세요</div>
      </div>
      <div css={menu_wrap}>
        <div>
          <div css={icon_style} className="icon icon-main" />
          메인페이지
        </div>
        <div>
          <div css={icon_style} className="icon icon-record" />
          독서 기록
        </div>
        <div>
          <div css={icon_style} className="icon icon-mypage" />
          마이페이지
        </div>
        <div>
          <div css={icon_style} className="icon icon-like" />찜 목록
        </div>
      </div>
      <div css={login_wrap}>
        <div>
          <div css={icon_style} className="icon icon-logout" />
          로그아웃
        </div>
        <div>
          <div css={icon_style} className="icon icon-register" />
          회원가입
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
