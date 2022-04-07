import axios from "axios";
import React, { useEffect, useState } from "react";
import One from "./One";

export default function Restaurants() {
  const [url, setUrl] = useState("http://localhost:3030/restaurants?_limit=5");
  const [data, setData] = useState([]);

  useEffect(() => {
    
  let mounted = true;
    axios.get(url).then((res) => {
      if(mounted) {
        setData(res.data);
      }
      

      return ()=> mounted = false;
    });
  }, [url]);

   
  const handlePage = (n) => {
    for (let i = 0; i < 5; i++) {
      if (url.includes(`_page=${i}`)) {
        setUrl(url.replace(`_page=${i}`, `_page=${n}`));
        return;
      }
    }
    setUrl(url + `&_page=${n}`);
  };

  const handleRating = (n) => {
    for (let i = 0; i < 5; i++) {
      if (url.includes(`rating_gte=${i}`)) {
        setUrl(url.replace(`rating_gte=${i}`, `rating_gte=${n}`));
        return;
      }
    }
    setUrl(url + `&rating_gte=${n}`);
  };

  const handleSort = (x) => {
    if (url.includes(`asc`)) {
      if (x == "asc") {
        return;
      }
      setUrl(url.replace(`asc`, x));
      return;
    }
     else if (url.includes(`desc`)) {
      if (x == "desc") {
        return;
      }
      setUrl(url.replace(`desc`, x));
      return;
    }

    setUrl(url + `&_sort=cost_for_two&_order=${x}`);
  };

  const handlePayment = (n) => {
    if (url.includes(`cash=true`)) {
      if (n == "cash") {
        return;
      }
      if (n == "all") {
        setUrl(url.replace(`cash=true`, ``));
        return;
      }
      setUrl(url.replace(`cash=true`, `${n}=true`));

      return;
    } else if (url.includes(`card=true`)) {
      if (n == "card") {
        return;
      }
      if (n == "all") {
        setUrl(url.replace(`card=true`, ``));
        return;
      }
      setUrl(url.replace(`card=true`, `${n}=true`));
      return;
    } else if (url.includes(`upi=true`)) {
      if (n == "upi") {
        return;
      }
      if (n == "all") {
        setUrl(url.replace(`upi=true`, ``));
        return;
      }
      setUrl(url.replace(`upi=true`, `${n}=true`));
      return;
    }

    setUrl(url + `&${n}=true`);
  };

  return (
    <div className="text-center">
      <div>
        {" "}
        Cost for 2:
        <button onClick={() => handleSort("desc")}>High to Low</button>
        <button onClick={() => handleSort("asc")}>Low to High</button>
      </div>

      <div className="flex p-2 w-fit m-auto justify-evenly">
        filter on Rating:
        <button onClick={() => handleRating(1)}>1</button>
        <button onClick={() => handleRating(2)}>2</button>
        <button onClick={() => handleRating(3)}>3</button>
        <button onClick={() => handleRating(4)}>4</button>
      </div>

      <div className="flex p-2 w-fit m-auto justify-evenly">
        filter on Payment method:
        <button onClick={() => handlePayment("card")}>Card</button>
        <button onClick={() => handlePayment("cash")}>Cash</button>
        <button onClick={() => handlePayment("upi")}>UPI</button>
        <button onClick={() => handlePayment("all")}>ALL</button>
      </div>

      <div className="flex p-2 w-fit m-auto justify-evenly">
        Page No.:
        <button onClick={() => handlePage(1)}>1</button>
        <button onClick={() => handlePage(2)}>2</button>
        <button onClick={() => handlePage(3)}>3</button>
        <button onClick={() => handlePage(4)}>4</button>
      </div>

      <div className="grid w-[60%] lg:w-[90%] m-auto grid-cols-1 lg:grid-cols-2 ">
        {data.map((e) => (
          <One data={e} key={e.id} />
        ))}
      </div>
    </div>
  );
}
