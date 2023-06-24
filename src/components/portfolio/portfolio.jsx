import React ,{useState,useEffect}from "react";
import Projects from "./project";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./portfolio.css";
 function Portfolio(){
// since in the my recent project they are of the same nature with what is changing is just the project number and the peoject image
// i build one component call  projects  and call it for the numbers of time passing the project number and project image as props 


var [result, setResult] = useState([{
    imageUrl:"",
      title:"",
      gitDeomoUrl:"",
      demoUrl:""
  
  }]);
  useEffect(() => {
     fetch('https://troubled-trousers-cod.cyclic.app/users/get/all/project')
       .then(response =>response.json())
       .then(res=>{
      
        setResult(res);
   
       })
       .catch(error => {
         console.error(error.message);
       });
   }, []);
 let i=0;




   

    return(
<div className="portfolioMainDiv">
    <section id="projects">
 <h6 style={{color:"black"}}>My recent works</h6>
    <h3  style={{color:"black"}}>Portfolio</h3>
    <h3 className="h3">Click project image to view content</h3>
    <div className="CenterDiv">
    <div  className="row"  id="rowDiv">

    {result.map((project) => {
        i++;
          return (
           <div key={project._id} id="project1"  className="col-4 col-lg-4 col-md-5 col-sm-11">
        

  <Projects  num={i} url={project.imageUrl} name={project.title} gitDeomoUrl={project.gitDeomoUrl} demoUrl={project.demoUrl}/> 

  
  </div>
  
          );
        })} 
  

</div>



</div>


</section>

</div>
    );
}

export default Portfolio;