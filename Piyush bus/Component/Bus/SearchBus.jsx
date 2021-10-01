import "./Bus.css"
import { Background } from "./Background"

export function SearchBus() {
    return (
        <>
            <div className="Home">
            <Background/>
            <div className="bus-headline">
                <h1 className="bus-headline-h1">Bus Ticket Booking</h1>
                
            
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
                            <input className="inp-date" type="text" name="" id="" value="29 SEP 2021" />
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
                
                
                <div className="crousal-gif">
                <div className="gif-div">
                    <img className="image-gif" src="https://gos3.ibcdn.com/gosafe1-1593079151.png" alt="" />

                            </div>
                            </div>
            </div>
                </div>
                </div>
            
            
        </>

           
    )
}