import React from "react";

const Footer =()=>{
        return(
            <>
            <div style={footer}>
                {/* <h3 style={text_footer}>chetanbnagmoti@gmail.com</h3> */}
                <ul className="nav-ul " style={text_footer}>
                  <li><a href="chetanbnagmoti@gmail.com" style={{color:'darkblue'}}> chetanbnagmoti@gmail.com</a>
                   </li>
                  <li>8390569860</li>
                  <li><a href=" https://github.com/chetanbnagmoti"  style={{color:'darkblue'}}>https://github.com/chetanbnagmoti</a></li>
                  <li> <a href=" www.linkedin.com/in/chetan-nagmoti-18b6b9225"  style={{color:'darkblue'}}>www.linkedin.com/in/chetan-nagmoti-18b6b9225</a></li>
                </ul>
            </div>
            </>
        )
}

export default Footer;


let footer={
   
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '40px',
        backgroundColor: 'skyblue',
        padding: '0px',
        textAlign: 'center',
       
      
}

let text_footer={
    textAlign: 'left',
    fontFamily: 'cursive',
    fontSize: 'small',
    marginLeft: '25px',
    marginTop: '0px',
    marginBottom:'5px',
    color: 'darkblue',
    fontWeight: 'bolder',
    opacity: 'inherit',
    paddingLeft: '55px'
}
