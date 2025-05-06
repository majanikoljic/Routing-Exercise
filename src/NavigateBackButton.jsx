import { useNavigate } from "react-router-dom";
function NavigateBackButton(){
    const navigate = useNavigate()
    return <button className="navigate-back-btn" onClick={() => navigate(-1)}>← Go Back</button>

}

export default NavigateBackButton;