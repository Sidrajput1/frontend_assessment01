import React, { useEffect, useState } from "react";
import "./wistle.css";
import WhistleCard from "./WhistleCard";

function WhyWistle() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Fetching data...");
    fetch("/all_data/whyWhistle.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        console.log("Data fetched successfully");
        return res.json();

        console.log("Data parsed successfully", data);
      })
      .then((result) => {
        console.log(result);

        setData(result);

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="status-message">Loading.....</p>;
  }

  if (error) {
    return <p className="status-message">{error}</p>;
  }
  return (
    <section className="why-whistle">
      <h2 className="section-title">Why Whistle?</h2>

      <div className="whistle-container">
        {data.map((item) => (
          <WhistleCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default WhyWistle;
