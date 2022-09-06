import React from 'react';
import styled from 'styled-components';
import mySelf from '../img/ao.png';




const ContainerBox2 = styled.div`
width:50%;
height:62vh;
transition:all ease-in-out 0.8s;
text-align:center;
margin-top:60px;







@media screen and (max-width:1209px){
  width:95%;
  padding: 0px 180px;

  
}
@media screen and (max-width:869px){

padding: 0px 130px;

}
@media screen and (max-width:769px){
  height:72vh;
  padding:85px 30px 30px 30px;
  text-align:left;
  margin-top:80px;
}
`;


const LineaWrapper1 = styled.div`
position:absolute;
top:50%;
display:flex;
align-items:center;
justify-content:center;
left:90px;

@media screen and (max-width:769px) {
  left:30px;

}
`;

const LineaWrapper2 = styled.div`
position:absolute;
top:50%;
display:flex;
align-items:center;
justify-content:center;
right:90px;

@media screen and (max-width:769px) {
  right:30px;

}
`;

const ContainerTitle = styled.div`
width:80%;
display:flex;
justify-content:center;
margin-top:150px;


h1{
  font-size:70px;
  padding:100px 0 ;
}



@media screen and (max-width:769px) {
  width:67%;
  justify-content:center;
  h1{
    font-size:50px;
    padding:90px 0 0 0 ;
    color:#1c8aaf73;
  }
 

}
`;
const WrapperTit = styled.div`
width:100%;
height:40vh;
background:#fff;
display:flex;
justify-content:center;
align-items:center;
 




@media screen and (max-width:769px){

  height:18vh;

}
 

}
`;







const About = () => {




  return (
    <>
    <WrapperTit>
      <ContainerTitle>
        <h1 style={{color:'deepskyblue',position:'relative',zIndex:'3'}} >About me</h1>
        <img src={mySelf} alt="my" style={{width:'25rem',height:'auto',position:'absolute',zIndex:'2'}} />
      </ContainerTitle>
    </WrapperTit>
    
    <div style={{width:'100%', background:'#fff',display:'flex',justifyContent:'center'}}>
      <div style={{width:'90%', display:'flex', justifyContent:'center',alignItems:'top'}}>
    
   
         <LineaWrapper1>
          <div style={{position:'absolute',width:'100px', height:'3px',borderRadius:'10px', transform: 'rotate(90deg) translateX(105px)', background:'#6af2f061'}}/>
          <div style={{position:'absolute',width:'100px',display:'flex',justifyContent:'center',alignItems:'center', height:'20px',borderRadius:'10px', transform: 'rotate(-90deg)',color:'#aaa',textTransform:'uppercase'}}><h4>ispired</h4></div>
          <div style={{position:'absolute',width:'100px', height:'3px',borderRadius:'10px', transform: 'rotate(90deg) translateX(-100px)', background:'#6af2f061'}}/>
         </LineaWrapper1>

       <ContainerBox2>
           <div>
           <h3>
            Hi ! <br/>
            my name is Alberto, and
            i’m a junior front end developer
            </h3> <br/>
          
          
            <p>
            at the moment i loking for small
            project or collaboration 
            that allow my improve my ability and skills.<br/>
            my goal will be focused to create a web site 
            user frendly, responsive and scalable with a
            simple modern and effective UI/UX 
            </p>
           </div>

           <div>


              <br/>
            <h3> Hobbyes</h3>
         
            <br/>
            <p>
           when i dont serch in internet some new tecnologies <br/>
           in my free time i like practics photografy,  play guitar
           or build enithing with wood

    
            my goal will be focused to create a web site 
            user frendly, responsive and scalable with a
            simple modern and effective UI/UX 
            </p>
           </div>
       </ContainerBox2> 

         <LineaWrapper2>
          <div style={{position:'absolute',width:'100px', height:'3px',borderRadius:'10px', transform: 'rotate(90deg) translateX(120px)', background:'#6af2f061'}}/>
          <div style={{position:'absolute',width:'100px',display:'flex',justifyContent:'center',alignItems:'center', height:'20px',borderRadius:'10px', transform: 'rotate(90deg)',color:'#aaa',textTransform:'uppercase'}}><h4>motivated</h4></div>
          <div style={{position:'absolute',width:'100px', height:'3px',borderRadius:'10px', transform: 'rotate(90deg) translateX(-120px)', background:'#6af2f061'}}/>
         </LineaWrapper2>

     
      </div>
    </div>
  








    
    </>
  )
}

export default About