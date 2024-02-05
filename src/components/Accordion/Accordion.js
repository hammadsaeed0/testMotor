import { FaAngleUp } from "react-icons/fa6";
// Accordion.js
import { FaPlus } from "react-icons/fa6";
export default function Accordion(props) {
    return (
        <>

            <div className="border  rounded-md  mb-4">
                <button
                    className="w-full p-4 flex items-center gap-3 text-left
                            transition duration-300"
                    onClick={props.toggleAccordion}
                >
                     <FaPlus size={30} className=" text-black" />
                    <span className={`float-right transform ${props.isOpen ?
                        'rotate-180' : 'rotate-0'} 
                                 transition-transform duration-300`}>
                    
                    </span>
                    <div>
                    <h6 className=" h6 uppercase font-semibold text-textColor">{props.title}</h6>

{props.isOpen && (
<div className=" bg-white uppercase text-sm text-textColor  font-medium">
{props.data}
</div>
)}
                    </div>
                  

                </button>

            </div>

           
        </>
    );
};