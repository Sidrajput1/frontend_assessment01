import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard';
import './result.css';

function ResultsSide() {
    const [resultsData,setResultsData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [err,setErr] = useState("");


    useEffect(() => {
        fetch("/all_data/results.json")
            .then((res) => {
                if(!res.ok){
                    throw new Error("Failed to load results");
                }

                return res.json();
            })
            .then((data) => {
                setResultsData(data);
                setLoading(false);
            })
            .catch((error) => {
                setErr(error.message);
                setLoading(false);
            })
    },[]);

    if(loading){
        return <p className='result-status'>Loading results....</p>
    }

    if(err){
        return <p className='result-status'>{err}</p>
    }
   return (
   <section className='results-section'>
        <h2 className='results-title'> Result You"ll love</h2>

        <div className='results-container'>
                {resultsData.map((item) =>(
                    <ResultCard key={item.id} item={item} />
                ))}
        </div>
   </section>
  )
}

export default ResultsSide