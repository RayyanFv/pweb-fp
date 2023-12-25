import react, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
export default function BusinessIntelligence() {
  
  const [upload, setUpload] = useState(true);
  const [result, setResult] = useState(false);
  
  function isActive(input){
    if(input == true){
      return 'font-bold underline';
    } else {
      return 'font-semi-bold';
    }
  }
  
  // jika lagi di panel upload
  if(upload) {
    return (
      <>
      <div id="page-wrap" className="flex w-auto h-full">
        <Sidebar />
        <div className="flex h-fit w-fit mt-4 mx-auto">
          <a onClick={() => {setUpload(true); setResult(false);}} className={"flex justify-left flex-row gap-8 m-4 " + isActive(upload)} href='#'>
            Upload
          </a>
          <a onClick={() => {setUpload(false); setResult(true);}} className={"flex justify-left flex-row gap-8 m-4 " + isActive(result)} href='#'>
            Result
          </a>
        </div>
      </div>
        <div className="grid grid-cols-6 gap-2 h-auto w-auto mx-52 my-5 mb-36 py-8 px-12">
          {/* <div className="chat-container"> */}
            {/* {successMessage && <div className="text-green-500">{successMessage}</div>}
            {googleSuccessMessage && <div className="text-green-500">{googleSuccessMessage}</div>} */}
          {/* </div> */}
        
        {/* Input Business Name */}
        <div className='flex items-center mb-4'>
          <label htmlFor='name'>
          Business Name
          </label>
        </div>
        <div className='col-span-5'>
          <input
            className='w-full border bg-[#121212] rounded-lg px-8 py-3 mb-4'
            id='name'
            placeholder="Your Business Name"
            name="name"
            type="text"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Input period */}
        <div className='flex items-center mb-4'>
          <label htmlFor='period'>
          Period
          </label>
        </div>
        <div className='col-span-5'>
          <input
            className='w-full border bg-[#121212] rounded-lg px-8 py-3 mb-4'
            id='period'
            placeholder="18/11/2023"
            name="period"
            type="text"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {/* Input File */}
        <div className='flex items-center'>
          <label htmlFor='name'>
          Upload Your Data
          </label>
        </div>
        <div className='col-span-5'>
          <input
            className='w-full'
            id='file'
            name="file"
            type="file"
            accept=".csv"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
    </>
    );
  } else if(result) // jika lagi di panel result
  return (
    <>
      <div id="page-wrap" className="flex w-auto h-full">
        <Sidebar />
        <div className="flex h-fit w-fit mt-4 mx-auto">
          <a onClick={() => {setUpload(true); setResult(false);}} className={"flex justify-left flex-row gap-8 m-4 " + isActive(upload)} href='#'>
            Upload
          </a>
          <a onClick={() => {setUpload(false); setResult(true);}} className={"flex justify-left flex-row gap-8 m-4 " + isActive(result)} href='#'>
            Result
          </a>
        </div>
      </div>
        <div className='flex text-xl font-bold justify-left my-14 px-40'>
          Power BI Analysis Dashboard
        </div>
    </>
  );

}