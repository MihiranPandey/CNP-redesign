import React from 'react'

export default function Button({text='LEARN MORE'}) {
  return (
    <div className='button'>
        {text}
        <style>
            {`

            .button {
                display: flex;
                width: 180px;
                height: 43px;
                border-radius: 16px;
                background: #0074AD;
                color: white;
                font-weight: 900;
                font-size: 16px;
                line-height: 150%;
                align-items: center;
                text-align: center;
                justify-content: center;
                letter-spacing: 0.1em;
            }


            `}
        </style>
    </div>
  )
}
