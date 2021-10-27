import '../css/ArrowButton.css'
import { IoIosArrowDropdown} from 'react-icons/io';
import {Link,glide} from "react-tiger-transition";

glide({
    name:'glide-top',
	direction: 'top',
    duration:1000,
    enter:{
        opacity:1
    },
    exit:{
        opacity:1
    }
  });

const ArrowButton = () => {
    return (
            <div className="arrowbutton-container">
                <Link to='/home' transition='glide-top' timeout={1000}> 
                    <button className="arrow-button"><IoIosArrowDropdown className="arrow-icon" size={50}/>
                    </button>
                </Link>
            </div>
    )
}

export default ArrowButton
