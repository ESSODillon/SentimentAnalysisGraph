import { useState } from "react";
import ml5 from "ml5";
import SentimentGraph from "./SentimentGraph";
const sentiment = ml5.sentiment("movieReviews");

export default function SenitmentDisplay() {
  const [sentText, setSentText] = useState("");
  const [sentimentalScore, setSentimentalScore] = useState("");
  const [scoresList, setScoresList] = useState([]);

  return (
    <div>
      <textarea
        value={sentText}
        onChange={(event) => {
          setSentText(event.target.value);
        }}
      />
      <button onClick={() => calculateSentiment(sentText)}>
        Calculate sentiment
      </button>
      <p>Sentimental Score: {sentimentalScore}</p>

      <SentimentGraph props={scoresList} />
    </div>
  );

  function calculateSentiment(text) {
    //predict sentiment
    //pass sentiment out of this component
    const prediction = sentiment.predict(text);
    setSentimentalScore(prediction.score);
    setSentText("");

    scoresList.push(prediction.score);
    // console.log(scoresList);

    if (scoresList.length >= 9) {
      scoresList.shift();
    }
  }
}
