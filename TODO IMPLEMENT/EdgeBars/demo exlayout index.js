
 import React, { createRef, useEffect, forwardRef} from 'react'; 
 import useLocale from '@iorp/react-aid/lib/hooks/useLocale';  
 import 'bootstrap/dist/css/bootstrap.min.css';  
  
     
 import useNamespace from '@iorp/react-aid/lib/hooks/useNamespace';
 import useUrl from '@iorp/react-aid/lib/hooks/useUrl';
 import LanguageSwitcher from '../LanguageSwitcher'
   import {Button,Container,Nav,OverlayTrigger,Tooltip} from 'react-bootstrap';
 import Footer from '../../components/Footer';
 import TopBar from '../TopBar';    
 import LeftBar from '../LeftBar'
 import ScrollToTop from '../../components/ScrollToTop';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faXmark } from '@fortawesome/free-solid-svg-icons';  


import Navbar from '@iorp/react-aid/lib/components/Navbar'; 
import EdgeBars from '../../components/EdgeBars'; 
  require('./../../style.css'); // global style 
 require('./style.css'); // layout style s
 
   
 
  
 const TButton = (props)=>{

  const placement = props.placement || 'bottom';
  const Tip = typeof props.tip =='function' ? props.tip: 
              typeof props.tip =='string'? ()=>{return <>{props.tip}</>} : 
              null;
  return  (
    props &&   props.tip &&
<OverlayTrigger  placement={placement}  overlay={
 <Tooltip id={`tooltip-${placement}`} style={{zIndex:999999}}>
   <Tip/>
  </Tooltip>
}
>
<button {...props}> {props.children}</button>
</OverlayTrigger>
  )
 }

 
 const Layout = (props) => { 
   const { refs,setRefs } = useNamespace();
   const {locale,L,setLanguage,setStrings,getString} = useLocale()
 
   const { getUrlArgs } = useUrl();

   
   useEffect(() => {
    // document.body.style.overflow = 'hidden'; // Disable scrolling in body

    // set namespaceOptions from config.js
   // setOptions(deepMerge(options,namespaceOptions));
 
   // Get strings
   setStrings({en:require('../../strings/en.json')});
   setStrings({vn:require('../../strings/vn.json')});
   setStrings({ru:require('../../strings/ru.json')});
 
   // set the language by url parameter 
    const languageUrlParam = getUrlArgs('l');
    if(languageUrlParam)setLanguage(languageUrlParam);
     // create layout refs as object 
 
     setRefs({
       navbar0:createRef(), 
      leftbar:createRef(), 
      main:createRef(),  
       footer:createRef(), 
   }) ;
   }, []);
 
  
// useEffect(() => {
//   if (!refs)return;
// console.log(refs.header);

// if (refs.header) console.log(refs.header.current);
// }, [refs]);



    
   return (
    
       refs  &&   <>
 
<EdgeBars style={{top:4,left:4}}>

 
<EdgeBars.Item k={{x:0,y:0,d:'e'}} >
<button className="btn btn-dark"> <FontAwesomeIcon icon={faXmark} />  </button>
 </EdgeBars.Item>
<EdgeBars.Item k={{x:1,y:0,d:'e'}} >
  <TButton className="btn btn-light ms-1" tip={()=>{return <>Tooltip on <strong>button!</strong>.</>}}><FontAwesomeIcon icon={faXmark} /></TButton>

<OverlayTrigger  placement={'right'}  overlay={
        <Tooltip id={`tooltip-${'right'}`} style={{zIndex:999999}}>
          Tooltip on <strong>{'right'}</strong>.
        </Tooltip>
      }
    >
    <button  href="#resume"  className="btn btn-light  ms-1 scrollto active"> <FontAwesomeIcon icon={faXmark} />  </button>
</OverlayTrigger>

<button className="btn btn-primary ms-1"> <FontAwesomeIcon icon={faXmark} />  </button>
<button className="btn btn-primary ms-1"> <FontAwesomeIcon icon={faXmark} />  </button>
</EdgeBars.Item>

<EdgeBars.Item k={{x:0,y:-1,d:'b'}} >
<button className="btn btn-secondary mt-1"> <FontAwesomeIcon icon={faXmark} />  </button>
<button className="btn btn-secondary mt-1"> <FontAwesomeIcon icon={faXmark} />  </button>
</EdgeBars.Item>
 





</EdgeBars>


{/* 
<EdgeBars style={{top:300,left:200}}>

 
  <EdgeBars.Item k={{x:0,y:0,d:'e'}} >
  <button className="btn btn-dark"> <FontAwesomeIcon icon={faXmark} />  </button>
   </EdgeBars.Item>
  <EdgeBars.Item k={{x:1,y:0,d:'e'}} >
  <button className="btn btn-primary"> <FontAwesomeIcon icon={faXmark} />  </button>
  <button className="btn btn-primary"> <FontAwesomeIcon icon={faXmark} />  </button>
  </EdgeBars.Item>

  <EdgeBars.Item k={{x:0,y:-1,d:'b'}} >
  <button className="btn btn-secondary"> <FontAwesomeIcon icon={faXmark} />  </button>
  <button className="btn btn-secondary"> <FontAwesomeIcon icon={faXmark} />  </button>
  </EdgeBars.Item>
  <EdgeBars.Item k={{x:0,y:1,d:'t'}} >
  <button className="btn btn-warning"> <FontAwesomeIcon icon={faXmark} />  </button>
  <button className="btn btn-warning"> <FontAwesomeIcon icon={faXmark} />  </button>
  </EdgeBars.Item>
    
  <EdgeBars.Item k={{x:-1,y:0,d:'s'}} >
  <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button>
  <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button>
  
  </EdgeBars.Item>


 


</EdgeBars>

 
<EdgeBars style={{top:300,left:400}}>


  <EdgeBars.Item k={{x:0,y:0,d:'e'}} >
  <button className="btn btn-dark"> <FontAwesomeIcon icon={faXmark} />  </button>
  <EdgeBars.Menu>
  <EdgeBars.Item k={{x:-1,y:0,d:'s'}} >
  <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button>
  <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button>
  
  </EdgeBars.Item>

  <EdgeBars.Item k={{x:1,y:0,d:'e'}} >
  <button className="btn btn-primary"> <FontAwesomeIcon icon={faXmark} />  </button>
  <button className="btn btn-primary"> <FontAwesomeIcon icon={faXmark} />  </button>
  </EdgeBars.Item>

  <EdgeBars.Item k={{x:0,y:1,d:'t'}} >
  <button className="btn btn-warning"> <FontAwesomeIcon icon={faXmark} />  </button>
  <button className="btn btn-warning"> <FontAwesomeIcon icon={faXmark} />  </button>
  </EdgeBars.Item>
 
  <EdgeBars.Item k={{x:0,y:-1,d:'b'}} >
  <button className="btn btn-secondary"> <FontAwesomeIcon icon={faXmark} />  </button>
  <button className="btn btn-secondary"> <FontAwesomeIcon icon={faXmark} />  </button>
  </EdgeBars.Item>
</EdgeBars.Menu>
   </EdgeBars.Item>
 


</EdgeBars>
 
<EdgeBars style={{top:300,left:600}}>

 
  <EdgeBars.Item k={{x:0,y:0,d:'e'}} >
  <button className="btn btn-dark"> <FontAwesomeIcon icon={faXmark} />  </button>
  
    <EdgeBars.Menu className="show">
    <EdgeBars.Item k={{x:-1,y:0,d:'s'}} >
    <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button>
    <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button>
    
    </EdgeBars.Item>

    <EdgeBars.Item k={{x:1,y:0,d:'e'}} >
    <button className="btn btn-primary"> <FontAwesomeIcon icon={faXmark} />  </button>
    <button className="btn btn-primary"> <FontAwesomeIcon icon={faXmark} />  </button>
    
    </EdgeBars.Item>

    <EdgeBars.Item k={{x:0,y:1,d:'t'}} >
    <button className="btn btn-warning"> <FontAwesomeIcon icon={faXmark} />  </button>
    <button className="btn btn-warning"> <FontAwesomeIcon icon={faXmark} />  </button>
      <EdgeBars.Menu className="show">
      <EdgeBars.Item k={{x:1,y:0,d:'e'}} >
      <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button>
      <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button>
      <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button> 
        <EdgeBars.Menu className="show">
        <EdgeBars.Item k={{x:2,y:1,d:'t'}} >
        <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button>
        <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button>
        <button className="btn btn-danger"> <FontAwesomeIcon icon={faXmark} />  </button> 
        </EdgeBars.Item>

    
      </EdgeBars.Menu>
      
      </EdgeBars.Item>

  
    </EdgeBars.Menu>
    
    </EdgeBars.Item>
  
    <EdgeBars.Item k={{x:0,y:-1,d:'b'}} >
    <button className="btn btn-secondary"> <FontAwesomeIcon icon={faXmark} />  </button>
    <button className="btn btn-secondary"> <FontAwesomeIcon icon={faXmark} />  </button>
    </EdgeBars.Item>
  </EdgeBars.Menu>
   </EdgeBars.Item>
 


</EdgeBars>
 */}
 
 <div>

 
 
{/*  

<Navbar className="navbar nav-menu">
      <ul>
      <li>
      <a href="#hero" className="nav-link scrollto active">
      <i className="bx bx-home">
      </i>
       <span>
      Home</span>
      </a>
      </li>
      <li>
      <a href="#about" className="nav-link scrollto">
      <i className="bx bx-user">
      </i>
       <span>
      About</span>
      </a>
      </li>
      <li>
      <a href="#resume" className="nav-link scrollto">
      <i className="bx bx-book">
      </i>
       <span>
      Resume</span>
      </a>
      </li>
      <li>
      <a href="#skills" className="nav-link scrollto">
      <i className="bx bx-book-content">
      </i>
       <span>
      Skills</span>
      </a>
      </li>
      <li>
      <a href="#repos" className="nav-link scrollto">
      <i className="bx bxl-github">
      </i>
       <span>
      Repos</span>
      </a>
      </li>
      <li>
      <a href="#contact" className="nav-link scrollto">
      <i className="bx bx-envelope">
      </i>
       <span>
      Contact</span>
      </a>
      </li>
      </ul>
      </Navbar> */}


 {/* <div className="pf-topbar" >
 <button className={'btn btn-dark d-block  d-drawer-none'} variant="dark"   
  onClick={() => {refs.leftbar && refs.leftbar.current.toggleDrawer()}}
  >
 <FontAwesomeIcon icon={faBars} />
 </button>
 
  <LanguageSwitcher className="d-drawer-none"  drop={'down'} align={'end'} />
 </div> */}



{/* 
 <i className="bi bi-list pf-topbar d-lg-none">
 </i> */}

 
 {/* <LeftBar ref={refs.leftbar}/> */}
 {/* <nav id="navbar" className="navbar nav-menu">
 <ul>
 <li>
 <a href="#hero" className="nav-link scrollto active">
 <i className="bx bx-home">
 </i>
  <span>
 Home</span>
 </a>
 </li>
 <li>
 <a href="#about" className="nav-link scrollto">
 <i className="bx bx-user">
 </i>
  <span>
 About</span>
 </a>
 </li>
 <li>
 <a href="#resume" className="nav-link scrollto">
 <i className="bx bx-book">
 </i>
  <span>
 Resume</span>
 </a>
 </li>
 <li>
 <a href="#skills" className="nav-link scrollto">
 <i className="bx bx-book-content">
 </i>
  <span>
 Skills</span>
 </a>
 </li>
 <li>
 <a href="#repos" className="nav-link scrollto">
 <i className="bx bxl-github">
 </i>
  <span>
 Repos</span>
 </a>
 </li>
 <li>
 <a href="#contact" className="nav-link scrollto">
 <i className="bx bx-envelope">
 </i>
  <span>
 Contact</span>
 </a>
 </li>
 </ul>
 </nav> */}

 <section id="hero" className="d-flex flex-column justify-content-center">
 <div className="container aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
 <h1 name="name">
 Joaquin R. Pretel</h1>
 <p>
 I'm <span className="typed" data-typed-items="Electronic Engineer, Software Developer, Process Automatee, Tech person">
 Electronic Engine</span>
 <span className="typed-cursor" aria-hidden="true">
 |</span>
 </p>
 <div name="social-links" className="social-links">
 <a href="https://github.com/iorp" className="github">
 <i className="bx bxl-github">
 </i>
 </a>
 <a href="https://www.linkedin.com/in/iorp/" className="linkedin">
 <i className="bx bxl-linkedin">
 </i>
 </a>
 <a href="https://www.facebook.com/profile.php?id=100092558602690&amp;mibextid=ZbWKwL" className="facebook">
 <i className="bx bxl-facebook">
 </i>
 </a>
 <a href="https://wa.me/84387747093?text=Hello%20from%20your%20portfolio!" className="whatsapp">
 <i className="bx bxl-whatsapp">
 </i>
 </a>
 </div>
 </div>
 </section>
 <main id="main">
 <section id="about" className="about">
 <div className="container aos-init" data-aos="fade-up">
 <div className="section-title">
 <h2>
 About</h2>
 <p>
 Graduate in Electronics product development and an experienced MERN Stack Developer with a passion for crafting efficient code, upholding ethical values, and delivering sustainable solutions. Proficient in RESTful APIs, I bring expertise in PHP, SQL, JavaScript, and more to my projects. With a track record of successful endeavors, I'm dedicated to excellence in every aspect of my work.</p>
 </div>
 <div className="row">
 <div className="picture col-lg-4">
 <img src="https://truegrains.vn/iorp/Portfolio/api/ioserver/portfolio/media/profile-img.jpg?key=?6F3E" className="img-fluid" alt=""/>
 </div>
 <div className="col-lg-8 pt-4 pt-lg-0 content">
 <h3>
 About</h3>
 <p className="fst-italic">
 With over 6 years of seasoned expertise in Full Stack Development and Industrial Programming, I excel at turning complex challenges into elegant solutions.</p>
 <div className="row">
 <div className="col-lg-6">
 <ul>
 <li>
 ▶&nbsp; <strong>
 Birthyear:</strong>
  <span>
 1987</span>
 </li>
 <li>
 ▶&nbsp; <strong>
 Public Git:</strong>
  <span>
 <a href="https://github.com/iorp">
 https://github.com/iorp</a>
 </span>
 </li>
 <li>
 ▶&nbsp; <strong>
 Cities:</strong>
  <span>
 Hanoi, Dublin, Madrid, Remote</span>
 </li>
 </ul>
 </div>
 <div className="col-lg-6">
 <ul>
 <li>
 ▶&nbsp; <strong>
 Degree:</strong>
  <span>
 Electronics Product Development</span>
 </li>
 <li>
 ▶&nbsp;<strong>
 Nationality:</strong>
  <span>
 Spanish</span>
 </li>
 <li>
 ▶&nbsp;  <strong>
 Remote :</strong>
  <span>
 Available</span>
 </li>
 </ul>
 </div>
 </div>
 <p>
 An experienced professional with a deep commitment to excellence and a strong ethical foundation. With years of dedicated service, I bring loyalty, a passion for innovation, and a drive to find elegant solutions to complex challenges. Committed to delivering outstanding results and making a lasting impact.</p>
 </div>
 </div>
 </div>
 </section>
 <section id="resume" className="resume">
 <div className="container aos-init" data-aos="fade-up">
 <div className="section-title">
 <h2>
   Resume</h2>
 </div>
 <div className="row">
 <div className="col-lg-6">
 <h3 className="resume-title">
  Summary</h3>
 <div className="resume-item pb-0">
 <h4>
 Joaquin R. Pretel</h4>
 <p>
 <em>
 Innovative and deadline-driven Software Engineer with 6+ years of experience in developing user-centered software solutions from initial concept to final, polished deliverable. A proven track record of designing and creating efficient, elegant code that meets and exceeds project goals.</em>
 </p>
 </div>
 <h3 className="resume-title">
 Education</h3>
 <div className="resume-item">
 <h4>
 SUPERIOR DEGREE OF COMPUTER SYSTEMS</h4>
 <h5>
 2013 - 2017</h5>
 <p>
 <em>
 GHLBI IURRETA, Iurreta, Spain</em>
 </p>
 <p>
 Convalidated a Degree in Computer Systems with a concentration in Database Management, Modern Environments, and Programming Languages. Excelled in coursework related to computer systems, showcasing proficiency in various technologies and programming languages.</p>
 <ul className="hidden-content">
 <li>
 <b>
 Database Management</b>
 : In-depth study of databases, including relational database design, SQL querying, and database optimization. Applied knowledge to design and manage databases efficiently.</li>
 <li>
 <b>
 Modern Environments</b>
 : Explored modern computing environments, including cloud computing platforms (e.g., AWS, Azure) and containerization technologies (e.g., Docker, Kubernetes). Acquired skills in deploying and managing applications in contemporary settings.</li>
 <li>
 <b>
 C++ Programming</b>
 : Proficiency in C++ programming language, emphasizing software development, system-level programming, and application in building high-performance systems.</li>
 <li>
 <b>
 Java Development</b>
 : Mastery of Java programming language, including object-oriented design principles. Applied Java in the development of robust and scalable applications, demonstrating expertise in cross-platform development.</li>
 <li>
 <b>
 JavaScript, React, Node.js</b>
 : Expertise in JavaScript, React.js, and Node.js for frontend and server-side development. Leveraged these technologies to create responsive and dynamic web applications, showcasing a deep understanding of modern web development.</li>
 <li>
 <b>
 PHP and .NET, C#</b>
 : Proficiency in PHP for server-side scripting and .NET framework with C# for building scalable and secure web applications. Applied these technologies in various projects, contributing to the development of dynamic and feature-rich web solutions.</li>
 <li>
 <b>
 Software Development Life Cycle (SDLC)</b>
 : Comprehensive understanding of the Software Development Life Cycle, from project planning and requirements gathering to testing, deployment, and maintenance. Applied SDLC principles in real-world projects to ensure efficient and high-quality software delivery.</li>
 <li>
 <b>
 Data Structures and Algorithms</b>
 : Advanced knowledge of data structures and algorithms, including their application in solving complex computational problems. Demonstrated proficiency in algorithmic thinking and problem-solving.</li>
 <li>
 <b>
 Network Security</b>
 : Explored principles and practices of network security, including encryption, authentication, and secure communication protocols. Implemented security measures in software development projects to ensure data protection and system integrity.</li>
 <li>
 <b>
 System Architecture</b>
 : Studied system architecture principles, focusing on the design and organization of computer systems. Acquired skills in optimizing system performance and ensuring scalability in different computing environments.</li>
 <li>
 <b>
 Software Testing and Quality Assurance</b>
 : In-depth knowledge of software testing methodologies and quality assurance processes. Applied testing techniques to ensure the reliability and correctness of software solutions.</li>
 <li>
 <b>
 Mobile App Development</b>
 : Explored mobile app development using modern frameworks, including React Native and Xamarin. Developed cross-platform mobile applications, showcasing versatility in mobile app development.</li>
 <li>
 <b>
 Artificial Intelligence and Machine Learning</b>
 : Introduction to artificial intelligence and machine learning concepts. Applied machine learning algorithms to solve real-world problems, showcasing an understanding of AI applications in computer systems.</li>
 </ul>
 <a href="#" className="read-toggle inline">
 Read more</a>
 </div>
 <div className="resume-item">
 <h4>
 NANOMETROLOGY LAB INTERNSHIP &amp; PHOTONICS, AFM DEVELOPMENT</h4>
 <h5>
 2013 - 2015</h5>
 <p>
 <em>
 WROCLAW UNIVERSITY OF TECHNOLOGY, Breslau, Poland</em>
 </p>
 <p>
 Participated in a highly valuable internship as a Nanometrology lab technician. Actively contributed to the development of Atomic Force Microscopes, gaining hands-on experience in cutting-edge technology. Worked closely with a team of experts to enhance the precision and capabilities of these advanced instruments.</p>
 <ul className="hidden-content">
 <li>
 <b>
 Interferometry</b>
 : Studied principles, including Michelson and Fabry-Perot interferometers, for nanoscale precision measurements.</li>
 <li>
 <b>
 Atomic Force Microscope (AFM) Construction</b>
 : Actively participated in assembling critical AFM components, like cantilevers and optical systems.</li>
 <li>
 <b>
 Nanometrology Techniques</b>
 : Explored advanced techniques, including scanning probe microscopy and near-field scanning optical microscopy (NSOM), for nanoscale characterization.</li>
 <li>
 <b>
 Microfabrication Processes</b>
 : Developed skills in microfabrication techniques, such as photolithography and thin-film deposition, for custom AFM components.</li>
 <li>
 <b>
 Materials Science</b>
 : Investigated material properties for AFM material selection and instrument design.</li>
 <li>
 <b>
 Data Analysis and Software Tools</b>
 : Proficiently used specialized software for AFM data analysis, including image processing and force spectroscopy.</li>
 <li>
 <b>
 Instrument Optimization</b>
 : Collaborated to optimize AFM performance, addressing noise reduction, calibration, and tip-sample interactions.</li>
 <li>
 <b>
 Advanced Imaging Modes</b>
 : Explored advanced AFM imaging modes like tapping mode and contact mode for various samples.</li>
 <li>
 <b>
 Quality Control and Calibration</b>
 : Ensured accurate measurements through quality control and calibration processes.</li>
 <li>
 <b>
 Optical Systems Integration</b>
 : Integrated laser diodes and photodetectors into AFMs for enhanced imaging.</li>
 <li>
 <b>
 Research Collaboration</b>
 : Worked with a multidisciplinary team on collaborative research projects.</li>
 <li>
 <b>
 Metrology Standards and Traceability</b>
 : Adhered to metrology standards, maintaining traceability and accuracy in nanoscale measurements.</li>
 <li>
 <b>
 Documentation and Reporting</b>
 : Maintained meticulous records, contributing to research publications and documentation.</li>
 <li>
 <b>
 Safety Protocols and Cleanroom Practices</b>
 : Ensured strict adherence to safety protocols and cleanroom practices for nanoscale equipment and materials.</li>
 </ul>
 <a href="#" className="read-toggle inline">
 Read more</a>
 </div>
 <div className="resume-item">
 <h4>
 SUPERIOR DEGREE OF ELECTRONICS &amp; ELECTRONIC PRODUCT DEVELOPMENT</h4>
 <h5>
 2008 - 2013</h5>
 <p>
 <em>
 GHLBI IURRETA, Iurreta, Spain</em>
 </p>
 <p>
 Degree of Electronics with a concentration in Microsystems and Electronic products development. Graduated with honors and achieved a GPA of 2.9/4.0. Excelled in coursework related to microsystems, demonstrating a deep understanding of electronic systems on a small scale.</p>
 <ul className="hidden-content">
 <li>
 <b>
 Mathematics</b>
 : Foundational mathematics for engineering, including calculus, algebra, and differential equations, providing essential problem-solving skills.</li>
 <li>
 <b>
 Computer Science</b>
 : Fundamental concepts in computer science, including algorithms, data structures, and computational thinking.</li>
 <li>
 <b>
 Programming in C</b>
 : Proficiency in C programming language, emphasizing software development and system-level programming.</li>
 <li>
 <b>
 Electronic Circuit Design</b>
 : Mastery of analog and digital circuit design, crucial for microsystems and electronic devices.</li>
 <li>
 <b>
 Microelectronics</b>
 : In-depth study of semiconductor physics and the creation of integrated circuits, pivotal in microsystem development.</li>
 <li>
 <b>
 Embedded Systems</b>
 : Proficiency in programming and designing embedded systems, from IoT devices to microcontrollers.</li>
 <li>
 <b>
 Signal Processing</b>
 : Expertise in processing and interpreting signals, vital for microsystems and electronic product enhancement.</li>
 <li>
 <b>
 Digital Systems</b>
 : Understanding digital logic design and architecture, fundamental for microprocessor-based systems.</li>
 <li>
 <b>
 Microfabrication</b>
 : Mastery of techniques for producing microelectronic components and sensors.</li>
 <li>
 <b>
 Sensor Technology</b>
 : Application-focused study of sensor principles and integration into electronic products.</li>
 <li>
 <b>
 Electronic Product Development</b>
 : Comprehensive knowledge from concept to production, including design, testing, and optimization.</li>
 <li>
 <b>
 Analog and Digital Electronics</b>
 : In-depth exploration of both analog and digital electronic systems, their theory, and applications.</li>
 <li>
 <b>
 Communication Systems</b>
 : Proficiency in communication protocols and technologies to connect microsystems and devices.</li>
 <li>
 <b>
 Control Systems</b>
 : Application of control theory for automation and feedback control in electronic products.</li>
 <li>
 <b>
 Microcontroller Programming</b>
 : Skill development in programming microcontrollers and microprocessors.</li>
 <li>
 <b>
 Materials Science</b>
 : Understanding materials in microelectronics, their properties, and their impact on component design.</li>
 <li>
 <b>
 Project Management</b>
 : Expertise in project planning and management for overseeing electronic product development.</li>
 <li>
 <b>
 Microsystem Integration</b>
 : Focused on efficient integration of microsystem components, emphasizing miniaturization.</li>
 <li>
 <b>
 Digital Signal Processing</b>
 : Advanced techniques for processing signals, including applications in image and audio processing.</li>
 <li>
 <b>
 Failure Analysis and Reliability</b>
 : Investigation of failure mechanisms and reliability assessment for electronic products.</li>
 <li>
 <b>
 Circuit Simulation and Modeling</b>
 : Proficiency in using software tools to simulate and model electronic circuits and systems.</li>
 <li>
 <b>
 Photonics</b>
 : In-depth study of photonics principles and their diverse applications in optics and light-based technologies.</li>
 <li>
 <b>
 Optics and Laser</b>
 : Partial understanding of optics and laser technologies, relevant to photonics and optics-based systems.</li>
 </ul>
 <a href="#" className="read-toggle inline">
 Read more</a>
 </div>
 </div>
 <div className="col-lg-6">
 <h3 className="resume-title">
  Professional experience</h3>
 <div className="resume-item">
 <h4>
 PRODUCTION ENGINEER</h4>
 <h5>
 2023 - present</h5>
 <p>
 <em>
 TTHH True Grains, Hanoi , Vietnam</em>
 </p>
 <p>
 Oversee CNC machinery operations, optimizing processes for efficient cereal packaging, while also conducting maintenance and troubleshooting. Strategically plan production schedules, enhance efficiency, and reduce waste while maintaining detailed records for future analysis.</p>
 <ul className="hidden-content">
 <li>
 <b>
 CNC Machinery Management</b>
 : Overseeing and optimizing the operation of CNC machinery for precise and efficient cereal packaging processes. This includes programming, maintenance, and troubleshooting to ensure smooth production.</li>
 <li>
 <b>
 Production Planning</b>
 : Strategically planning production schedules, considering factors like demand, resources, and machine capabilities, to ensure efficient and timely cereal packaging.</li>
 <li>
 <b>
 Maintenance and Upkeep</b>
 : Conducting regular maintenance on machinery and equipment to prevent breakdowns and minimize downtime, contributing to continuous production.</li>
 <li>
 <b>
 Process Optimization</b>
 : Identifying opportunities for process improvement and implementing changes to increase efficiency, reduce waste, and enhance productivity. Harmoniously merged Python software with ATMEL microcontroller technology.</li>
 <li>
 <b>
 Documentation</b>
 : Maintaining detailed records of production data, maintenance schedules, and quality control reports for future reference and analysis.</li>
 </ul>
 <a href="#" className="read-toggle inline">
 Read more</a>
 </div>
 <div className="resume-item">
 <h4>
 FRONTEND DEVELOPER</h4>
 <h5>
 2019 - 2023</h5>
 <p>
 <em>
 AOT, Dublin, Ireland</em>
 </p>
 <p>
 Specialized in frontend development, primarily focusing on crafting robust and dynamic React forms for e-commerce applications and stock management systems. Contributed to the enhancement of user interfaces, ensuring seamless interactions and optimal user experiences.</p>
 <ul className="hidden-content">
 <li>
 <b>
 React.js Development</b>
 : Expertise in React.js for building highly interactive and responsive user interfaces. Implemented and optimized React forms for e-commerce applications, providing users with intuitive and efficient data input experiences.</li>
 <li>
 <b>
 E-commerce Applications</b>
 : Contributed to the development of React forms tailored for e-commerce apps. Collaborated with cross-functional teams to implement features that enhance the shopping experience, including streamlined checkout processes and dynamic product catalog displays.</li>
 <li>
 <b>
 Stock Management Systems</b>
 : Played a key role in designing and implementing React-based forms for stock management applications. Developed intuitive interfaces for managing inventory, facilitating efficient stock tracking, and optimizing order fulfillment processes.</li>
 <li>
 <b>
 Keyboard Accessibility</b>
 : Ensured keyboard accessibility in React forms, adhering to best practices for web accessibility. Implemented features that enable users to navigate and interact with forms seamlessly using keyboard inputs, enhancing accessibility for a diverse user base.</li>
 <li>
 <b>
 Form Validation and Error Handling</b>
 : Implemented robust form validation and error-handling mechanisms in React. Utilized industry-standard practices to validate user inputs, providing clear feedback and improving the overall reliability of e-commerce and stock management applications.</li>
 <li>
 <b>
 Responsive Design</b>
 : Contributed to the development of responsive user interfaces, ensuring React forms adapt seamlessly to various screen sizes and devices. Implemented responsive design principles to enhance user experiences on both desktop and mobile platforms.</li>
 <li>
 <b>
 State Management with Redux</b>
 : Utilized Redux for efficient state management in React applications. Implemented centralized state management in forms, ensuring consistent data flow and facilitating seamless communication between components.</li>
 <li>
 <b>
 Performance Optimization</b>
 : Optimized the performance of React forms for e-commerce and stock applications. Applied best practices to minimize rendering times, enhance data loading efficiency, and create a smooth and responsive user experience.</li>
 <li>
 <b>
 Collaborative Development</b>
 : Collaborated closely with UX/UI designers and backend developers to ensure the seamless integration of React forms into comprehensive e-commerce and stock management systems. Participated in agile development processes, contributing to project planning and delivery.</li>
 </ul>
 <a href="#" className="read-toggle inline">
 Read more</a>
 </div>
 <div className="resume-item">
 <h4>
 FULLSTACK DEVELOPER</h4>
 <h5>
 2019 - 2022</h5>
 <p>
 <em>
 Global Rentsal, Barcelona, Spain</em>
 </p>
 <p>
 Mostly contributed on migration to Node.js/React.js, improving software ecosystems and user interfaces. Bridged dev-business gap, contributed to both frontend/backend with Node.js, Express, and MongoDB.</p>
 <ul className="hidden-content">
 <li>
 <b>
 Technology Transformation</b>
 : Played an integral role in the comprehensive overhaul of software ecosystems, orchestrating the migration and update of customers. Used PHP and SQL systems and transitioned to the latest Node.js and React.js technologies.</li>
 <li>
 <b>
 User-Centric Development</b>
 : Leveraged React.js to craft captivating and responsive user interfaces, enriching the overall user experience.</li>
 <li>
 <b>
 Synergistic Collaboration</b>
 : Established seamless collaboration with cross-functional teams, effectively bridging the gap between development and business requirements.</li>
 <li>
 <b>
 Holistic Approach</b>
 : Not restricted to frontend development, I also made substantial contributions to the backend. By harnessing modern technologies like Node.js, Express, and MongoDB, I have created a harmonious and potent software environment.</li>
 <li>
 <b>
 SQL Procedures and Functions</b>
 : Designed and implemented a diverse array of SQL procedures and functions, contributing to the creation of a robust and efficient database architecture.</li>
 <li>
 <b>
 MERN-Like Stock Software</b>
 : Led the development of a comprehensive MERN-like stock software solution, incorporating MongoDB, Express, React.js, and Node.js technologies. Delivered a scalable and feature-rich application tailored to meet complex business requirements.</li>
 </ul>
 <a href="#" className="read-toggle inline">
 Read more</a>
 </div>
 <div className="resume-item">
 <h4>
 DOCUMENTAL ENGINEER</h4>
 <h5>
 2016 - 2019</h5>
 <p>
 <em>
 Romsa Tech, Barcelona, Spain</em>
 </p>
 <p>
 Primarily focused on the development of automation software for the documentation of extensive codebases and libraries. Led initiatives to streamline and automate documentation processes, significantly enhancing efficiency and maintainability.</p>
 <ul className="hidden-content">
 <li>
 <b>
 Automation Software Development - Python</b>
 : Pioneered the creation of automation software using Python to streamline the documentation of extensive codebases and libraries. Implemented innovative solutions, such as utilizing Python's scripting capabilities, to automate and enhance the efficiency of the documentation processes.</li>
 <li>
 <b>
 Streamlining Documentation Processes - .NET</b>
 : Led initiatives to streamline documentation processes using .NET technologies. Leveraged .NET's comprehensive framework to develop efficient documentation workflows, resulting in significant time savings and improved maintainability of codebases and libraries.</li>
 <li>
 <b>
 Efficiency Enhancements - C++</b>
 : Utilized C++ to implement efficiency enhancements in automation software. Leveraged the performance-oriented features of C++ to optimize codebase and library documentation processes, ensuring fast and resource-efficient execution.</li>
 <li>
 <b>
 Innovative Solutions - C#</b>
 : Implemented innovative solutions using C# for automating documentation tasks. Leveraged C#'s versatility and rich feature set to develop robust and scalable automation tools, contributing to improved efficiency and maintainability of extensive codebases and libraries.</li>
 <li>
 <b>
 Codebase Analysis - Python</b>
 : Developed tools in Python for in-depth analysis of codebases, enabling comprehensive documentation. Employed Python's analytical capabilities to extract meaningful insights from code, facilitating accurate and detailed documentation.</li>
 <li>
 <b>
 Cross-Platform Documentation - .NET</b>
 : Engineered cross-platform documentation solutions using .NET technologies. Ensured compatibility across diverse environments, enabling seamless documentation processes on different platforms and enhancing accessibility for development teams.</li>
 <li>
 <b>
 Performance Optimization - C++</b>
 : Contributed to performance optimization efforts using C++. Leveraged C++'s low-level capabilities to fine-tune automation software, resulting in optimized performance during the documentation of extensive codebases and libraries.</li>
 <li>
 <b>
 Scalable Automation Tools - C#</b>
 : Developed scalable automation tools with C# to accommodate the documentation needs of large-scale codebases and libraries. Leveraged C#'s scalability features to ensure the automation software remains effective and efficient as documentation requirements grow.</li>
 <li>
 <b>
 Node.js Integration - JavaScript</b>
 : Integrated Node.js into documentation processes to enhance the automation capabilities. Leveraged JavaScript for server-side scripting and utilized Node.js to build scalable and asynchronous automation tools for handling documentation tasks efficiently.</li>
 <li>
 <b>
 PHP Scripting for Documentation</b>
 : Utilized PHP scripting to automate specific documentation tasks. Leveraged PHP's server-side scripting capabilities to create efficient and targeted automation solutions, contributing to streamlined documentation processes.</li>
 <li>
 <b>
 SQL Database Optimization</b>
 : Optimized SQL databases for storing and managing documentation-related information. Leveraged SQL to design efficient database structures, ensuring seamless data retrieval and storage for documentation processes.</li>
 </ul>
 <a href="#" className="read-toggle inline">
 Read more</a>
 </div>
 <div className="resume-item">
 <h4>
 NH Hotels, Rubicon, Lanzarote, Spain</h4>
 <h5>
 2015 - 2016</h5>
 <p>
 <em>
 Global Rentsal, Barcelona, Spain</em>
 </p>
 <p>
 Managed a big hospitality facility, overseeing industrial machinery. Led a 20+ member technical team, optimizing operations. Proficient in budgeting for machinery upkeep and pool maintenance.</p>
 <ul className="hidden-content">
 <li>
 <b>
 Technical Mastery</b>
 : Dealt with the daily technical challenges of a 500+ room premises in the high-standing hospitality industry, working with all kinds of industrial-sized machinery, from a water treatment plant to heavy-duty washing machines.</li>
 <li>
 <b>
 Operational Leadership</b>
 : Managed daily operations and personnel for a 22-member technical services team, overseeing job descriptions, crew issues, and overall efficiency.</li>
 <li>
 <b>
 Budgetary Expertise</b>
 : Crafted comprehensive annual maintenance budgets ensuring the effective allocation of resources for optimal machinery and facility upkeep.</li>
 <li>
 <b>
 Aquatic Excellence</b>
 : Managed the maintenance, chemistry, and analytical aspects of over 9 swimming pools.</li>
 </ul>
 <a href="#" className="read-toggle inline">
 Read more</a>
 </div>
 </div>
 </div>
 </div>
 </section>
 <section id="skills" className="skills section-bg">
 <div className="container aos-init" data-aos="fade-up">
 <div className="section-title">
 <h2>
   Skills</h2>
 <p>
 Note that the criteria is based on previous worked-with situations, therefore most a big part of my skillset has been omitted.</p>
 </div>
 <div className="row skills-content">
 <div className="progress col-lg-3">
 <span className="skill">
 JAVASCRIPT <i className="val">
 99%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 TYPESCRIPT <i className="val">
 95%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 PYTHON <i className="val">
 72%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 JAVA <i className="val">
 80%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 C <i className="val">
 88%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 C++ <i className="val">
 93%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 C# <i className="val">
 95%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 C.NET <i className="val">
 95%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 PHP <i className="val">
 98%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 MATLAB <i className="val">
 60%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 PIC ASM <i className="val">
 80%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 ATMEL ASM <i className="val">
 80%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 SQL <i className="val">
 98%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 MYSQL <i className="val">
 95%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 VISUAL BASIC <i className="val">
 70%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 G-CODE (RS-274) <i className="val">
 94%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 M-CODE <i className="val">
 94%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 REACT <i className="val">
 80%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 NODE <i className="val">
 80%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 NEXT <i className="val">
 70%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 AMAZON WEB SERVICES <i className="val">
 44%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="44" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 UNITY <i className="val">
 40%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 SOLIDWORKS <i className="val">
 90%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 AUTOCAD <i className="val">
 92%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 SIEMENS NX <i className="val">
 40%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 SIEMENS LOGO <i className="val">
 95%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 PROTEUS <i className="val">
 99%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 SPICE <i className="val">
 99%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 ADOBE ILLUSTRATOR <i className="val">
 70%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 <div className="progress col-lg-3">
 <span className="skill">
 ADOBE PHOTOSHOP <i className="val">
 70%</i>
 </span>
 <div className="progress-bar-wrap">
 <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 <section id="repos" className="portfolio section-bg">
 <div className="container aos-init" data-aos="fade-up">
 <div className="section-title">
 <h2>
 Repos</h2>
 <p>
 Note that those are only public repositories from github, more demo content is available.</p>
 </div>
 <div className="row">
 <div className="col-lg-12 d-flex justify-content-center aos-init" data-aos="fade-up" data-aos-delay="100">
 <ul className="repos-filters">
 <li data-filter="*" className="filter-active">
 All</li>
 <li data-filter=".filter-composer">
 composer</li>
 <li data-filter=".filter-cpp">
 cpp</li>
 <li data-filter=".filter-jquery">
 jquery</li>
 <li data-filter=".filter-js">
 js</li>
 <li data-filter=".filter-multi">
 multi</li>
 <li data-filter=".filter-node">
 node</li>
 <li data-filter=".filter-python">
 python</li>
 <li data-filter=".filter-react">
 react</li>
 </ul>
 </div>
 </div>
 <div className="row repos-container aos-init" data-aos="fade-up" data-aos-delay="200" style={{position: 'relative',height: 1479}}>
     <div className="col-lg-4 col-md-6 repos-item filter-react" style={{position: 'absolute', left: 0, top: 0}}>
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 react-aid</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A react repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/react-aid" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 react</span>
 </div>
 </div>
 </div>
 {/* <div className="col-lg-4 col-md-6 repos-item filter-node" style={{position: 'absolute', left: 380, top: 0}}>
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 node-turbodev</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A node repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/node-turbodev" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 node</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-node" style="position: absolute; left: 760px; top: 0px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 node-turbodoc</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A node repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/node-turbodoc" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 node</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-node" style="position: absolute; left: 0px; top: 159px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 node-package-quickstart</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A node repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/node-package-quickstart" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 node</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-node" style="position: absolute; left: 380px; top: 159px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 node-ioutil</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A node repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/node-ioutil" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 node</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-python" style="position: absolute; left: 760px; top: 159px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 python-upbt-lib</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A python repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/python-upbt-lib" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★1</span>
 <span className="repos-card-repo-category">
 python</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-python" style="position: absolute; left: 0px; top: 318px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 python-package-quickstart</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A python repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/python-package-quickstart" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 python</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-node" style="position: absolute; left: 380px; top: 318px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 node-package-quickstart-consumer</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A node repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/node-package-quickstart-consumer" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 node</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-composer" style="position: absolute; left: 760px; top: 318px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 composer-package-quickstart</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A composer repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/composer-package-quickstart" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 composer</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-jquery" style="position: absolute; left: 0px; top: 477px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 jquery-splitcontainer</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A jquery repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/jquery-splitcontainer" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 jquery</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-cpp" style="position: absolute; left: 380px; top: 477px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 cpp-A4988-driver-non-blocking</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A4988 Stepper motor driver non blocking controller</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/cpp-A4988-driver-non-blocking" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 cpp</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-cpp" style="position: absolute; left: 760px; top: 477px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 cpp-autostage-packaging-machine</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 Sequential process handler for a CNC pilow bag packaging machine</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/cpp-autostage-packaging-machine" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 cpp</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-cpp" style="position: absolute; left: 0px; top: 636px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 cpp-lcdkbd-user-interface</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 Light LCD + 4x4KBD user interface for atmel microcontrollers</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/cpp-lcdkbd-user-interface" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 cpp</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-cpp" style="position: absolute; left: 380px; top: 660px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 cpp-non-blocking-timer-lib</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 Non blocking timer library for atmel microcontrollers</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/cpp-non-blocking-timer-lib" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 cpp</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-cpp" style="position: absolute; left: 760px; top: 660px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 cpp-autostage-generic</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 C++ secuence process control for Atmel microcontrollers</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/cpp-autostage-generic" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★1</span>
 <span className="repos-card-repo-category">
 cpp</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-jquery" style="position: absolute; left: 0px; top: 819px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 jquery-tabs-plg</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A jquery repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/jquery-tabs-plg" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 jquery</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-js" style="position: absolute; left: 380px; top: 843px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 js-dropdown-tpl</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A flexible javascript multilevel dropdown</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/js-dropdown-tpl" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 js</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-js" style="position: absolute; left: 760px; top: 843px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 js-terminus-terminal-tpl</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A js repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/js-terminus-terminal-tpl" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 js</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-react" style="position: absolute; left: 0px; top: 978px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 react-dynamic-lazyrouter-tpl</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A react repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/react-dynamic-lazyrouter-tpl" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 react</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-multi" style="position: absolute; left: 380px; top: 1002px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 multi-fson-lib</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A multi repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/multi-fson-lib" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 multi</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-js" style="position: absolute; left: 760px; top: 1002px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 js-proto-lib</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A js repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/js-proto-lib" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 js</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-react" style="position: absolute; left: 0px; top: 1137px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 react-adminLTE3-tpl</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A react repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/react-adminLTE3-tpl" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 react</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-python" style="position: absolute; left: 380px; top: 1161px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 python-pyc-tpl</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A python repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/python-pyc-tpl" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 python</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-python" style="position: absolute; left: 760px; top: 1161px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 python-subprocess-tpl</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A python repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/python-subprocess-tpl" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 python</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-react" style="position: absolute; left: 0px; top: 1296px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 react-multilanguage-tpl</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A react repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/react-multilanguage-tpl" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 react</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-python" style="position: absolute; left: 380px; top: 1320px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 python-upbt-tpl</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A python repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/python-upbt-tpl" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 python</span>
 </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 repos-item filter-python" style="position: absolute; left: 760px; top: 1320px;">
 <div className="repos-card">
 <div className="repos-card-repo-header">
 <a className="repos-card-repo-title">
 python-pyd-builder-tpl</a>
 </div>
 <div className="repos-card-repo-body">
 <p className="repos-card-repo-description">
 A python repository.</p>
 </div>
 <div className="repos-card-repo-footer">
 <a className="repos-card-view-on-github" href="https://github.com/iorp/python-pyd-builder-tpl" target="_blank">
 View on GitHub</a>
 <span className="repos-card-repo-stars">
 ★0</span>
 <span className="repos-card-repo-category">
 python</span>
 </div>
 </div>
 </div>
 </div>
 <div className="row repos-info aos-init" data-aos="fade-up" data-aos-delay="200">
     <div>
 Showing 29 of 27 repositories. Visit <a href="https://github.com/iorp">
 github.com/iorp</a>
  to see the rest</div>*/}
 </div> 
 </div>
 </section>
 <section id="contact" className="contact">
 <div className="container aos-init" data-aos="fade-up">
 <div className="section-title">
 <h2>
 Contact</h2>
 </div>
 <div className="row info">
 <div className="col-lg-3 address">
 <i className="bi bi-geo-alt">
 </i>
 <h4>
 Location:</h4>
 <a href="#">
 Hanoi, Dublin, Madrid, Remote</a>
 </div>
 <div className="col-lg-3 email">
 <i className="bi bi-envelope">
 </i>
 <h4>
 Email:</h4>
 <a href="mailto:iorp.default@gmail.com?subject=Hello%20from%20your%20portfolio">
 iorp.default@gmail.com</a>
 </div>
 <div className="col-lg-3 whatsapp">
 <i className="bi bi-whatsapp">
 </i>
 <h4>
 Whatsapp:</h4>
 <a href="https://wa.me/84387747093?text=Hello%20from%20your%20portfolio!">
 +84387747093</a>
 </div>
 <div className="col-lg-3 call">
 <i className="bi bi-phone">
 </i>
 <h4>
 Phone call:</h4>
 <a href="tel:+84387747093">
 +84387747093 </a>
 </div>
 </div>
 </div>
 </section>
 </main>
 <footer id="footer">
 <div className="container">
 <h3>
 Joaquin R. Pretel</h3>
 <p>
 Semper fidelis.</p>
 <div className="social-links">
 <a href="https://github.com/iorp" className="github">
 <i className="bx bxl-github">
 </i>
 </a>
 <a href="https://www.linkedin.com/in/iorp/" className="linkedin">
 <i className="bx bxl-linkedin">
 </i>
 </a>
 <a href="https://www.facebook.com/profile.php?id=100092558602690&amp;mibextid=ZbWKwL" className="facebook">
 <i className="bx bxl-facebook">
 </i>
 </a>
 <a href="https://wa.me/84387747093?text=Hello%20from%20your%20portfolio!" className="whatsapp">
 <i className="bx bxl-whatsapp">
 </i>
 </a>
 </div>
 <div className="copyright">
 Visit <strong>
 <span>
  <a href="https://iorp.github.io/blog">
 https://iorp.github.io/blog</a>
 </span>
 </strong>
  for more.</div>
 </div>
 </footer>
 <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
 <i className="bi bi-arrow-up-short">
 </i>
 </a>
 </div>
        
       
 
   

 <ScrollToTop/>
      </> 
   );
 }

 
 const LayoutWrapper = forwardRef((props, ref) => {
    return (
      
             <Layout {...props}/>
        
          )
        });
  
 
   export default LayoutWrapper;
  
  
  