import Countdown from "./Countdown";

export default function App() {
  return (
    <>
      <div className="title">
        <p>
          Countdown Component
        </p>
      </div>
      <Countdown endDate="July 9, 2023 18:00:00" />
    </>
  );
}