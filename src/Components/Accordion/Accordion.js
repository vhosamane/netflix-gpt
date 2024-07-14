import { useState } from "react";
import { Dash, Plus } from 'react-bootstrap-icons';

const Accordion = ({data}) => {

    const[isActive, SetIsActive] = useState(false);

    return (
        <div className={`accordion-items ${isActive ? 'active' : ''}`}>
            <h3 onClick={() => SetIsActive(!isActive)}>
                <span>{data.heading}</span>
                <span className="icon">
                    {
                        isActive ? <Dash /> : <Plus />
                    }
                </span>
            </h3>
            {
                isActive &&  <div className="accordion-content">
                <p>{data.subHeading1}</p>
                {data.subHeading2 && <p>{data.subHeading2}</p>}
            </div>
            }
        </div>
    )
}

export default Accordion;
