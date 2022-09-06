import React, { Component } from 'react'
import styled from 'styled-components';








const ContainerBox = styled.div`
width:33%;
height:350px;
float:left;
padding:10px 0 30px 0;
/* border:solid 1px black; */
transition all ease-in-out 0.8s;
margin-bottom:10px;


@media screen and (max-width:769px) {
  width:100%;
 
}
`;
 
const BoxInt = styled.div`
width:100%;

`;






class Square extends Component {
    render(){


    
 
  return (
      <>
<div style={{width:'100%'}}>
  <BoxInt>

      <ContainerBox>
        <div style={{margin:'10px',border:'solid 1px black'}}>

        <div style={{padding:'10px'}}>
         <div style={{width:'100%',height:'150px',background:'#aaa'}}></div>
           <p style={{paddingBottom:'3px'}}>work name:{this.props.title}</p>
           <p style={{paddingBottom:'3px'}}>description:{this.props.description}</p>
         </div>    
        </div>
      </ContainerBox>

 
  </BoxInt>
</div>
    
      </>
  );
 }
}

export default Square