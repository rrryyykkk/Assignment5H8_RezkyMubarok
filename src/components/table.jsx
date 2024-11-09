import axios from "axios";
import { useEffect, useState } from "react";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=00561ec1218e418584953206b3fc3c86"
      )
      .then((response) => {
        console.log(response.data.rates);
        let rates = [
          {
            currency: "CAD",
            exchange_rate: response.data.rates.CAD,
            we_buy: 1.05 * response.data.rates.CAD,
            we_sell: 0.95 * response.data.rates.CAD,
          },
          {
            currency: "EUR",
            exchange_rate: response.data.rates.EUR,
            we_buy: 1.05 * response.data.rates.EUR,
            we_sell: 0.95 * response.data.rates.EUR,
          },
          {
            currency: "IDR",
            exchange_rate: response.data.rates.IDR,
            we_buy: 1.05 * response.data.rates.IDR,
            we_sell: 0.95 * response.data.rates.IDR,
          },
          {
            currency: "JPY",
            exchange_rate: response.data.rates.JPY,
            we_buy: 1.05 * response.data.rates.JPY,
            we_sell: 0.95 * response.data.rates.JPY,
          },
          {
            currency: "CHF",
            exchange_rate: response.data.rates.CHF,
            we_buy: 1.05 * response.data.rates.CHF,
            we_sell: 0.95 * response.data.rates.CHF,
          },
          {
            currency: "GBP",
            exchange_rate: response.data.rates.GBP,
            we_buy: 1.05 * response.data.rates.GBP,
            we_sell: 0.95 * response.data.rates.GBP,
          },
        ];

        setData(rates);
      });
  }, []);

  return (
    <>
      <div className="container lg bg-slate-400  justify-items-center justify-center">
        <table className="table-auto text-center">
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            {data.map((rate, index) => {
              return (
                <tr key={index}>
                  <td>{rate.currency}</td>
                  <td>{rate.exchange_rate}</td>
                  <td>{rate.we_buy}</td>
                  <td>{rate.we_sell}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
