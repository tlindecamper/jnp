import { 
    faPhone,
    faEnvelope,
    
} 
from "@fortawesome/free-solid-svg-icons"
import { library} from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(faEnvelope,faPhone
    );
}

export default Icons;