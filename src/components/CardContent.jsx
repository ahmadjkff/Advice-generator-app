import { useEffect } from "react";
import { useState } from "react";

function CardContent() {
  const [adviceNumber, setAdviceNumber] = useState(undefined);
  let [advice, setAdvice] = useState("Press the Dice to generate an adivce");

  function randomAdviceNumber(min = 1, max = 224) {
    const newAdviceNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setAdviceNumber(Number(newAdviceNumber));
  }

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch(
          `https://api.adviceslip.com/advice/${adviceNumber}`
        );
        const data = await response.json();

        setAdvice(data.slip.advice);
      } catch (error) {
        setAdvice("Faild to fetch Advice (press The dice agin)");
      }
    };

    fetchAdvice();
  }, [adviceNumber]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-NeonGreen mb-7">ADVICE #{adviceNumber}</p>
          <h4 className="text-LightCyan break-words text-lg mb-3">
            "{advice}"
          </h4>

          <p className="">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </p>
        </div>
        <div className="absolute top-64 left-[740px]">
          <button
            className="bg-NeonGreen p-4 rounded-full"
            onClick={() => randomAdviceNumber()}
          >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardContent;
