import { Button, css } from "@mui/material";

const main_wrap = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const search_wrap = css`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const text_top = css`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;
const search_box = css`
  background-color: #4d7742;
  width: 50%;
  border: 15px solid #4d7742;
  border-radius: 15px;
  div {
    padding: 1.2rem 5px;
    background-color: #ffffff;
    border: 11px solid #ffffff;
    border-radius: 10px;
  }
  input {
    height: 2rem;
    border: 2px solid #4d7742;
    border-radius: 5px;
    margin-right: 10px;
    width: 60%;
  }
  Button {
    background-color: #4d7742;
    color: white;
    :hover {
      background-color: #4d7742;
    }
  }
`;

const cards_wrap = css`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const card = css`
  background-color: #ffffff;
  height: 366px;
  width: 314px;
  border-radius: 10px;
  border: 1px solid #4d7742;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .text_big {
      margin-top: 2rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
    .bottom_wrap {
      margin-bottom: 2rem;
      justify-content: end;
    }
  }
`;
const MainContent = () => {
  return (
    <div css={main_wrap}>
      <div css={search_wrap}>
        <div css={text_top}>오늘의 책을 검색해보세요</div>
        <div css={search_box}>
          <div>
            <input placeholder="책 제목 / 저자 검색" />
            <Button variant="contained" disableElevation>
              검색
            </Button>
          </div>
        </div>
        <div>독서 기록 추가 및 목표 설정은 회원만 이용가능합니다</div>
      </div>
      <div css={cards_wrap}>
        <div css={card}>
          <div>
            <div className="text_big">9월 목표 달성량</div>
            <div>그래프</div>
            <div className="bottom_wrap">
              <span>현재 읽은 권수</span>
              <span>9월 목표 권수</span>
            </div>
          </div>
        </div>
        <div css={card}>
          <div>
            <div className="text_big">오늘의 추천 도서</div>
            <div>이미지</div>
            <div className="bottom_wrap">
              <span>책 제목</span>
              <span>저자 이름</span>
            </div>
          </div>
        </div>
        <div css={card}>달력</div>
      </div>
    </div>
  );
};

export default MainContent;
