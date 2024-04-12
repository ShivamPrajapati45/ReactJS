import React from 'react';
import Input from './Input';
import { useState } from 'react';
import useCurrency from './Hooks/useCurrency';


function App() {
  let[from,setFrom] = useState("inr");
  let[to,setTo] = useState("usd");
  let[amount,setAmount] = useState(0);
  let[convertAmt,setConvertAmt] = useState(0);
  let Currency = useCurrency(from);
  let currencyKeys = Object.keys(Currency);

  const result= () => {
    setConvertAmt(amount*Currency[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertAmt)
    setConvertAmt(amount)
  }



  return (
    <>
    <div className='w-full flex justify-center my-3 fixed'>
      <span className=' font-semibold text-4xl text-white font-mono underline'>Currency Converter</span>
    </div>
      <div className='w-full h-screen flex justify-center flex-col  items-center bg-[#436789]'>
        <form className='w-1/2 h-3/4 border-2 border-white rounded-lg px-1 bg-[#121212]' onSubmit={(e)=> {e.preventDefault(), result()}}>
          <Input
            flag={from.slice(0,2)}
            label = "From" 
            currency = {from}
            onCurrencyChange = {(e)=>setFrom(e)}
            amount = {amount}
            currencyOptions = {currencyKeys}
            onAmountChange = {(e)=>setAmount(e)}
          />
          <div className='w-full h-8 z-10 flex justify-center items-center text-2xl hover:cursor-pointer'>
              <i className="text-black fa-solid fa-arrow-right-arrow-left bg-white rounded-full p-3 hover:bg-gray-200" onClick={swap} ></i>
          </div>
          <Input
            convert="Converted"
            flag={to.slice(0,2)}
            label = "TO"
            currency = {to}
            amount = {convertAmt}
            onAmountChange = {(e)=> setConvertAmt(e)}
            onCurrencyChange = {(e)=>setTo(e)}
            currencyOptions = {currencyKeys}
            amountDisabled


          />
          <div className='flex w-full h-12 items-center justify-center'>
            <button className='bg-green-400 px-4 py-2 rounded-lg hover:cursor-pointer outline-none hover:bg-green-300 text-black text-lg font-semibold'>CONVERT {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App;