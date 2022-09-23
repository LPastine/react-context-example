const Poker = () => {
  return (
    <>
      <div className="Header">
        <header>
          <p>React useReducer and useContext example Poker App</p>
        </header>
      </div>
      <div className="ContentArea">
        <div className="LeftPanel">{/* <PlayersList /> */}</div>
        <div className="MainContentArea">{/* <Players /> */}</div>
        <div className="RightPanel">{/* <GameStatus /> */}</div>
      </div>
      <div className="Footer">{/* <AddPlayer /> */}</div>
    </>
  );
};

export default Poker;
