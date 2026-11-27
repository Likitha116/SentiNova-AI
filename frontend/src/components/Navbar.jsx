import { useEffect, useState } from "react";
import { CircleUserRound, Activity } from "lucide-react";

function Navbar() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <header className="bg-white shadow-sm px-8 py-5 flex justify-between items-center sticky">

      <div>

        <h2 className="text-xl font-bold text-primary">
          Welcome to SentiNova AI!
        </h2>

        <p className="text-sm text-gray-500">
          Monitor • Detect • Predict • Understand
        </p>

      </div>

      <div className="flex items-center gap-6">

        <div className="flex items-center gap-2">

          <span className="w-3 h-3 bg-green-500 rounded-full"></span>

          <span className="text-sm font-medium">
            Live
          </span>

        </div>

        <div className="text-sm text-gray-500">

          {time.toLocaleString()}

        </div>

        <CircleUserRound size={30} className="text-primary" />

      </div>

    </header>

  );

}

export default Navbar;