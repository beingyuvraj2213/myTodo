import { useEffect,useState } from "react";


const DateAndTime = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000); // Updates every second
  
      return () => clearInterval(timer); 
    }, []);
  
    return (
      <div className="d-t">
        <span>{currentDate.toLocaleDateString()}</span>
        <span>{currentDate.toLocaleTimeString()}</span>
      </div>
    );
  };

export default DateAndTime;