import React from "react";
import logo from "../resource/About us banner.jpeg";
import { Link } from "react-router-dom";
import ocean from "../resource/ocean.png";
import cargo from "../resource/cargo.png";
import air from "../resource/air.png";
import land from "../resource/land.png";
import pusparaj from "../resource/pusparaj.png";
import uttam from "../resource/uttam.png";
import col1 from "../resource/form-col1.png";
import col2 from "../resource/form-col2.png";
import col3 from "../resource/form-col3.png";
import col4 from "../resource/form-col4.png";
import col5 from "../resource/form-col5.png";

import servicestruck from "../resource/servicestruck.png";

function About() {


  return (
   <div className="w-full overflow-x-hidden">
     
     <div className="relative h-screen bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${logo})` }}>
      <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
        <div className="max-w-2xl text-white">

      <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
       <div className="bg-yellow-500 w-2 h-4"></div>About Us
      </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Our Logistics</h1>
          
        </div>
      </div>
    </div>




    <div className="container mx-auto p-6">
    
          {/* Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="space-y-4 ">
          <div className="flex gap-2"><div className="bg-yellow-500 w-2 h-4"></div>Services</div>
 
        <h1 className="text-2xl md:text-2xl font-bold mb-4">OUR COMPANY OVERVIEW</h1>
        <p className="text-gray-600 mb-4">
      USTrans World Logistics is a complete freight forwarding company, providing integrated solutions for all logistics needs under one roof. We can handle any type of cargo despite the dimensions or weight, by any mode, air, sea, road, rail or multimodal. The foundation of our logistics services is based on global expertise coupled with local knowledge.
    </p>
    <br></br>
    <p className="text-gray-600">
      We are specialised in DAP/DDP in India and our team also has a vast experience in a range of domestic logistics from small vehicles to hydraulic axles and major projects. Offering excellent rates and connectivity for air freight, we also have our own contractual rates with the major sea carriers and regular consolidations moving from India to the Far East, Gulf and Africa coupled with seamless movements for LCL sea freight to inland destinations.
    </p>
         
        </div>
        <div>
          <img src={servicestruck} alt="Air India" className="w-full h-[400px] object-cover" />
    
        </div>
      </div>

    </div>










    <div className="relative h-screen bg-cover bg-center ">

<div className="container mx-auto p-6">
  {/* Header Section */}
  <div className="text-center mb-12">
  <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
  <div className="bg-yellow-500 w-2 h-4"></div>What we do
  </div>
    <h2 className="text-3xl font-bold mb-4">Safe & Reliable Cargo Solutions</h2>
  </div>

  {/* Services Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    <div className="text-center p-6 border rounded-lg">
      <div className="mb-4">
        <img src={ocean} alt="Ocean Transport Services" className="mx-auto"/>
      </div>
      <h3 className="font-bold mb-2">Ocean Transport Services</h3>
      <p className="text-gray-600">
        Efficient, reliable, and cost-effective ocean transportation services tailored to your needs.
      </p>
    </div>
    <div className="text-center p-6 border rounded-lg">
      <div className="mb-4">
        <img src={cargo} alt="Project Cargo" className="mx-auto"/>
      </div>
      <h3 className="font-bold mb-2">Project Cargo</h3>
      <p className="text-gray-600">
        Handling complex, oversized, and heavy cargo with precision and care. Our expert team ensures your project cargo reaches its destination safely and on time.
      </p>
    </div>
    <div className="text-center p-6 border rounded-lg">
      <div className="mb-4">
        <img src={air} alt="Air Freight Services" className="mx-auto"/>
      </div>
      <h3 className="font-bold mb-2">Air Freight Services</h3>
      <p className="text-gray-600">
        Trust our expertise to get your cargo to its destination efficiently and safely. Fly high with our top-tier air freight solutions!
      </p>
    </div>
    <div className="text-center p-6 border rounded-lg">
      <div className="mb-4">
        <img src={land} alt="Land Shipping Services" className="mx-auto"/>
      </div>
      <h3 className="font-bold mb-2">Land Shipping Services</h3>
      <p className="text-gray-600">
        Experience seamless land shipping with our reliable and efficient services. We ensure timely delivery of your cargo, with comprehensive tracking and professional handling.
      </p>
    </div>
  </div>



</div>


</div>






<div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Expert Team</h2>
      </div>

      {/* Team Member 1 */}
      <div className="mb-12">
        <div className="flex justify-center mb-4">
          <img src={pusparaj} alt="Mr. Purushottam P Singhal" className="w-48 h-48 rounded-lg object-cover" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
          <p className="text-gray-600">CEO</p>
          <div className="flex justify-center space-x-2 mt-2">
            <a href="#" className="text-yellow-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-yellow-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-yellow-500"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="text-center mt-4 px-6">
          <p className="text-gray-700">
            CEO of the Company is well equipped with experience shared by his Father Late Shri P.C.Singhal. 
            Big high in his quality ( B.Com, Mores, MBA – Logistics ) and working since 1990 in the Organization 
            and has achieved several milestones in the last 26 years and complete various job in Pan India in a 
            most satisfactory manner under his leadership. He is also Social Activist and has a good social reputation. 
            He is a Trustee of S.H.Jaiparia International Hospital™ and part of various other Social Services to society & 
            possess good expertise in handling & movement of critical & superficial Jobs too.
          </p>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="mb-12">
        <div className="flex justify-center mb-4">
          <img src={uttam} alt="Dr. Uttam Singhal" className="w-48 h-48 rounded-lg object-cover" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
          <p className="text-gray-600">Managing Director</p>
          <div className="flex justify-center space-x-2 mt-2">
            <a href="#" className="text-yellow-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-yellow-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-yellow-500"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="text-center mt-4 px-6">
          <p className="text-gray-700">
            Managing Director of the Company, B.Com (H) & MBA (Fin) had been actively leading all the activities & managing well 
            through his accrued knowledge, well experienced, high qualified in good organisation in 2006 and had achieved various 
            Unfathomable Achievement & recognised best service providers with new outlook & modern approach & solutions. 
            He is well connected through Pan India links & has a great span of vendor base all over India. He is a Person of Vision & 
            enthusiasm is promoted to deliver what he commits always & this is his best quality.
          </p>
        </div>
      </div>
    </div>






    <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <img src={col1} alt="Gallery Image 1" className="w-full h-40 object-cover rounded-lg" />
          <img src={col2} alt="Gallery Image 2" className="w-full h-40 object-cover rounded-lg" />
          <img src={col3} alt="Gallery Image 3" className="w-full h-40 object-cover rounded-lg" />
          <img src={col4} alt="Gallery Image 4" className="w-full h-40 object-cover rounded-lg" />
          <img src={col5} alt="Gallery Image 5" className="w-full h-40 object-cover rounded-lg" />
        </div>
      </div>


      


    </div>
  )
}

export default About
