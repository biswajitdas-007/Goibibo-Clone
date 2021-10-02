import "./Showbus.css"
export function Navbar() {
    return (
        <div className="class">
            <div className="logo"></div>
            <ul class="happy-nav">
                <li class="  ">
                    <span className="header-sprite nav-icon-flights gr-append-right5">
                    </span>Flights</li><li class="  ">
                
                    <span className="header-sprite nav-icon-hotels gr-append-right5">
                    </span>Hotels</li><li class="  ">
                
                    <span className="header-sprite nav-icon-trains gr-append-right5">
                    </span>Trains</li><li class="  ">
                
                    <span className="header-sprite nav-icon-cabs gr-append-right5">
                    </span>Cabs</li><li class="active  ">
                
                    <span className="header-sprite nav-icon-bus gr-append-right5">
                    </span>Bus</li>
            </ul>
            <div className="gr-make-flex hrtl-center gr-push-right">
               
                    <div className="mytrip__tab gr-append-right20" role="presentation">
                        <span className="header-sprite mytrip-icon gr-append-right10">
                        </span>
                        <span>
                            <div><p className="gr-font10 gr-light gr-helvetica gr-color666">Manage Booking</p>
                                <p className="gr-font14 gr-quicksand gr-bold gr-color333 hype">My Trips</p>
                            </div></span><div className="tooltip gr-grey-text--dark">
                            <p>Access your bookings, easy cancellation, date change and much more</p>
                        </div></div>
                <div className="login__tab gotrible" role="presentation">
                    <span className="header-sprite user-icon gr-append-right5">
                    </span>
                    <div className="gr-font10" role="presentation" id="get_sign_in">
                        <p className="gr-cap-text gr-blue-text gr-bold">Login or Signup</p>
                    </div></div></div>
        </div>
    )
}