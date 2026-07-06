import "./App.css";
import { useCountdown } from "./hooks/useCountdown";
import audio1 from "./assets/audio.mp3";
import { useRef } from "react";
import Confetti from "react-confetti";


const participants = [
  "Delower",
  "Latifa",
  "Iffat",
  "Ujjal",
  "Ferdowsi",
  "Imtiaz Jony",
  "Shohid",
  "Shohid's Wife",
  "Tarek",
  "Amena",
  "Liton",
  "Liton's Wife",
];

const ParticipantsMarquee = () => (
  <div className="participants-panel">
    <p className="participants-label">JOINING THE TOUR</p>
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...participants, ...participants].map((name, i) => (
          <p key={i} className="participant-name">{name}</p>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  const targetDate = new Date(
    "July 10, 2026 11:00:00 GMT +0600"
  ).toISOString();
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const audioRef = useRef(null);
  const audioRef1 = useRef(null);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <section className="banner" onClick={() => audioRef1.current.play()}>
        <Confetti />
        <audio
          ref={audioRef1}
          autoPlay
          loop
          preload="auto"
          style={{ display: "none" }}
        >
          <source src={audio1} type="audio/mp3" />
        </audio>
        <ParticipantsMarquee />
        <div className="main-content">
          <h1 className="text">{`Tour De Bhawal`}</h1>
          <p className="subtitle">📍 Grand Bhawal Resort &nbsp;•&nbsp; July 10, 2026 &nbsp;•&nbsp; 11:00 AM</p>
          <div className="timerContainer">
            <div>
              <p className="timerNumber">0</p>
              <p className="timerLabel">DAYS</p>
            </div>
            <div>
              <p className="timerNumber">0</p>
              <p className="timerLabel">HOURS</p>
            </div>
            <div>
              <p className="timerNumber">0</p>
              <p className="timerLabel">MINUTES</p>
            </div>
            <div>
              <p className="timerNumber">0</p>
              <p className="timerLabel">SECONDS</p>
            </div>
          </div>
          <div className="vibes">
            <span className="vibe-chip">🎉 It&apos;s Time!</span>
            <span className="vibe-chip">🏕️ We&apos;re Here</span>
            <span className="vibe-chip">🌿 Bhawal</span>
            <span className="vibe-chip">🎵 Let&apos;s Go!</span>
          </div>
          <h1 className="bangla">এই মুহূর্তটা এসে গেছে! 🎉</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="banner" onClick={() => audioRef.current.play()}>
      <audio
        ref={audioRef}
        autoPlay
        loop
        preload="auto"
        style={{ display: "none" }}
      >
        <source src={audio1} type="audio/mp3" />
      </audio>
      <ParticipantsMarquee />
      <div className="main-content">
        <h1 className="text">{`Tour De Bhawal`}</h1>
        <p className="subtitle">📍 Bhawal National Park &nbsp;•&nbsp; July 10, 2026 &nbsp;•&nbsp; 11:00 AM</p>
        <div className="timerContainer">
          <div className="timeSection">
            <p className="timerNumber">{days}</p>
            <p className="timerLabel">DAYS</p>
          </div>
          <div>
            <p className="timerNumber">{hours}</p>
            <p className="timerLabel">HOURS</p>
          </div>
          <div>
            <p className="timerNumber">{minutes}</p>
            <p className="timerLabel">MINUTES</p>
          </div>
          <div>
            <p className="timerNumber">{seconds}</p>
            <p className="timerLabel">SECONDS</p>
          </div>
        </div>
        <div className="vibes">
          <span className="vibe-chip">‍♂️ Swimming</span>
          <span className="vibe-chip">🌊 Fun</span>
          <span className="vibe-chip">🎵 Good Vibes</span>
          <span className="vibe-chip">🌿 Nature</span>
          <span className="vibe-chip">📸 Memories</span>
        </div>
        <h1 className="bangla">সেই-ইইইইই মজা হবে !</h1>
      </div>
    </section>
  );
}

export default App;
