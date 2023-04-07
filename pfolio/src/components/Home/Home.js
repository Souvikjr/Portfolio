import React from 'react'
import "../Home/home.css"
import poto from "../Images/01g.jpg"
import glass from "../Images/glass.jpg"
import anim from "../Images/anim.gif"
import res from "../Images/responsive.png"
import info from "../Images/info.avif"
import font from "../Images/font.webp"
import grad from "../Images/gradient.avif"
import mode from "../Images/mode.jpg"
import mongo from "../Images/mongo.avif"
import { motion } from "framer-motion";

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from 'react'


import TextField from '@mui/material/TextField';

import axios from "axios"





function Home() {


    // const [name,setName] = useState("")
    // const [email,setmail] = useState("")
    // const [password,setpassword] = useState("")

    const [submassage, setSubmassage] = useState({
        Name: "",
        Email: "",
        Massage:""
      })

    //   console.log(submassage);
      


      const Namef = (e) => {
        setSubmassage({...submassage, Name: e.target.value})
      }


      const Emailf = (e) => {
        setSubmassage({...submassage, Email: e.target.value})
      }


      const Massagef = (e) => {
        setSubmassage({...submassage, Massage: e.target.value})
      }


      const submit = async () => {
        
        if(!submassage.Name || !submassage.Email || !submassage.Massage){
            alert("Please Fill The From Correctly")
        }else{
            const data = submassage;
            // console.log(data1);
        
        
            try {
              await axios.post("http://localhost:5002/massagesend", data)
            } catch {
              console.log("error posting data");
            }
        
            
        
            setSubmassage({
                Name: "",
                Email: "",
                Massage:""
              })
    
              alert("Thanks For Contacting, Will Get Back To You Soon");
        }
        
        
       
    
      }

    


    const navVariants1 = {
        hidden: {
            opacity: 0,
            x: -250,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 140,
            },
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                delay: 0.3,
            },
        },
    };


    const navVariants2 = {
        hidden: {
            opacity: 0,
            y: -50,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 140,
            },
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                delay: 0.5,
            },
        },
    };


    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])




    // const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => setScrollY(window.scrollY);
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);


    return (
        <div >




            <div className='row justify-content-center mainbgacc' data-aos="fade-down">

                <div className='col-xxl-4 col-lg-5 col-md-6 an'>
                    <div className='drop'>
                        <div className='fota' ></div>

                        <div className='imgeaac'>
                            <div className='imgaccdiv'>
                                {/* <img src={profile} alt="profile_img" className='imgprofile12' /> */}
                                <img src={poto} alt="profile_img" className='imgprofile12' />

                            </div>
                            <h6 className='h16 pt-5 '>Syed Umre Hasan</h6>
                            {/* <p className="pb-0 m-0">Account Id : {user.id.substr(0, 10)}</p>
                      <p className="pt-0 m-0">{user.id.substr(10, 20)}</p> */}
                        </div>


                    </div>
                </div>







                <div className='col-xxl-4 col-lg-5 col-md-6 am'>
                    <div className='inside'>
                        <h2 className='text-center pt-3'>Syed's Details <i class="bi bi-person-video"></i></h2>
                        <div className='pt-3 conacct'>
                            <h5>Name : Syed Umre Hasan</h5>
                            <h5>Designation : Software Developer</h5>
                            <h5>Total Experience : 1 yr</h5>
                            <h5>Email : Souvikmiya1996@gmail.com</h5>
                            <h5>Contact Number : 8348046808</h5>

                        </div>
                        <div className='text-center pt-2'>
                            <button className='buttonacc' >See More</button>
                        </div>
                    </div>
                </div>


            </div>



            {/* <div className="parallax-container">
                <motion.div
                    className="parallax-bg"
                    style={{ y: scrollY * -0.5 }}
                />
                <motion.div
                    className="parallax-content"
                    style={{ y: scrollY * 0.5 }}
                >
                    <h1>Welcome to my Parallax Website</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed aliquam purus quis urna consequat pharetra.
                    </p>
                </motion.div>
            </div> */}




            <div className='knows hnp mb-2' data-aos="fade-up">
                <div className='row justify-content-center pt-5 hn'>
                    <div className='col-lg-3 m-2'>
                        <div className='lind'>
                            <h6 className='pt-4'>MY EXPERIENCES</h6>
                            <h3>WHAT I KNOW...?</h3>
                            <hr className='line'></hr>
                            <p className='pt-5'> I am a full stack web developer with the knowledge of React.js , Mongo DB , Express and Node.js</p>
                        </div>
                        <button className='mt-3 mb-3 expb'>Know More About Me</button>
                    </div>
                    <div className='col-lg-3 m-2'>
                        <div className='parent'>
                            <div className='expl'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="img" style={{ height: "45px", width: "45px" }} />
                            </div>

                            <h4 className='pt-5'>React JS</h4>
                            <p className='pt-3 pb-5'>React is a free and open-source front-end JavaScript library for building user interfaces based on components. </p>
                        </div>

                        <div className='parent'>
                            <div className='expl'>
                                <img src={mongo} alt="img" style={{ height: "45px", width: "45px" }} />
                            </div>

                            <h4 className='pt-5'>Mongo DB</h4>
                            <p className='pt-3'>MongoDB is an open source NoSQL database management program. NoSQL (Not only SQL) is used as an alternative to traditional relational databases. </p>
                        </div>
                    </div>


                    <div className='col-lg-3 m-2'>
                        <div className='parent'>
                            <div className='expl'>
                                <img src="https://www.guayerd.com/wp-content/uploads/2021/04/expressjs-logo.svg" alt="img" style={{ height: "45px", width: "45px" }} />
                            </div>

                            <h4 className='pt-5'>Express JS</h4>
                            <p className='pt-3 pb-5'>Express.js is a web application framework for Node.js. It provides various features that make web application development fast and easy. </p>
                        </div>

                        <div className='parent'>
                            <div className='expl'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' alt="img" style={{ height: "45px", width: "45px" }} />
                            </div>

                            <h4 className='pt-5'>Node JS</h4>
                            <p className='pt-3'>Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux. </p>
                        </div>
                    </div>

                </div>
            </div>














            <div className='row pt-1' data-aos="fade-up">
                <div className='col-lg-5'>
                    <div className='row'>
                        <div className='col-12  p-1 ic'>
                            <img src={res} alt="img" style={{ height: "100%", width: "100%" }} className="br" />
                            <div className='info'>
                                <h1>Responsive |</h1>
                                <p>It's really inportant for a website to be same RESPONSIVE for every screen ...</p>
                            </div>
                        </div>
                        <div className='col-md-6 p-1 mt-5 ic'>
                            <img src={grad} alt="img" style={{ height: "100%", width: "100%" }} className="br" />
                            <div className='info'>
                                <h1>Gradient |</h1>
                                <p>We can use GRADIENT colors to give new look to our website ... </p>
                            </div>
                        </div>
                        <div className='col-md-6 p-1 mt-5 ic'>
                            <img src={mode} alt="img" style={{ height: "100%", width: "100%" }} className="br" />
                            <div className='info'>
                                <h1>Mode |</h1>
                                <p>Dark/Light MODE can give two different look to our website ...</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-lg-4'>
                    <div className='row'>

                        <div className='col-md-6 p-1 ic'>
                            <img src={info} alt="img" style={{ height: "100%", width: "100%" }} className="br" />
                            <div className='info'>
                                <h1>Information |</h1>
                                <p>A website must show every relatable INFORMATION...</p>
                            </div>
                        </div>
                        <div className='col-md-6 p-1 ic'>
                            <img src={font} alt="img" style={{ height: "100%", width: "100%" }} className="br" />
                            <div className='info'>
                                <h1>Font |</h1>
                                <p>Using various FONT can give your website a various flavour ...</p>
                            </div>
                        </div>
                        <div className='col-12 mt-1 p-1 ic'>
                            <img src={anim} alt="img" style={{ height: "100%", width: "100%" }} className="br" />
                            <div className='info'>
                                <h1>Animation |</h1>
                                <p>ANIMATIONS makes your website more lifely ...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 p-1 ic'>

                    <img src={glass} alt="img" style={{ height: "100%", width: "100%" }} className="br" />
                    <div className='info'>
                        <h1>Transparent |</h1>
                        <p>TRANSPARENT glass look is a classy way to make your website more creative ...</p>
                    </div>
                </div>
            </div>








            <div className='edud pt-4 pb-4'>

                <motion.nav
                    variants={navVariants2}
                    initial='hidden'
                    whileInView='show'

                >

                    <h1 className='h11 text-center pt-4 pb-3'>Educational Details </h1>



                </motion.nav>


                <div className=' pb-5 hnp'>




                    <motion.nav
                        variants={navVariants1}
                        initial='hidden'
                        whileInView='show'

                    >

                        <div className='row justify-content-center hn '>



                            <div className='col-md-3 m-3 box'>
                                <h5 className='text-center pt-3 '>SSC</h5>
                                <hr></hr>
                                <h6 className='text-center pt-1'>School Name</h6>
                                <p className='text-center'>Indrani H.M. High School</p>
                                {/* <br></br> */}
                                <h6 className='text-center pt-1'>Board</h6>
                                <p className='text-center'>WB Board of Secondary Education</p>
                                <br></br>
                                <h6 className='text-center pt-1'>Passing Year : 2013</h6>
                                <h6 className='text-center pt-1'>Mark Obtain : 68%</h6>

                                <br></br>



                            </div>



                            <div className='col-md-3 m-3 box'>
                                <h5 className='text-center pt-3 '>INTERMEDIATE</h5>
                                <hr></hr>
                                <h6 className='text-center pt-1'>School Name</h6>
                                <p className='text-center'>Netra High School</p>
                                {/* <br></br> */}
                                <h6 className='text-center pt-1'>Board</h6>
                                <p className='text-center'>WB Board of Higher Secondary Education</p>
                                <br></br>
                                <h6 className='text-center pt-1'>Passing Year : 2015</h6>
                                <h6 className='text-center pt-1'>Mark Obtain : 75.8%</h6>

                                <br></br>
                            </div>


                            <div className='col-md-3 m-3 box'>
                                <h5 className='text-center pt-3 '>UNDER GRADUATE</h5>
                                <hr></hr>
                                <h6 className='text-center pt-1'>University Name</h6>
                                <p className='text-center'>Manipal University (Jaipur) </p>
                                {/* <br></br> */}
                                <h6 className='text-center pt-1'>University Board</h6>
                                <p className='text-center'>Manipal University</p>
                                <br></br>
                                <h6 className='text-center pt-1'>Passing Year : Still Running</h6>
                                <h6 className='text-center pt-1'>Mark Obtain : Still Running</h6>

                                <br></br>
                            </div>





                        </div>

                    </motion.nav>
                </div>


            </div>







            <div className='knows hnp  absart abcde'>
                <div className='row justify-content-center pt-5 pb-5 hn'>
                    <div className='col-lg-3 m-2'>
                        <div className='lind pt-5'>

                            <h3>GET IN TOUCH WITH US..!</h3>
                            <hr className='line'></hr>

                        </div>

                    </div>
                    <div className='col-lg-6 m-2'>


                        <h3>Send Your Query..!</h3>

                        {/* <p className='pt-2 px-1'>Name</p> */}

                        {/* <TextField id="outlined-basic" label="Name" variant="outlined" color="success" focused className='txtf' /> */}
                        {/* <input value={submassage.Name} onChange={Namef}/>
                        <input value={submassage.Email} onChange={Emailf}/>
                        <input value={submassage.Massage} onChange={Massagef}/> */}
                        <div className='pt-4'>
                            <div class="form-group">
                                <input type="text" id="username" name="username" required value={submassage.Name} onChange={Namef}/>

                                
                                <label for="username">Name</label>
                            </div>
                        </div>


                        <div className='pt-4'>
                            <div class="form-group">
                                <input type="text" id="username" name="username" required value={submassage.Email} onChange={Emailf}/>
                                <label for="username">Email Id</label>
                            </div>
                        </div>




                        <div className='pt-4'>
                            <div class="form-group">
                                <textarea rows="5" id="message" name="message" required value={submassage.Massage} onChange={Massagef}></textarea>
                                <label for="message">Message</label>
                            </div>
                        </div>


                        <div className='text-center me-5'>

                            <button className='expb2 ' onClick={submit}>Submit</button>

                        </div>








                    </div>




                </div>
            </div>






            <div className='knows hnp  abcde2' >
                <div className='row justify-content-center pt-5 hn'>
                    <div className='col-lg-4 m-2'>
                        <h4 className='pb-3 pt-3 clr text-center'> Where To find us</h4>
                        <h6 className='pb-3 text-center'>
                            Email Id : souvikmiya1996@gmail.com
                        </h6>
                        <h6 className='pb-3 text-center'>
                            Phone number : 8348046808
                        </h6>


                    </div>
                    <div className='col-lg-4 m-2 mt-3'>
                        <h4 className='px-2 clr text-center'>  / Follow Me On</h4>
                        <h3 className='pt-2 text-center'> <a href="https://www.facebook.com/Luciferblust?mibextid=ZbWKwL"><i class="bi bi-facebook px-2"></i> </a>   <a href="https://wa.me/+918348046808?text=Hi I visited Your website...! need to talk." > <i class="bi bi-whatsapp px-2"></i>  </a>   <a href='https://www.instagram.com/souvik_jr'>  <i class="bi bi-instagram px-2"></i>  </a>   <a href='https://twitter.com/souvikmiya1996'> <i class="bi bi-twitter px-2"></i> </a> </h3> 
                        {/* <TextField id="outlined-basic" label="Name" variant="outlined" color="success" focused className='txtf mt-3' /> */}
                        <div className='text-center mt-4'>

                            <button className='expb2 '>Submit</button>

                        </div>

                    </div>
                    <hr className='mt-4'></hr>

                    <p className='text-center  p-0'>| Created by Syed Umre Hasan @2023 |</p>


                </div>
            </div>







        </div>
    )
}

export default Home
