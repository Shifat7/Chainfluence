import { Campaign } from "../../components";
import FinlitF from '../../images/FinlitFull.png';
import MiaDoe from '../../images/MiaDoe.png';
import {CampaignCards}  from '../../components'


const ExplorePage = () => {
    const campaignProps = {
        Title: 'My Campaign',
        Image: 'campaign.jpg',
        About: 'This is my campaign',
        Created_by: 'John Doe',
        Goal: 1000,
        Progress: 500,
      };
      function ProgressBar({ percentage }) {
        return (
          <div className="w-full rounded bg-gray-200">
            <div
              className="h-1 bg-purple-800"
              style={{ width: `${percentage}%`}}
            ></div>
          </div>
        );
      }
    return(
        <>
        <div id= "Campaigns" className='container-fluid flex mx-auto px-4 pt-6 mt-5 max-h-full'>
        <h1 className='text-4xl text-purple-950 w-full pb-6'>Explore</h1>
        <button className="bg-purple-700 hover:bg-purple-800 w-44 h-14 text-white font-xs py-2 px-4 rounded">
        New Project
        </button>
        </div>
            <div className=' w-full mx-2 lg:w-full md:w-screen sm:w-full px-18 border-gray-800 border rounded'>
                <div className="p-2">
                    <div className='flex bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
                    <a href="#!">
                        <img className="w-full" src={FinlitF} alt="" />
                    </a>
                    <div className="p-6 max-w-none">
                        <h4 className="mb-2 text-lg font-semibold leading-tight text-purple-950 ">
                        Finlit - empower financial literacy!
                        </h4>
                        <p className="mb-4 text-base text-gray-700">
                        Financial literacy is a serious aspect of our lives. We are providing tool that will help teenagers to understand how to manage their money properly.
                        </p>
                        <ProgressBar percentage={"45"}/>
                        <div className="flex pt-8 w-full" >
                            <div className='w-1/2 text-gray-900 font-medium text-center flex'> 
                               <div className="mr-9">
                               <div className="text-sm font-bold pb-2 text-left">$21,903</div>
                                <div className="text-xs text-gray-700">Raised of $30,000</div>
                            </div>
                               <div className="mr-9">
                               <div className="text-sm font-bold pb-2">341</div>
                                <div className="text-xs text-gray-700">Backers</div>
                            </div>
                               <div className="mr-2">
                               <div className="text-sm font-bold pb-2">26</div>
                                <div className="text-xs text-gray-700">Days Left</div>
                            </div>
                              
                            </div>
                            <div className='w-1/2 text-right items-center justify-end text-gray-600 font-medium flex'>
                                <p className="mx-2" >Mia Doe (Yours)</p>
                                <div><img src={MiaDoe} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <hr />
            
        <div className='container-fluid mx-auto px-4 pt-6 mt-8 max-h-full'>
        <h3 className='text-2xl text-purple-950 w-full pb-6'>Trending</h3>
        <CampaignCards />
        </div>
        </>
    );
};

export default ExplorePage;
