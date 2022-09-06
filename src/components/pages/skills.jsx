import React from 'react';
import styled from 'styled-components';


const ContainerOut = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center; 
`;


const ContainerInt = styled.div`
width:80%;
height:70vh;
padding:15px;
transition:all ease-in-out 1s;

@media screen and (max-width:600px){
width:100%;

}

`;

/* ______div for put all skills in column width media query */
const ContainerSkills = styled.div`
width:50%;
float:left;
display:flex;
flex-flow:column wrap;
`;






const WrapperSkills1 = styled.div`
width:100%;
padding:10px 10px 10px 0;
 
`;

const SkillsW = styled.div`
width:100%;

p{padding:10px 0;}

`;


const WrapperSkills2 = styled.div`
width:100%;
padding:10px 10px 10px 0;
 
 
 
`;

 
 





const Skills = () => {
  return (

    <>
    <ContainerOut>
      <ContainerInt>
      <h1 style={{padding:'30px 0'}}> Skills</h1>




      <ContainerSkills>
          <WrapperSkills1>
          
          <SkillsW>

            <div style={{position:'relative'}} >
             <p>html (70%)</p>
             <div style={{boxShadow:'0 6px 7px -5px',position:'absolute',width:'100%',height:'15px',border:'solid 1px #333',borderRadius:'20px'}} />   
             <div style={{position:'absolute',width:'60%',height:'15px',background:'#059DC0',borderRadius:'20px'}} />   
            </div><br/>

            <div style={{position:'relative'}} >
             <p>css (70%)</p>
             <div style={{boxShadow:'0 6px 7px -5px',position:'absolute',width:'100%',height:'15px',border:'solid 1px #333',borderRadius:'20px'}} />   
             <div style={{position:'absolute',width:'60%',height:'15px',background:'#059DC0',borderRadius:'20px'}} />   
            </div><br/>

            <div style={{position:'relative'}} >
             <p>javascript (30%)</p>
             <div style={{boxShadow:'0 6px 7px -5px',position:'absolute',width:'100%',height:'15px',border:'solid 1px #333',borderRadius:'20px'}} />   
             <div style={{position:'absolute',width:'30%',height:'15px',background:'#059DC0',borderRadius:'20px'}} />   
            </div><br/>

            <div style={{position:'relative'}} >
             <p>react (40%)</p>
             <div style={{boxShadow:'0 6px 7px -5px',position:'absolute',width:'100%',height:'15px',border:'solid 1px #333',borderRadius:'20px'}} />   
             <div style={{position:'absolute',width:'40%',height:'15px',background:'#059DC0',borderRadius:'20px'}} />   
            </div><br/>

            <div style={{position:'relative'}} >
             <p>nodejs npm (30%)</p>
             <div style={{boxShadow:'0 6px 7px -5px',position:'absolute',width:'100%',height:'15px',border:'solid 1px #333',borderRadius:'20px'}} />   
             <div style={{position:'absolute',width:'30%',height:'15px',background:'#059DC0',borderRadius:'20px'}} />   
            </div><br/>

        
          </SkillsW>
        
           
          </WrapperSkills1>
      </ContainerSkills>





      <ContainerSkills>
          <WrapperSkills2>
          <SkillsW>
            
          <div style={{position:'relative'}} >
             <p>illustrator (40%)</p>
             <div style={{boxShadow:'0 6px 7px -5px',position:'absolute',width:'100%',height:'15px',border:'solid 1px #333',borderRadius:'20px'}} />   
             <div style={{position:'absolute',width:'40%',height:'15px',background:'#059DC0',borderRadius:'20px'}} />   
            </div><br/>

            <div style={{position:'relative'}} >
             <p>photoshop (30%)</p>
             <div style={{boxShadow:'0 6px 7px -5px',position:'absolute',width:'100%',height:'15px',border:'solid 1px #333',borderRadius:'20px'}} />   
             <div style={{position:'absolute',width:'30%',height:'15px',background:'#059DC0',borderRadius:'20px'}} />   
            </div><br/>

            <div style={{position:'relative'}} >
             <p>photography (40%)</p>
             <div style={{boxShadow:'0 6px 7px -5px',position:'absolute',width:'100%',height:'15px',border:'solid 1px #333',borderRadius:'20px'}} />   
             <div style={{position:'absolute',width:'40%',height:'15px',background:'#059DC0',borderRadius:'20px'}} />   
            </div><br/>
         

          </SkillsW>
          </WrapperSkills2>
      </ContainerSkills>

 
 

      
 




      </ContainerInt>
    </ContainerOut>




 










    </>
  )
}

export default Skills