import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(userTimeZone);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center justify-center bg-bgimage bg-cover bg-center'>
        <p className='text-lg font-light tracking-widest uppercase'>
          current time in <span className='p-2'>{timeZone}</span>
        </p>
        <h1 className='text-[10rem] font-bold'>{time.toLocaleTimeString()}</h1>
      </div>
    </>
  );
}

export default App;
