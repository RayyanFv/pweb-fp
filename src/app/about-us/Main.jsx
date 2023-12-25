import { motion } from 'framer-motion';

function AboutUs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };
    return (
        <>
        <motion.div
        className='relative h-[60vh] overflow-hidden'
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
      >
        <div className='w-full h-full bg-gradient-to-b from-[#0C132F] via-0B0C10 to-transparent rounded-b-full absolute'>
     <div className='flex text-7xl font-bold justify-center text-center px-64 py-10'>About Us</div>
     <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>Meet our awesome developers</div> 
     </div>
      </motion.div>
 
   <div className='flex flex-row h-[200px] w-auto mx-64'>
      <div className='flex  bg-blue-900 flex-col h-[200px] w-[200px] mr-auto justify-between rounded-tl-[30px] rounded-br-[30px] shadow-2xl shadow-cyan-800/65' >
        <img src='/images/homepage/mark.png' className='h-40 rounded-tl-[30px] '/>
        <div style={{ fontSize: '10px' }} className='mx-auto my-auto text-center'><b>Mark</b> <br></br>Business Intelligence at Market</div>
      </div>
       <div className='flex bg-blue-900 flex-col h-[200px] w-[200px] mx-auto justify-between rounded-tl-[30px] rounded-br-[30px] shadow-2xl shadow-cyan-800/65' >
        <img src='/images/homepage/billy.png' className='h-40 rounded-tl-[30px] '/>
        <div style={{ fontSize: '10px' }} className='mx-auto my-auto text-center'><b>Billie</b> <br></br>Data Analyst at Market</div>
      </div>
      <div className='flex bg-blue-900 flex-col h-[200px] w-[200px] ml-auto justify-between rounded-tl-[30px] rounded-br-[30px] shadow-2xl shadow-cyan-800/65' >
        <img src='/images/homepage/rose.png' className='h-40 rounded-tl-[30px] '/>
        <div style={{ fontSize: '10px' }} className='mx-auto my-auto text-center'><b>Rose</b> <br></br>Market Research at Market</div>
      </div> 
    </div>
       
      <div className='flex text-lg font-normal justify-center text-center px-64 py-10'>Z-Sharp is more than a consultancy; it's the catalyst for the next wave of entrepreneurial success. With innovative strategies, cutting-edge analysis, and tailored solutions, we redefine how Gen Z navigates the business landscape. Our team delves deep into each venture, not just as analysts but as architects of success, decoding challenges and uncovering opportunities that propel businesses to new heights.
      <br></br><br></br>We stand out through an unwavering commitment to innovation, creating trends rather than following them. Z-Sharp is not a one-size-fits-all solution but a dynamic partnership dedicated to empowering the entrepreneurial spirit within Gen Z.
      <br></br><br></br>Choosing Z-Sharp means gaining access to a support system that understands the pulse of your ambition. We don't just aim for success; we pave the way for it. Z-Sharp: Where business consultation meets the future, and your journey from idea to impact begins.</div>   
      </>
    )
  }
  
  export default AboutUs