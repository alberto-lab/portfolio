import React, { Component } from 'react'
import styled from 'styled-components'


import Square from '../responsiveObj/square';


const ContainerTitle = styled.div`
width:80%;
display:flex;
justify-content:center;


h1{
  font-size:70px;
  padding:100px 0 ;
}



@media screen and (max-width:769px) {
  width:67%;
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


const WrapperCard = styled.div`
width:80%;

}
`;
const ContainerCard = styled.div`
width:100%;
display:flex;
justify-content: center;

@media screen and (max-width:769px) {
  padding-top:95px;


}
}
`;




class Work extends Component {
 
  state = {square: [
    { id: 0, title: "logo design", description:"creazione del logo lorem ipsum dolor "},
    { id: 1, title: "brand identity", description:"creazione identita "},
    { id: 2, title: "web site", description: "blogger"},
    { id: 3, title: "web & brand identity", description: "blogger"}
  ]}
  
 

 render(){
  return (


     <>
    <WrapperTit>
      <ContainerTitle>
        <h1>Work</h1>
      </ContainerTitle>
    </WrapperTit>
      
<ContainerCard>
  <WrapperCard>
    {this.state.square.map(square => (
    <Square
    key={square.id}
    title={square.title}
    description={square.description} /> 
     ))}
  </WrapperCard>
</ContainerCard>



     </>
  )
}
}

export default Work