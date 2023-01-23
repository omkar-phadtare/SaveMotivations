import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useUserAuth } from '../context/AuthContext';
import Navbar from './Navbar'

export default function About(props) {

    const{user,fetchFireStore,sname,navContent,fetchAllPostData,allpostData,fname} = useUserAuth();

    const[toggle,setToggle]=useState();
	const[count,setCount]=useState(0);
	const[notch,setNotch]=useState('Close');
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }

    
useEffect(() => {
	
    //function is define in context/AuthContext
    fetchFireStore();	 
    navContent(toggle,notch);

    fetchAllPostData();


    

}, [])

const  tog = () => {
		
    if(count===0)
    {
     setToggle('active');
     setCount(1);
     setNotch('Open');
    }
    else{
        
        setToggle('');
     setCount(0);
     setNotch('Close');
    }

  }
    
    return (
        <div>
        {sname.map(u => (
	<div key={u.id}>{u.data.email===user.email && 
		<Navbar toggle={toggle} emailId={u.data.first_name}/>
	}
		</div>
		)
		)}
        <div className="container">
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                   SaveMotivaton save your Daily motivation for your self and social.

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                   
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. 

                    </div>
                    </div>
                </div>
            </div>

        </div>
           
        </div>
    )
}
