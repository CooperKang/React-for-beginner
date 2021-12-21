import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [need, setNeed] = useState(1);
  const onChange = (event) => {
    setCost(event.target.value);
    setNeed(1);
  };
  const handleInput = (event) => {
    setNeed(event.target.value);
  };
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins!</h1>
      <em>({coins.length}개의 코인을 찾았습니다.)</em>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <div>
          코인을 선택하세요:&nbsp;
          <input type="text" list="coinList" onChange={onChange} />
          <datalist id="coinList">
            <option>Select Coin!</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </datalist>
        </div>
      )}
      <h2>넣을 돈을 입력하시오</h2>
      <div>
        <input type="number" value={need} onChange={handleInput} />$
      </div>
      <h2>You can get {need / cost} BTC</h2>
    </div>
  );
}

export default App;
