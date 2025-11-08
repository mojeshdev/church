import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import Loader from '../components/Loader.jsx';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2000);
    const timer2 = setTimeout(() => setLoading(false), 2700);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (loading) return <Loader fadeOut={fadeOut} />;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white mt-32">
      {/* Grid container for text + both cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6 w-full max-w-6xl">
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-heading sm:text-4xl font-bold mb-4 text-blue-800">
            Welcome to <span className="text-yellow-500 font-heading font-bold">YSM Ministries</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-sm font-body">
            <span className="font-semibold font-body text-yellow-400">Prasangi Kumar</span> is the dedicated pastor of 
            <span className="text-blue-400 font-body"> Yerushalem Shalom Ministries</span>.  
            His mission is to spread the gospel of Christ and inspire lives through faith, worship, and prayer. 
            Under his leadership, the ministry continues to grow in love and unity, reaching hearts across communities.
          </p>
        </div>

        {/* First Card */}
        <div className="flex justify-center">
          <Card image="/Images/others/p-5.png"  />
        </div>

        {/* Second Card */}
        <div className="flex justify-center">
          <Card image="/Images/others/pastor.jpg"  />
        </div>

        {/* Optionally another section or text */}
        <div className="text-center md:text-left">
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            <span className="text-green-400 font-semibold font-body"> Judah Vadlamudi</span>, 
            the previous pastor, whose guidance and commitment laid the strong foundation 
            upon which YSM Ministries continues to grow. Together, their leadership reflects 
            a legacy of prayer, unity, and unwavering devotion to Christ.
          </p>
        </div>
      </div>
      <div className='p-20'>
        <h1 className=' text-2xl font-extrabold text-center text-blue-800 font-heading'>Some Memories Of Our Beloved Pastor Vadlamudi Judah </h1>
      {/* <video
        src="/Videos/others/ysm.mp4"
        controls
        className="w-full max-w-4xl mt-16 rounded-lg shadow-lg"
      >
      </video> */}
      </div>
    </div>
  );
};

export default Home;
