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

        {isOpen && (
            <div className='faq-answer'>
                <p>{items.answer}</p>
            </div>
        )}
    </div>
  )
}

export default FaqItem