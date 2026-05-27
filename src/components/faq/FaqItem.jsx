import React from 'react'

function FaqItem({items,isOpen,onToggle}) {
  return (
    <div className='faq-item'>
        <button className='faq-question' onClick={onToggle}>
            <span>
                {items.question}
            </span>
            <span className={`faq-icon ${isOpen ? "open": ""}`}>
                +
            </span>
        </button>

        <div className={`faq-answer-wrapper ${isOpen ? "active" : ""}`}>
  <div className="faq-answer">
    <p>{items.answer}</p>
  </div>
</div>
    </div>
  )
}

export default FaqItem