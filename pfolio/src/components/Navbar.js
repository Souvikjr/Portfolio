import React, { useState ,useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../components/Images/syd.png';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'




function Navbar() {
   
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => {
          if (window.pageYOffset > 0) {
            document.querySelector('.Nav10').classList.add('Nav10--active');
          } else {
            document.querySelector('.Nav10').classList.remove('Nav10--active');
          }
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
      }, []);




      const [abc, setAbc] = useState("bi-moon");
      const [theme, setTheme] = useState("light-theme");
    
    
      const toggleTheme = () => {
        if (theme === "dark-theme") {
          setTheme("light-theme")
          setAbc("bi-moon")
        } else {
          setTheme("dark-theme")
          setAbc("bi-sun")
        }
      };
    
      useEffect(() => {
        document.body.className = theme;
      }, [theme]);


    return (





        <div className='Nav10'>


            <div className="gpt3__navbar">
                <div className="gpt3__navbar-links">
                    <div className="gpt3__navbar-links_logo">
                        <img src={logo} alt="LOGO" />
                    </div>
                    <div className="gpt3__navbar-links_container">
                        <p><Link to="/">Home <i class="bi bi-house-fill navico10"></i></Link></p>
                        {/* <p><a href="#wgpt3">NFT</a></p>
                        <p><a href="#possibility">Blockchain</a></p> */}
                        <p><a href="#features">About</a></p>
                        <p><a href="#blog">Contact Us</a></p>
                        
                    </div>
                </div>
                <div className="gpt3__navbar-sign">
                <i onClick={() => toggleTheme()} className={`bi ${abc} px-1  mx-5 thmbtn`}></i>
                    <button onClick={() => navigate("/signin")} type="button">Sign up</button>
                </div>
                <div className="gpt3__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <p><i onClick={() => toggleTheme()} className={`bi ${abc} px-1   thmbtn`}></i></p>
                                <p><a href="#home">Home</a></p>
                                {/* <p><a href="#wgpt3">GPT3?</a></p>
                                <p><a href="#possibility">Blockchain</a></p> */}
                                <p><a href="#features">About</a></p>
                                <p><a href="#blog">Contact Us</a></p>
                                
                            </div>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                
                                <button onClick={() => navigate("/signin")} type="button">Sign up</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>

    )
}

export default Navbar