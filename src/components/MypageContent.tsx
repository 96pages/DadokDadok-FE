import { css } from "@emotion/react";
import { Button } from "@mui/material";
import BarChart from "./BarChart";
import RadarChart from "./RadarChart";

const mypage_container = css`
  flex: 1;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const user_wrap = css`
  height: 23%;
  background-color: #f6f6f2;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  position: relative;
`;
const user_logo = css`
  height: 100%;
  width: 10%;
  margin-right: 1.2%;
  border-radius: 15px;
  background-color: #ffffff;
`;
const user_text = css`
  font-weight: 600;
  font-size: 1rem;
  .user_name {
    font-size: 1.5rem;
  }
`;
const modify_btn = css`
  position: absolute;
  border-radius: 10px;
  background-color: #4d7742;
  right: 20px;
`;
const read_data_wrap = css`
  height: 70%;
  display: flex;
  justify-content: space-between;
`;
const left_wrap = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const goal_card = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #f6f6f2;
  height: 50%;
  border-radius: 15px;
  margin-bottom: 4%;
  .goal_title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .goal_number {
    font-size: 4rem;
    font-weight: 600;
    span {
      font-size: 1.4rem;
    }
  }
`;
const goal_btn = css`
  border-radius: 10px;
  background-color: #4d7742;
  height: 3rem;
  width: 90%;
`;
const graph_card = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #f6f6f2;
  height: 50%;
  margin-top: 4%;
  border-radius: 15px;
  .graph_title {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
const right_wrap = css`
  margin-left: 1%;
  flex: 5;
`;
const genre_card = css`
  height: calc(100% - 40px);
  padding: 20px;
  background-color: #f6f6f2;
  border-radius: 15px;
`;
const genre_title = css`
  font-size: 1.5rem;
  font-weight: 600;
`;
const genre_wrap = css`
  display: flex;
  justify-content: space-around;
`;
const genre_text = css`
`
const genre_graph = css`
width: 50%;
`

const MypageContent = () => {
  return (
    <div css={mypage_container}>
      <div css={user_wrap}>
        <div css={user_logo}>로고</div>
        <div css={user_text}>
          <div className="user_name">다독다독123</div>
          <div>abc@email.com</div>
        </div>
        <Button css={modify_btn} disableElevation variant="contained">
          정보 수정하기
        </Button>
      </div>
      <div css={read_data_wrap}>
        <div css={left_wrap}>
          <div css={goal_card}>
            <div className="goal_title">6월 독서 목표</div>
            <div className="goal_number">
              10<span>권</span>
            </div>
            <Button css={goal_btn} variant="contained" disableElevation>
              목표 설정하기
            </Button>
          </div>
          <div css={graph_card}>
            <div className="graph_title">월별 독서 권수</div>
            <div>
              <BarChart />
            </div>
          </div>
        </div>
        <div css={right_wrap}>
          <div css={genre_card}>
            <div css={genre_title}>나의 독서 성향</div>
            <div css={genre_wrap}>
              <div css={genre_text}>장르별 독서 퍼센트</div>
              <div css={genre_graph}>
                <RadarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageContent;
