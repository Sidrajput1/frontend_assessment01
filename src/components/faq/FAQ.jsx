import React, { useEffect, useState } from 'react'
import FaqItem from './FaqItem';
import './faq.css';

function FAQ() {
    const [faqData, setFaqData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");
    const [openIndex,setOpenIndex] = useState(null);


    useEffect(() => {
        fetch("/all_data/faq.json")
            .then((res) => {
                if(!res.ok){
                    throw new Error("Failed to load faq");
                };

                return res.json();
            })
            .then((data) => {
                setFaqData(data);
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false)
            })
    },[]);


    const toggleFaq = (index) => {
        console.log("openIndex is " , openIndex);
        console.log(" index is", index)
        setOpenIndex(openIndex === index ? null : index);
    }
    if(loading){
        return <p className='faq-status'>Loading Faq...</p>
    }
    if (error) {
    return <p className="faq-status">{error}</p>;
  }

  return (
    <section className='faq-section'>
         <h2 className="faq-title">
        <span>Got Questions?</span> We’ve got answers
      </h2>

      <div className='faq-container'>
        {faqData.map((item,index) => (
            <FaqItem
                key={item.id}
                items={item}
                isOpen={openIndex===index}
                onToggle={() => toggleFaq(index)}
            />
        ))}

      </div>
    </section>
  )
}

export default FAQ