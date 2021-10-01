import "./Bus.css"
import { Background } from "./Background"

export function SearchBus() {
    return (
        <>
            <div className="Home">
            <Background/>
            <div className="bus-headline">
                <h2 className="bus-headline-h1">Bus Ticket Booking</h2>
                
            
            <div className="destination-crousal-div">
                <div className="destination">
                    <div>
                        <div className="from-section">
                            <label>FROM</label>
                            <input type="text" name="" className="input-from" />

                        </div>
                        
                    </div>
                    <div>
                        <div className="from-section">
                            <label>TO</label>
                            <input type="text" name="" className="input-from" />

                        </div>
                        
                    </div>
                    <div className="date-travel">
                        <label htmlFor="">Travel Date</label>
                        <div className="datewrapper">
                            <input className="inp-date" type="text" name="" id=""/>
                            <div className="date-tomorrow">
                                <span className="span"  >Today,29 sep</span>
                                <span className="span">Tommorrow</span>

                            </div>

                        </div>
                    </div>
                    <div className="lower-part-destination">
                    <p className="social-p">
                        <img width="38px" src="https://gos3.ibcdn.com/social-distance-small-1592916992.png" alt="" />
                            <span color="black">Social Distancing</span>
                            <span className="pad">Introducing Distancing in select bus</span>
                            <div class="know-more">
                                know more
                            </div>

                    </p>

                    </div>
                    <div className="div-sersch-bus">
                        < button className="btn-search-bus">SEARCH BUS</button>
                    </div>
                </div>
                
                        
                         <div className="rightSection">

                    <div className="rightSection1">
                    <img src="https://gos3.ibcdn.com/gosafe1-1593079151.png" alt="" />
                    </div>


                    <div className="rightSection2">
                    <div className="r1">
                            <img src="https://gos3.ibcdn.com/img-1625069014.jpg" alt="" />
                        </div>
                        
                        <div className="r2">
                          <img src="https://gos3.ibcdn.com/img-1626751565.jpg" alt="" />
                        </div>
                    </div>


                </div>
            </div>
                </div>
                </div>
            
            
        </>

           
    )
}