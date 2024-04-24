import React, {useState} from "react";

const Hero = ({titleData,createCampaign})=>{
  const [campaign, setCamapaign]=useState({
    title:"",
    description:"",
    amount:"",
    deadline:"",
  });

  const createNewCampaign = async (e) =>{
    e.preventDefault();
    try{
      const data = await createCampaign(campaign);
    }catch(error){
      console.log(error);
    }
  };
  return(
    <div className="relative">
      <span className="coverLine"></span>
      {/* <img src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" className="absolute inset-0 object-cover w-full h-full" alt="" /> */}
      <div className="relative bg-opacity-75 backgroundMain">
        {/* <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163">
            <path
              fill = "currentColor"
              d = "M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.70676 88 796 34 916 1301036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5-44 162.5 -104 162.5H-164V13Z"/>
          </svg> */}
          <div className="relative px-24 py-20 mx-auto overflow-hidden max-w-screen-xl ">
            <div className="flex flex-col items-center justify-between">
              {/* <div className="w-full max-w-xl md-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white">
                  Hemel_31<br className="hidden"/>
                  Crowd Funding BD  
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta voluptatum tenetur voluptatem reiciendis sed distinctio ea in, facilis soluta quae molestiae ipsum delectus beatae?</p>
                <a href="/" aria-label="" className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-gray-200">Learn more
                <svg 
                  className="inline-block w-3 ml-2" fill="currentColor"
                  viewBox="0 0 12 12">
                    <path d="M9.707,5.2931-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10. 293a1,1,0,1,0,1.414,1.41415-5A1,1,0,0,0,9.707,5.293Z"/>
                  </svg>
                </a>
              </div> */}
              <div className="w-full max-w-xl">
                <div className="bg-white ronded shadow-2xl p-7">
                  <h3 className="mb-4 text-xl font-semibold">Campaign</h3>
                  <form>
                    <div className="mb-1">
                      <label htmlFor="firstName" className="inline-block mb-1 font-medium">
                        Title
                      </label>
                      <input onChange={(e)=>
                        setCamapaign({
                          ...campaign,
                          title: e.target.value,
                        })}
                        placeholder="title"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm apperance-none focuse:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName" 
                        name="firstName"/>
                    </div>
                    <div className="mb-1">
                      <label htmlFor="lastName"
                      className="inline-block mb-1 font-medium">Description</label>
                      <input onChange={(e)=>
                        setCamapaign({
                          ...campaign,
                          description: e.target.value,
                        })}
                        placeholder="description"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm apperance-none focuse:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="lastName" 
                        name="lastName"/>
                    </div>
                    <div className="mb-1">
                      <label htmlFor="email"
                      className="inline-block mb-1 font-medium">Target Amount</label>
                      <input
                        onChange={(e)=>
                          setCamapaign({
                            ...campaign,
                            amount: e.target.value,
                          })}
                          placeholder="amount"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm apperance-none focuse:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email" />
                        
                    </div>
                    <div className="mb-1">
                      <label htmlFor="email"
                      className="inline-block mb-1 font-medium">Target Amount</label>
                      <input
                        onChange={(e)=>
                          setCamapaign({
                            ...campaign,
                            deadline: e.target.value,
                          })}
                          placeholder="Date"
                        required
                        type="date"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm apperance-none focuse:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email" /> 
                    </div>
                    <div className="mt-4 mb-2">
                      <button
                        onClick={(e)=>createNewCampaign(e)}
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none newColor"
                        >Create Campaign</button>
                    </div>
                    <p className="text-xs text-gray-600">Create your Campaign for raise funds</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;