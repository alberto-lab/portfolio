import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { gsap } from "gsap";

import glass from '../img/joel-filipe-aK0EmfPuktA-unsplash.jpg';
import tree from '../img/laura-smetsers-St08jKkPVHw-unsplash.jpg';
import podio from '../img/podio2.png';
 


/* import { createGlobalStyle } from 'styled-components'  */
 



/* const GlobalStyle = createGlobalStyle`
html {
  
  --title:30px;
  --titleResp:50px;
  --titlesmall:30px;
  --titlesmallx:
  --paragraf:20px;
}
`; */



/*_______________________________ ITRODUCTION _______________________________*/


const Linea =styled.div`
width:100px;
height 3px;
background:#6AF2F0;
border-radius: 20px;
transform: translateY(-20px) translateX(-43px) rotate(90deg);
position:absolute;
`;

const Cerchio = styled.div`
width:15px;
height:15px;
border:solid 3px #6AF2F0;
border-radius:50%;
transform:translateY(65px);
`;

const Alinea2 = styled.div`
width:85px;
height:3px;
background: #6af2f061;
border-radius:20px;
position:absolute;
right:-45px;
transform:rotate(90deg) translateX(110px);

@media screen and (max-width:450px) {
  
  right:-107px;

}
`;

const Blinea2 = styled.div`
width:85px;
height:3px;
background: #6af2f061;
border-radius:20px;
position:absolute;
right:-45px;
transform:rotate(90deg) translateX(-130px);

@media screen and (max-width:450px) { 
  right:-107px;
}


`;

const Verticaltext = styled.div`
width:125px;
height:3px;
color:#aaa;
position:absolute;
right:10%;
transform:rotate(90deg) translateY(-77px);


@media screen and (max-width:450px) {
  
  transform:rotate(90deg) translateY(-137px);

}
`;

/*_______________________________WEB SITE_____block 2__________________________*/

 

const ContainerOut = styled.div`
 width:100%;
 height:70vh;
 display:flex;
 justify-content:center;
 

@media screen and (max-width:750px){
  

}
`;
const ContainerInt = styled.div`
width:80%;
height:70vh;
padding:10px;

 

@media screen and (max-width:750px){
  width:95%;

}
`;
 



const Rectangle = styled.div`
width:40vw;
height:100%;
background:#d6eaea;
float:right;
transition:all ease-in-out 0.8s;
padding:20px;

@media screen and (max-width:600px){
  width:80vw;
  
}
 
`;
const ContainerTxt = styled.div`
position:absolute;
width:50%;
padding-right:20px;
transition:all cubic-bezier(1, 0.09, 0.47, 1.29) 1s;
margin-top:180px;


@media screen and (max-width:915px) {
  width:95%;
  box-shadow: 0px 13px 10px -10px #333;
  background:#ffffff75;
  padding:35px;
  
}
@media screen and (max-width:515px) {
  
  background:#fffffff0;
  box-shadow: 0px 13px 10px -10px #333;
  padding:20px;
}


 
`;


/*_______________________________block 3____________________________*/

const WrapperSquare = styled.div`
width:20vw;
height:20vw;
transition:all ease-in-out 0.8s;



div {
   position:absolute;




  &:nth-child(1) {
    width:80px;
    height:80px;
    background:lightblue;
    transform:translateX(10px);
  }
  &:nth-child(2) {
    width:80px;
    height:80px;
    background:deepskyblue;
    transform:translateX(10px) translateY(120px);
  }
  &:nth-child(3) {
    width:50px;
    height:50px;
    background:#d1e8ef;
    transform:translateX(60px) translateY(170px);
  }
  &:nth-child(4) {
    width:50px;
    height:50px;
    background:lightblue;
    transform:translateX(100px) translateY(30px);
  }

}


`;


const Splitter = styled.div`
width:50%;
height:100vh;
float:left;
/* border:solid 2px green; */
`;



const ContainerImg = styled.div`
position:relative;

img{
  width:470px;
  height:auto;
  transition:all cubic-bezier(1, 0.09, 0.47, 1.29) 1s;
}


@media screen and (max-width:900px) {
  img{
    width:200px;
    height:auto;
  }
  
}


`;

const TreeRectangleTxt = styled.div`
position:relative;
top:250px;
right:180px;
transition:all cubic-bezier(1, 0.09, 0.47, 1.29) 1s;


@media screen and (max-width:600px) {
  
}
`;

const TreeRectangleStretch = styled.div`
position:absolute;
text-align:center;
width:550px;
transition:all cubic-bezier(1, 0.09, 0.47, 1.29) 1s;

@media screen and (max-width:900px) {
  
  width:350px;
}
`;
const ContainerIntInsieme = styled.div`
width:60%;
height:100vh;
text-align:center;
padding-top:50px;


@media screen and (max-width:900px) {
  width:90%;
  padding-top:0px;
  transform:translateY(-170px);
  
}
`;




