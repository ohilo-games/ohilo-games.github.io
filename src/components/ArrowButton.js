import '../css/ArrowButton.css'
import { IoIosArrowDropdown} from 'react-icons/io';
import {Link,glide} from "react-tiger-transition";

glide({
    name:'glide-top',
	direction: 'top',
    duration:2000,
  });

const ArrowButton = () => {
    return (
            <div className="arrowbutton-container">
                <Link to='/home' transition='glide-top' timeout={2000}> 
                    <button className="arrow-button"><IoIosArrowDropdown className="arrow-icon" size={70}/>
                    </button>
                </Link>
            </div>
    )
}

export default ArrowButton
