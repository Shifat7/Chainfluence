//import Header from "./header";
import './Landing.css'
//import { ReactComponent as Logo } from '../../images/transfund.svg';
import Intro from '../../images/Intro.png';
import Balance from '../../images/balance.png';
import DataManage from '../../images/DataManage.png';
import LaunchCamp from '../../images/LaunchCamp.png';
import RaisenShow from '../../images/FinanceRaise.png';
import {CampaignCards}  from '../../components';
import Navbar from '../../components/navbar/navbar';

const LandingPage = () => {
    return (
        <main>
        <Navbar />
      <div className='container-fluid mx-auto px-4 pt-10 max-h-full flex'>
        <div className='w-1/2'>
            <h1 className='text-6xl text-purple-950 leading-normal'>
            Won hackathon?
            <br />
            Don’t stop, raise money and show MVP! 
            </h1>
            <p className='my-5 tracking-wide text-gray-700 text-2xl'>
            TransFund is the platform that helps you turn your winning hackathon idea into a MVP that attracts investors and backers worldwide. Register, launch, raise and then show your product potential!
            </p>
            <button className='bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded w-1/3 h-22 text-lg'>Launch</button>
        </div>
            <div className=' w-1/2'>
            <img src={Intro} alt="Intro Iamge" className='float-right h-4/4'/>
            </div>
      </div>

    <div className='container-fluid mx-auto px-4 pt-10 max-h-full flex'>
        <div className='w-1/2 py-4 pr-4'>
            <h1 className='text-5xl text-purple-950 py-4'>Our Features</h1>
            <p className='tracking-wide text-gray-700 text-xl'>
            We are the platform where you can gain resources from your future customers and another pledgers. Our goal is to do this experience as easier and fun as possible.
            </p>
            <img src={Balance} alt="Intro Iamge" className='items-center content-center mx-auto h-2/4'/>
        </div>
        <div className='w-1/2 py-4 pl-10'>
            <div id='feature' className='w-100 flex pb-5'>
                <h1 className='w-1/6 text-4xl text-purple-950 pt-3'>1</h1>
                <div className=''>
                    <h3 className='text-xl text-purple-950 pb-2'>Easy</h3>
                    <p className='text-gray-700 text-lg'>TransFund offers a user-friendly platform that makes the funding process easy and accessible for startups and entrepreneurs. You can easily pledge money to project using crypto wallet, so creators could get it fast. </p>
                </div>
            </div>
            <div id='feature' className='w-100 flex pb-5'>
                <h1 className='w-1/6 text-4xl text-purple-950 pt-3 pr-2'>2</h1>
                <div className=''>
                    <h3 className='text-xl text-purple-950 pb-2'>Milestone Feature</h3>
                    <p className='text-gray-700 text-lg'> With our milestone-based crowdfunding model, creators can set clear funding goals and milestones. Backers can track the progress of the project and contribute towards achieving specific milestones, ensuring transparency and accountability. </p>
                </div>
            </div>
            <div id='feature' className='w-100 flex pb-5'>
                <h1 className='w-1/6 text-4xl text-purple-950 pt-3 pr-2'>3</h1>
                <div className=''>
                    <h3 className='text-xl text-purple-950 pb-2'>Network</h3>
                    <p className='text-gray-700 text-lg'> Build meaningful connections, gather feedback, and collaborate with potential clients who are interested in your project. It's not just about funding; it's about building lasting relationships. </p>
                </div>
            </div>
            <div id='feature' className='w-100 flex pb-5'>
                <h1 className='w-1/6 text-4xl text-purple-950 pt-3 pr-2'>4</h1>
                <div className=''>
                    <h3 className='text-xl text-purple-950 pb-2'>AI Bot</h3>
                    <p className='text-gray-700 text-lg'> Our AI-powered chatbot provides real-time assistance, answering queries, providing market insights, and offering guidance throughout the funding process. Get instant support and stay informed every step of the way.</p>
                </div>
            </div>
        </div>
    </div>
     <div id="howitworks" className='container-fluid mx-auto px-4 pt-10 mt-8 max-h-full'>
        <h1 className='text-4xl text-purple-950 w-full text-center pb-6'>How it Works</h1>
            <div className='flex'>
                <div className='w-1/3'>
                    <div className="max-w-sm rounded overflow-hidden">
                        <img src={DataManage} alt="Simple Registration" className='w-3/4 h-3/4' />
                        <div className="px-6 py-4">
                            <h2 className="font-bold text-xl text-purple-950 mb-2">Simple Registration</h2>
                            <p className="text-gray-700 text-base">
                            We are the platform where you can gain resources from your future customers and another pledgers. Our goal is to do this experience as easier and fun as possible.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className="max-w-sm rounded overflow-hidden">
                        <img src={LaunchCamp} alt="Launch Campaign" className='w-3/4 h-3/4' />
                        <div className="px-6 py-4">
                            <h2 className="font-bold text-xl text-purple-950 mb-2">Launch Campaign</h2>
                            <p className="text-gray-700 text-base">
                            We are the platform where you can gain resources from your future customers and another pledgers. Our goal is to do this experience as easier and fun as possible.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className="max-w-sm rounded overflow-hidden">
                        <img src={RaisenShow} alt="Raise and Show" className='w-3/4 h-3/4' />
                        <div className="px-6 py-4">
                            <h2 className="font-bold text-xl text-purple-950 mb-2">Raise and Show</h2>
                            <p className="text-gray-700 text-base">
                            We are the platform where you can gain resources from your future customers and another pledgers. Our goal is to do this experience as easier and fun as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <div id= "Campaigns" className='container-fluid mx-auto px-4 pt-10 mt-10 max-h-full'>
        <h1 className='text-4xl text-purple-950 w-full pb-6'>Explore Campaigns</h1>
        <p className="text-gray-700 text-lg w-1/2">
        We are the platform where you can gain resources from your future customers and another pledgers. Our goal is to do this experience as easier and fun as possible.
        </p>
        <div className='mt-10 p-5'>
            <CampaignCards />
        </div>
    </div>
    
        </main>
     
    );
  };
  

export default LandingPage;