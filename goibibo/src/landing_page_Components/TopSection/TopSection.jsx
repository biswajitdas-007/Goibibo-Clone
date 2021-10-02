import React from "react";

import "./TopSection.css";

function TopSection() {
    return (
        <>

            <div className="recent">
                <p>Recent Searches</p>
                <div className="recentSearches">
                <div className="rs1">
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg> Hyderabad-Bangaluru</p>
                        <p>29th Sep 2021</p>
                    </div>
                    
                    <div className="rs2">
                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg> Hyderabad-Bangaluru</p>
                        <p>30th Sep 2021</p>
                    </div>
                </div>
        </div>
        
            <div><img className="bitcoin" src="https://servedbyadbutler.com/getad.img/;libID=3241713" alt="" /></div>
            
            </>
    )
}

export default TopSection;