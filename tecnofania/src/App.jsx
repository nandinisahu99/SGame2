import {useState} from "react";
import "./app.css";
import Sques from "./components/Sques";
import Timer from "./components/Timer";
import Begin from "./components/Begin";
import Interval from "./components/Interval";

function App() {
  const [questionNumber, setQuestionNumber]= useState(1);
  const [stop,setStop]=useState(false);
  const [username, setUsername] =useState(null);
  const [LevelUp, setLevelUp]=useState(()=>false);
  const [Msg, setMsg]=useState("Thank you for participating");
  const [LevelStarted, setLevelStarted]=useState(false);

  const data=[
    {
    id: 1,
    question: "4+5",
    answer: [
      {
        text: "9",
        correct: true,
      },
      {
        text: "7",
        correct: false,
      },
      {
        text: "19",
        correct: false,
      },
      {
        text: "1",
        correct: false,
      },
    ],
    },
    {
      id: 2,
      question: "78 binary conversion",
      answer: [
        {
          text: "11100",
          correct: false,
        },
        {
          text: "1100011",
          correct: true,
        },
        {
          text: "1010101",
          correct: false,
        },
        {
          text: "0001010",
          correct: false,
        },
      ],
      },
      {
        id: 3,
        question: "Question 3",
        answer: [
          {
            text: "false",
            correct: false,
          },
          {
            text: "true",
            correct: true,
          },
          {
            text: "false",
            correct: false,
          },
          {
            text: "false",
            correct: false,
          },
        ],
        }
  ]

  const data1=[
    {
    id: 1,
    question: "5+5",
    answer: [
      {
        text: "10",
        correct: true,
      },
      {
        text: "7",
        correct: false,
      },
      {
        text: "19",
        correct: false,
      },
      {
        text: "1",
        correct: false,
      },
    ],
    },
    {
      id: 2,
      question: "79 binary conversion",
      answer: [
        {
          text: "11100",
          correct: true,
        },
        {
          text: "1100011",
          correct: false,
        },
        {
          text: "1010101",
          correct: false,
        },
        {
          text: "0001010",
          correct: false,
        },
      ],
      },
      {
        id: 3,
        question: "Question 3",
        answer: [
          {
            text: "false",
            correct: false,
          },
          {
            text: "true",
            correct: true,
          },
          {
            text: "false",
            correct: false,
          },
          {
            text: "false",
            correct: false,
          },
        ],
        }
  ]
  return (
    <div className="app">
      {(username)? (
      <>
      <div className="main">
          {(stop) ? ( 
          <>
            <h1 className="thank">{Msg}</h1>
            {LevelUp? (
            <>
            <Interval setMsg={setMsg} setStop={setStop} LevelUp={LevelUp} setLevelUp={setLevelUp} username={username}/>
            </>
             ): (<></>)
             }
            
          </>) : (
            <>
              <div className="top">
              <div className="timer">
                <Timer setStop={setStop} setMsg={setMsg} questionNumber={questionNumber} LevelUp={LevelUp} setLevelUp={setLevelUp}/>
              </div>
              </div>
              <div className="bottom">
              <Sques data={data} data1={data1} setStop={setStop} setMsg={setMsg} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} LevelUp={LevelUp} setLevelUp={setLevelUp} username={username} setUsername={setUsername}/>
              </div>
            </>
          )}
      </div>
      </>
      ) : (<Begin setUsername={setUsername} LevelUp={LevelUp} setLevelUp={setLevelUp}/>)}
    </div>
  );
}

export default App;

