import { Button, css } from "@mui/material";
import DoughnutChart from "./DoughnutChart";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const main_wrap = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const search_wrap = css`
  margin-top: 3%;
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
    padding: 0px 5px;
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
  margin-bottom: 3%;
`;

const card = css`
  background-color: #ffffff;
  height: 366px;
  width: 314px;
  border-radius: 15px;
  border: 3px solid #4d7742;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .text_big {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .image_wrap {
    background-color: #4d7742;
    height: 180px;
    width: 140px;
  }

  .bottom_wrap {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .bottom_goal {
      display: flex;
      width: 50%;
      justify-content: space-between;
      span {
        font-weight: 600;
      }
    }
  }
  .calendar_wrap {
    width: 100%;
    height: 100%;
    .react-calendar {
      display: flex;
      flex-direction: column;
      border: none;
      background: none;
      height: 100%;
    }
    .react-calendar__navigation {
      background: #4d7742;
      border-radius: 5px 5px 0px 0px;
      height: 15%;
      margin: 0;
      span {
        font-size: 1.2rem;
        font-weight: 600;
        color: #ffffff;
      }
      button {
        background-color: #4d7742;
      }
    }
    .react-calendar__viewContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 85%;
      .react-calendar__month-view__weekdays {
        font-size: 1rem;
        abbr {
          text-decoration: none;
        }
      }
      .react-calendar__month-view__days {
        font-size: 1.1rem;
        font-weight: 600;
      }
      .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575 !important;
      }
      .react-calendar__month-view__days__day--weekend:nth-child(7n) {
        color: #5d90f0;
      }
      .react-calendar__month-view__days__day--weekend {
        color: #f67373;
      }
      .react-calendar__month-view__weekdays__weekday--weekend
        abbr[title="토요일"] {
        color: #5d90f0;
      }
      .react-calendar__month-view__weekdays__weekday--weekend
        abbr[title="일요일"] {
        color: #f67373;
      }
      .react-calendar__month-view__days__day {
        position: relative;
      }
    }
    .react-calendar__month-view {
      display: flex;
      width: 90%;
      justify-content: center;
      align-items: center;
    }
    .react-calendar__tile--now {
      background-color: #d3d3d3;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus,
    .react-calendar__tile--active {
      background-color: #4d7742;
    }
  }
`;

const calendar_dot = css`
  background-color: #f1b24a;
  border-radius: 100%;
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: calc(50% - 0.2rem);
  top: 7%;
`;

const calendar_bottom = css`
  position: absolute;
  bottom: 0.6rem;
  right: 1.6rem;
  display: flex;
  align-items: center;
  .bottom_dot {
    background-color: #f1b24a;
    border-radius: 100%;
    width: 0.4rem;
    height: 0.4rem;
  }
  .bottom_text {
    margin-left: 5px;
    font-size: 0.6rem;
    font-weight: 600;
  }
`;

const MainContent = () => {
  const today = new Date();
  const [date, setDate] = useState(today);

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  const readDay = ["2024-06-12", "2024-09-02", "2024-09-22"];

  const addDot = ({ date }) => {
    const contents = [];
    if (readDay.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      contents.push(
        <div css={calendar_dot} key={moment(date).format("YYYY-MM-DD")}></div>
      );
    }
    return <>{contents}</>;
  };

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
          <div className="text_big">9월 목표 달성량</div>
          <div style={{ width: "50%" }}>
            <DoughnutChart />
          </div>
          <div className="bottom_wrap">
            <div className="bottom_goal">
              <span>현재 읽은 권수</span>
              <span>4권</span>
            </div>
            <div className="bottom_goal">
              <span>9월 목표 권수</span>
              <span>10권</span>
            </div>
          </div>
        </div>
        <div css={card}>
          <div className="text_big">오늘의 추천 도서</div>
          <div className="image_wrap">이미지</div>
          <div className="bottom_wrap">
            <div>책 제목</div>
            <div>저자 이름</div>
          </div>
        </div>
        <div css={card}>
          <div className="calendar_wrap">
            <Calendar
              locale="kr"
              calendarType="gregory"
              onChange={handleDateChange}
              value={date}
              formatDay={(locale, date) =>
                date.toLocaleString("en", { day: "numeric" })
              }
              prev2Label={null}
              next2Label={null}
              minDetail="month"
              tileContent={addDot}
            />
            <div css={calendar_bottom}>
              <div className="bottom_dot"></div>
              <div className="bottom_text">책 읽은 날</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
