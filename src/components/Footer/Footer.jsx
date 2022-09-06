import React from 'react';
import styled from 'styled-components';
import footer from '../img/footerImg.png';


const FooterOut = styled.div`
width:100%;
height:50vh;
display:flex;
justify-content:center;
background:deepskyblue;

`;


const FooterInt = styled.div`
width:80%;
height:50vh;
background:deepskyblue;
width:100%;
height:100%;
background-image:url(${footer});
background-size:cover;
background-position:center;
`;


const ContentContact = styled.div`
width:50%;
float:left;
color:#fff;
text-align:center;
top:45%;
position:relative;

p{
  font-weight:100;
  padding:8px; 
}




@media screen and (max-width:769px){
width:100%;
top:25%;
}
`;




const Footer = () => {
  return (
  
     <FooterOut>
        <FooterInt>

          <ContentContact>
            <div style={{padding:'20px'}}>           
            <h4>e-mail</h4>
            <p>albertoodeyemi@hotmail.com</p>
            </div>
          </ContentContact>

          <ContentContact>
            <div style={{padding:'20px'}}>
            <h4>phone</h4>
            <p>3935428969</p>
            </div>
          </ContentContact>
        
        </FooterInt>
     </FooterOut>


  )
}

export default Footer