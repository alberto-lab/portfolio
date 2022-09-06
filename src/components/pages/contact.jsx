import React from 'react';
import styled from 'styled-components';

import phone from '../img/phone.png';
import mail from '../img/e-mail.png';




const ContainerOut = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center; 
`;


const ContainerInt = styled.div`
width:50%;
height:70vh;
padding:15px;
transition:all ease-in-out 1s;
text-align:center;

@media screen and (max-width:600px){
width:100%;
 
}

`;


const CotactSplitter = styled.div`
width: 50%;
float:left;
 

`;

const WrapperContact = styled.div`
box-shadow:0px 5px 15px -3px #333;
border-radius:20px;
background:#ff;
color:#fff;
text-align:center;
margin:10px;
margin-top:80px;

img{

  width:35px;
  height:auto;

}

`;




const Contact = () => {
  return (
    <>
    <ContainerOut>
      <ContainerInt>
      <h1 style={{padding:'30px 0',margin:'10px'}}> Contact</h1>
      <p style={{padding:'10px 0',margin:'10px'}}>Fill free to contact my for any question, i will be happy of meet you!
       Let’s create  some think cool  together, for a beter day
       and a better life</p>
      
      <CotactSplitter>
        <WrapperContact>
          <img src={mail}alt='mail' />
        </WrapperContact>
      </CotactSplitter>
     

      <CotactSplitter>
        <WrapperContact>
          <img src={phone} alt='telefono'/>
        </WrapperContact>
      </CotactSplitter>

     </ContainerInt>
    </ContainerOut>
    </>
  )
}

export default Contact