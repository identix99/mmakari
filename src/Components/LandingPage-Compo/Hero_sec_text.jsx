import React,{useState} from 'react';
import hero_button_icon from '../../assets/img/Home_page/hero_button_icon.png';
const Hero_sec_text = () => {
    const [active, setactive] = useState("list2");
    return (
        <div className='hero_text_main'>
            <h1>Find Yourself <span>a Better Place</span></h1>
            <p>this is where you can find a dream place for you of various types, all over the Dubai at affordable prices.</p>
            <ul className='hero_text_list'>
                <li><a href="#0" onClick={() => setactive("list1")} className={active === "list1" ? "teb_list" : ""}>Buy</a></li>
                <li><a href="#0" onClick={() => setactive("list2")} className={active === "list2" ? "teb_list" : ""}>Rent</a></li>
                <li><a href="#0" onClick={() => setactive("list3")} className={active === "list3" ? "teb_list" : ""}>Sell</a></li>
            </ul>
            <form className='hero_text_input'>
                <input type="search" name="search" id="searchbar"  placeholder='Search by area'/>
                <button>Search <img src={hero_button_icon} alt="hero button icon" /></button>
            </form>
        </div>
    )
}

export default Hero_sec_text