export default function Home() {
  
/* ----------------apear text fx------------------ */
  function Boxy({ children }) {

  return <div className="boxy">{children}</div>;}
  
  const el = useRef();
  const q = gsap.utils.selector(el);
  
  useEffect(() => {

    gsap.from(q(".boxy"), {
      y: 200,
      stagger: 0.16,
      repeatDelay: 1,
      opacity:0,
      yoyo: true
    });

    gsap.to(q(".boxy"), {
      y: 0,
      stagger: 0.16,
      repeatDelay: 0,
      delay:0,
      opacity:1,
      yoyo: false
    });
    
   /*   this line disable a worning */
    // eslint-disable-next-line
  }, []);

/* ----------------  fx------------------ */

const obj = useRef();

useEffect(() => {
  const elemento = obj.current;
  gsap.fromTo(elemento, {rotationX: 0}, {rotationX:360, duration: 3})

}, [])








/* ----------------scroll fx------------------ */
const [offsetY, setOffsetY] = useState(0); 
const hendleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
  window.addEventListener("scroll", hendleScroll);

  return () => window.removeEventListener("scroll", hendleScroll);
}, []);


  return (
    <>
  



    <div style={{width:'100%',height:'100vh',background:'#fff',display:'flex', justifyContent:'center',alignItems:'center'}}>
       <div style={{textAlign:'center',transform:'translateY(-30px)'}}>

        <div ref={el}>
          <Boxy>
            <h1 style={{padding:'10px'}}  >Odeyemi Alberto </h1>
          </Boxy>

          <Boxy>
           <h4 style={{padding:'10px'}}>frontend developer</h4>
           </Boxy>

           
          <Boxy>
           <p style={{padding:'10px'}}>welcome</p>
           </Boxy>

            <div style={{marginTop:'70px',display:'flex', justifyContent:'center', alignItems:'center'}}>
          
          
            <Boxy>
              <Linea/>
           </Boxy>

           <Boxy>
              <Linea/>
              <Cerchio/>
           </Boxy>

              </div>
           </div>
       </div>




      <div style={{position:'absolute',right:'80px'}}>
        <div style={{position:'absolute',top:'-20px',right:'5px'}}>
          
         <Alinea2/>
          <Verticaltext>
             <h3 ref={obj}>web deisgn</h3>
             
          </Verticaltext>
         <Blinea2/>
        </div>
    </div>


    </div>
       {/* _________________________WEB SITE______block 2________________________ */}

 
  
  <ContainerOut>
     <ContainerInt>




    <Rectangle>
      <div style={{
        height:'100%',
        backgroundImage: `url(${glass})`,
        backgroundSize:'cover',
        boxShadow:'0px 13px 10px -10px #333',
        transform:`translateY(-${offsetY * 0.11}px) translateX(25px)`
      /*   transform:'translateY(35px) translateX(25px)' */
      }}></div>
    </Rectangle>



    <div style={{position:'relative'}}>
      <ContainerTxt>
       
        <h3 style={{color:'#cccccccf'}} >di cosa mi occupo</h3>
        <h1 style={{fontSize:'60px',color:'#059DC0'}} >Webdesign</h1>
        <div style={{width:'190px',borderBottom:'solid 4px #059DC0',borderRadius:'10%'}} />
        
        <br/>
   
 
        <div>
          <p>
          faccio in modo che la prima impressione 
          della tua immagine sul web sia semplice, autentica, 
          ma di grande impatto e moderna
          <br/>
          <br/>
          comunicando trasparenza d’intenti
          e chiarezza nei contenuti
 
  
          </p>
        </div>
     
      </ContainerTxt>
    </div>




     </ContainerInt>
  </ContainerOut>

       {/* ______________________block 3____________________________________ */}

 
  
  <div style={{width:'100%', height:'100vh',display:'flex',justifyContent:'center'}}>
     <div style={{width:'90%', height:'100vh'}}>




<Splitter>
  <WrapperSquare>
     <div />
     <div />
     <div />
     <div />
     
     <ContainerImg>
     <img src={tree} style={{
     
      position:'absolute',
      top:'130px',
      left:'150px'}} alt='tree' />
    </ContainerImg>
    
  </WrapperSquare>
</Splitter>



<Splitter>
   
    <TreeRectangleTxt>
      <TreeRectangleStretch>
        <h3 style={{color:'#cccccccf',padding:'10px'}} >come svolgo il mio lavoro</h3>
        <div style={{padding:'35px',background:'#00bfffa8'}} >
        <h1 style={{fontSize:'30px',color:'#fff',padding:'0 0 20px 0'}} >valorizzo le diversità</h1>
        <p style={{color:'#fff'}} >non posso rendere uniche le aziende ma evidenziando la loro diversità
         posso aiutare il cliente finale a scegliere con consapevolezza 
         la loro decisioone portandolo a vivere un’esperienza coerente con
         quello che hanno scoperto in voi e piu consapevoli di cosa stanno cercando</p>
        </div>
      </TreeRectangleStretch>
    </TreeRectangleTxt>
</Splitter>



     </div>
  </div>


  
{/* _________________________WEB SITE______block 4_______________________ */}

 
  
    <div style={{width:'100%', height:'100vh',display:'flex',justifyContent:'center'}}>
      <ContainerIntInsieme>
  
       <div style={{position:'relative'}}>
         <h3 style={{color:'#cccccccf',padding:'15px'}} >cosa possiamo fare insieme</h3>
         <h1 style={{fontSize:'30px',color:'#059DC0',padding:'15px'}} >afferma la tua posizione</h1>
         <p>non competeremo per la lidership ma la otterremo considerando i punti di
         forza di debolezza e fissando degli obiettivi da ragiungere.
         le sfide piu grandi sono quelle che affrontiamo da soli con noi stessi
         <br/>
         <br/>
         per la coompetizione c’è sempre lo sport !</p>
       </div>

       <img src={podio}alt='podio' style={{width:'350px',height:'auto'}} />
     
    </ContainerIntInsieme>
  </div>
   










    </>
  );
 }







 