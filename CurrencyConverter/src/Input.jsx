import React from 'react'

function Input({convert,flag,amount,label,onAmountChange,currency = 'inr',onCurrencyChange,currencyOptions = [],amountDisabled = false}) {
    return (
    <>
        <div className=' w-full h-48 flex items-center justify-between px-2'>
            <div className='w-1/2 h-2/3 items-start justify-between flex flex-col'>
                <span className='font-mono text-2xl font-semibold text-gray-200 mx-2 '>{label} Currency</span>   
                <div className='flex w-2/3 h-14 justify-between items-center'>
                    <img src={`https://flagcdn.com/w40/${flag}.png`}  className='border-2 border-white  h-14 w-20 rounded-sm' alt="NA" />
                    <select value={currency} onChange={(e)=> onCurrencyChange(e.target.value)} className='outline-none text-center py-2 font-semibold text-xl rounded-lg'>
                        {currencyOptions.map((curr)=>   
                        (
                            <option key={curr} value={curr}>{curr}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='flex flex-col w-1/2 h-2/3 justify-between items-end'>
                <span className='font-mono text-2xl font-semibold text-gray-200 '>{convert} Amount</span>
                <input type="number" className='px-1 py-3 outline-none bg-gray-100 text-center font-semibold text-lg rounded-lg' value={amount} onChange={(e)=> onAmountChange(Number(e.target.value))} disabled = {amountDisabled} />
            </div>
        </div>
    </>
)
}

export default Input;

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json 
// https://flagcdn.com/en/codes.json