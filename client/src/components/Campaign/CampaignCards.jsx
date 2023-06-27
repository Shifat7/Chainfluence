import Finlit from '../../images/Finlit1.png';
import EstateGPT from '../../images/EstateGPT.png';
import Fourier from '../../images/Fourier.png';
//import {default as Campaign} from './Campaign';

const CampaignCards = () => {
    return (
        <>
            <div className='flex w-full'>
            <div className=' w-1/3 mx-2 lg:w-1/3 md:w-screen sm:w-full'>
                <div className='block rounded-lg bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
                <a href="#!">
                    <img className="rounded-t-lg  w-100" src={Finlit} alt="" />
                </a>
                <div className="p-6 max-w-none">
                    <h5 className='text-slate-800 pb-2'>3/3 Milestone</h5>
                    <h4 className="mb-2 text-2xl font-medium leading-tight text-purple-950 ">
                    Finlit - empower financial literacy!
                    </h4>
                    <p className="mb-4 text-base text-gray-700">
                    Financial literacy is a serious aspect of our lives. We are providing tool that will help teenagers to understand how to manage their money properly.
                    </p>
                    <div className="flex">
                        <h5 className='w-1/2 text-gray-600 font-medium'> 84%  raised</h5>
                        <h5 className='w-1/2 text-right text-gray-600 font-medium'>by Maxim Zvarici</h5>
                    </div>
                </div>
                </div>
            </div> 
            <div className='w-1/3 mx-2 lg:w-1/3 md:w-screen sm:w-full'>
                <div className='block rounded-lg bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
                <a href="#!">
                    <img className="rounded-t-lg w-100" src={EstateGPT} alt="" />
                </a>
                <div className="p-6 max-w-none">
                    <h5 className='text-slate-800 pb-2'>2/4 Milestone</h5>
                    <h4 className="mb-2 text-2xl font-medium leading-tight text-purple-950 ">
                    EstateGPT - your personal real estate agent
                    </h4>
                    <p className="mb-4 text-base text-gray-700">
                    Financial literacy is a serious aspect of our lives. We are providing tool that will help teenagers to understand how to manage their money properly.
                    </p>
                    <div className="flex">
                        <h5 className='w-1/2 text-gray-600 font-medium'>95% raised</h5>
                        <h5 className='w-1/2 text-right text-gray-600 font-medium'>by Antonio Fioco</h5>
                    </div>
                </div>
                </div>
            </div>
            <div className='w-1/3 mx-2 lg:w-1/3 md:w-screen sm:w-full'>
                <div className='block rounded-lg bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
                <a href="#!">
                    <img className="rounded-t-lg  w-100" src={Fourier} alt="" />
                </a>
                <div className="p-6 max-w-none">
                    <h5 className='text-slate-800 pb-2'>2/4 Milestone</h5>
                    <h4 className="mb-2 text-2xl font-medium leading-tight text-purple-950 ">
                    FourierDR - CNN algorithm for DR stage classification
                    </h4>
                    <p className="mb-4 text-base text-gray-700">
                    Financial literacy is a serious aspect of our lives. We are providing tool that will help teenagers to understand how to manage their money properly.
                    </p>
                    <div className="flex">
                        <h5 className='w-1/2 text-gray-600 font-medium'>12% raised</h5>
                        <h5 className='w-1/2 text-right text-gray-600 font-medium'>by Dora Dura</h5>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CampaignCards;