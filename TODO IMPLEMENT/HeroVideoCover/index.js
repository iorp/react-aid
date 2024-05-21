  // Import necessary dependencies from the React library
import React, { useState, useEffect,forwardRef } from 'react'; 
import useLocale from '@iorp/react-aid/lib/hooks/useLocale';  
import useNamespace from '@iorp/react-aid/lib/hooks/useNamespace';
import useUrl from '@iorp/react-aid/lib/hooks/useUrl';
   
import './style.css'; // Import CSS file for styling
// import iconRcTm from '../../assets/logo/rc-tm.svg';
// import iconSq from '../../assets/logo/sq.svg';
// import logoFull from '../../assets/logo/full-bb.svg';
// import logoIcon from '../../assets/logo/icon-g.svg';
// import logoText from '../../assets/logo/text-b.svg';


 


const HeroVideoCover = React.forwardRef((props, ref) => {
	const [visible, setVisible] = useState(true);
	const [source, setSource] = useState();
	//   // Namespace 
	const {layout,data,options}= useNamespace(); 
	const {getUrlParams}= useUrl(); 
	//   // Language
  const {locale,L,setLanguage,setStrings} = useLocale();
  
   
  useEffect(() => {


	setSource(window.innerWidth >599 ? (getUrlParams('h')||'0'):'no'); // set default source if null, and no if its a phone

 
	// auto hide in 15
	setTimeout(()=>{
		if(visible) setVisible(false);
	},15000);
	 
	
  }, []);
  const handleDismiss = () => {
    setVisible(false);
	 
  };

  return (
	source && source!='no' &&
	<div style={{zIndex:999}}>
    <div className={`hero-video-cover ${visible ? 'hero-video-cover-visible' : 'hero-video-cover-hidden'}`} onClick={handleDismiss}>
      <div className="position-relative overflow-hidden" style={{width:'100vw',height:'100vh'}}>
	<div className="d-flex min-vh-100" lc-helper="video-bg">
 	<video preload="" muted loop  playsInline autoPlay style={{zIndex:1,objectFit:'cover',objectPosition:' 50% 50%'}} className="position-absolute w-100 min-vh-100"  >
  {/* <source src={require(`../../assets/video/${source}.mp4`)} type="video/mp4"/> */}
  <source src={require(`../../assets/video/${source}.webm`)} type="video/webm"/>
		</video>
		
		<div style={{zIndex:2}} className="align-self-center text-center text-light col-10 offset-1 col-md-8 offset-md-2">
			
    <img src={require( '../../assets/logo/full-gb.svg').default} alt={options.companyData.name} />
 
    {/* <h1 className="display-6 fw-normal">   {L("FromTheTopOfTheWorld")}     </h1> */}

  {/* <p className="col-md-10 col-lg-8 mx-auto lead">  {L("needSomethingMore")}  </p> */}
      
      {/* <div className="lc-block mb-4">
				
        <div editable="rich">
					<h1 className="display-1 fw-bolder">With Love and Respect</h1>
				</div>
			</div>

			<div className="lc-block">
				<div editable="rich">
					<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus porttitor dui.</p>

					<p className="lead">Sim in vestibulum metus pulvinar sit amet.

					</p>

				</div>
			</div>
*/}
			<div className="mt-4">
				{/* <svg onClick={()=>{this.closest('section').nextElementSibling.scrollIntoView({ behavior: 'smooth'  });}} width="4em" height="4em" viewBox="0 0 16 16" lc-helper="svg-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
					<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
					<path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"></path>
				</svg> */}

			</div> 
      
		</div>
	</div>
</div>
</div>
</div>
  );
});
 


export default HeroVideoCover;


// const AAAComponent = forwardRef((props, ref) => {


//   // Namespace 
//   const {layout,data,options}= useNamespace();
//   // Language
//   const {locale,L,setLanguage,setStrings} = useLocale();
//   // Access globally  refs
 

//     return ( 
         
// <div className="position-relative overflow-hidden">
// 	<div className="d-flex min-vh-100" lc-helper="video-bg">
//   <video preload="" muted loop  playsInline autoPlay style={{zIndex:1,objectFit:'cover',objectPosition:' 50% 50%'}} className="position-absolute w-100 min-vh-100"  >
 			 
// 			<source src="https://cdn.livecanvas.com/media/nature/video.mp4" type="video/mp4"/>
// 		</video>
// 		<div style={{zIndex:2}} className="align-self-center text-center text-light col-md-8 offset-md-2">
			
//     <img src={require( '../../assets/logo/full-gb.svg').default} alt={options.companyData.name} />
 
//     <h1 className="display-6 fw-normal">   {L("goFurtherWithFieldExperts")}     </h1>
//   {/* <p className="col-md-10 col-lg-8 mx-auto lead">  {L("needSomethingMore")}  </p> */}
      
//       {/* <div className="lc-block mb-4">
				
//         <div editable="rich">
// 					<h1 className="display-1 fw-bolder">With Love and Respect</h1>
// 				</div>
// 			</div>

// 			<div className="lc-block">
// 				<div editable="rich">
// 					<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus porttitor dui.</p>

// 					<p className="lead">Sim in vestibulum metus pulvinar sit amet.

// 					</p>

// 				</div>
// 			</div>
// */}
// 			<div className="mt-4">
// 				<svg onClick={()=>{this.closest('section').nextElementSibling.scrollIntoView({ behavior: 'smooth'  });}} width="4em" height="4em" viewBox="0 0 16 16" lc-helper="svg-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
// 					<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
// 					<path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"></path>
// 				</svg>

// 			</div> 
      
// 		</div>
// 	</div>
// </div>
 
// );
// });
// export default Component;
 
 