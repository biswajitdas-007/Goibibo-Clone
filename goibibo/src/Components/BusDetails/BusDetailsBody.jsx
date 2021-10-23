import Businfo from "./Businfo";
import "./Header.css";
import { HeaderCheckbox } from "./HeaderCheckbox"
import { useContext } from "react";
import { AuthContext } from "../../Context/FilterContext";
function BusDetailsBody() {
    const {  handleFilter,handledivclick,handleReset,handleTime,handleTime2,handlePrice,handleFastest,handleFilter2,check,initial,best,check1,initial1 } = useContext(AuthContext);
    return (
            
        <div>
            <section className="eLJizy">
                <div className="jwnhYD">
                    <div className="eMfvSP">
                        <div className="tihIM">
                        <img src="https://gos3.ibcdn.com/go_safe_location_icon-1591250257.png" alt="" />
                        <span className="iLdzQD">Covid guidelines may be applicable in few states. Check these guidelines before travel</span>
                         </div>
                    </div>
                        <div className="bolzYx">
                            <div className="leftside-start">
                                <div className="fzifhO">
                                    <div className="jfGVSI">
                                        <span className="dIWGnO">Filters</span>
                                        <a onClick={handleReset} className="dafNvA" href>Reset All</a>

                                    </div>
                                <div className="jfgoXB">
                                    <div className="dJEHuf">
                                        <span className="dIeNlA">popular</span>
                                        <a onClick={handleReset} className="dafNvA" href>Reset</a>
                                    </div>
                                    <div className="dZsEaZ">
                                        <HeaderCheckbox></HeaderCheckbox>
                                    </div>

                                </div>
                                <div className="jfgoXB">
                                    <div className="dJEHuf">
                                        <span className="dIeNlA">Bus Type</span>
                                        <div onClick={handleReset}><a className="dafNvA" href>Reset</a></div>

                                    </div>
                                    <div className="faQIkU">
                                        <div onClick={()=>{handledivclick("ac")}}   value="AC" className="djZxHm">
                                            <span className="bRgIPn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="" class="AcOnIcon-sc-c8hliw-0 lmmNpL"><path d="M2.24 14.653c.195 0 .387-.027.571-.077l4.133-1.12a.536.536 0 01.421.057l-.003-.001 3.44 2.008a.555.555 0 01.003.959l-.003.001-3.44 2.008a.537.537 0 01-.42.052l.004.001-4.133-1.12a2.165 2.165 
                                                0 00-2.16.544 2.219 2.219 0 00-.57 2.184l-.004-.016a2.209 2.209 0
                                                001.6 1.56l2.587.699a.561.561 0 01.386.684l.001-.004-.685 2.613a2.214
                                                2.214 0 001.515 2.703l.016.004c.187.053.379.08.571.08a2.194 2.194 0
                                                002.106-1.627l.003-.015 1.107-4.179a.56.56 0 01.253-.335l.003-.001
                                                3.451-2.003a.551.551 0 01.549.001l-.002-.001a.556.556 0 01.275.474v4.016c0
                                                .152-.061.29-.16.39l-3.029 3.059a2.22 2.22 0 00-.614 1.536c0 .609.245 1.161.641
                                                 1.563.394.4.941.648 1.547.648.592 0 1.129-.237 1.52-.621l1.893-1.915a.545.545 0 01.776 0l1.893
                                                 1.915c.391.384.928.621 1.52.621.605 0 1.153-.248 1.546-.647a2.22 2.22 0 00.641-1.563c0-.596-.234-1.137-.615-1.536l.001.001-3.027-3.056a.553.553 0 01-.16-.39v-4.018c0-.197.107-.379.275-.48a.551.551 0
                                                  01.549.001l-.003-.001 3.443 2.008a.555.555 0 01.255.332l.001.004 1.107 4.179a2.195 2.195 0 002.695 1.559l-.015.004a2.218
                                                  2.218 0 001.543-2.72l.004.016-.693-2.616a.56.56 0 01.383-.679l.004-.001 2.587-.699a2.2 2.2 0 001.6-1.56 2.22 2.22 0
                                                  00-.576-2.168 2.163 2.163 0 00-2.17-.538l.015-.004-4.133 1.12a.536.536 0 01-.421-.057l.003.001-3.437-2.008a.555.555
                                                  0 01-.003-.959l.003-.001 3.44-2.008a.537.537 0 01.42-.052l-.004-.001 4.133 1.12a2.196 2.196 0 002.735-1.835l.001-.011a2.212
                                                  2.212 0 00-1.584-2.423l-.016-.004-2.587-.699a.561.561 0 01-.386-.684l-.001.004.683-2.613a2.215 2.215 0 00-1.537-2.695l-.016-.004a2.187 2.187 0 00-2.671 1.539l-.004.015-1.107 4.179a.56.56 0 01-.253.335l-.003.001-3.435 2.003a.551.551 0 01-.549-.001l.003.001a.556.556 0 01-.275-.474V7.201c0-.147.059-.288.16-.392L21.38 3.75c.38-.399.614-.94.614-1.536a2.22 2.22 0 00-.641-1.563 2.164 2.164 0 00-1.547-.648c-.592 0-1.129.237-1.52.621l-1.893 1.915a.545.545 0 01-.776 0L13.724.624a2.163 2.163 0 00-1.52-.621c-.605 0-1.153.248-1.546.647a2.22 2.22 0 00-.641 1.563c0 .596.234 1.137.615 1.536l-.001-.001 3.024 3.056a.57.57 0 01.16.392v4.016a.563.563 0 01-.275.48.551.551 0 01-.549-.001l.002.001L9.55 9.684a.555.555 0 01-.255-.332l-.001-.004-1.107-4.179a2.188 2.188 0 00-2.655-1.428l.015-.004a2.218 2.218 0 00-1.576 2.588l-.002-.014.693 2.616a.56.56 0 01-.383.679l-.004.001-2.587.699a2.216 2.216 0 00-1.604 2.436l-.001-.012a2.2 2.2 0 002.168 1.923h-.008z"></path></svg>
                                            </span><span className="font">AC</span>
                                        </div>
                                        <div onClick={()=>{handledivclick("non-ac")}} className="djZxHm">
                                            <span className="bRgIPn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="" class="AcIcon-sc-1t96y-0 fGuEds"><path d="M27.88 1.877c.33.329.533.784.533 1.287s-.204.958-.533 1.287L4.733 27.6a1.82 1.82 0 01-2.574-2.574l7.973-7.979-2.747.747a.466.466 0 00-.208.123l-.075.099-1.835 3.197a1.87 1.87 0 01-2.558.689l.009.005a1.89 1.89 0 01-.662-2.574l-.005.009 1.141-2a.476.476 0 00-.166-.645l-.002-.001-1.976-1.147a1.877 1.877 0 01-.973-1.64v-.013c0-.7.379-1.312.943-1.641l.009-.005c.264-.154.581-.245.92-.245.36 0 .697.103.981.281l-.008-.005 3.16 1.832c.107.061.235.08.355.045l3.277-.893a.474.474 0 00.213-.79l-2.392-2.413a.465.465 0 00-.329-.136h-.001l-3.653.008a1.87 1.87 0 01-1.839-2.132l-.001.01a1.888 1.888 0 011.858-1.64h.001l2.285-.005a.474.474 0 00.469-.475l.005-2.307a1.887 1.887 0 011.866-1.771h.001c.992 0 1.803.777 1.858 1.755v.005l-.011 3.685a.47.47 0 00.136.333l2.392 2.413a.463.463 0 00.454.12l-.003.001a.475.475 0 00.33-.33l.001-.003.888-3.307a.473.473 0 00-.046-.36l.001.002-1.819-3.189A1.897 1.897 0 0113.072.2l.009-.005A1.849 1.849 0 0115.61.84l.005.008 1.136 1.995a.464.464 0 00.642.169l-.002.001 1.981-1.157a1.85 1.85 0 012.515.69l.005.009a1.895 1.895 0 01-.664 2.557L18.06 6.963a.471.471 0 00-.215.285l-.001.003-.768 2.853 8.232-8.232c.329-.329.783-.532 1.285-.532s.956.203 1.285.532zm.827 7.438a1.89 1.89 0 01.659 2.574l.005-.009-1.141 2.003a.476.476 0 00.166.645l.002.001 1.976 1.147c.583.324.971.935.973 1.637v.013c0 .7-.379 1.312-.943 1.641l-.009.005a1.844 1.844 0 01-1.901-.034l.008.005-3.16-1.835a.462.462 0 00-.358-.045l.003-.001-3.277.893a.474.474 0 00-.21.792l2.392 2.411c.084.085.2.138.328.139l3.653-.011c.163 0 .325.021.485.064l.253.088a1.879 1.879 0 011.097 1.98l.001-.01a1.888 1.888 0 01-1.852 1.643h-.001l-2.285.005a.474.474 0 00-.469.475l-.005 2.304a1.885 1.885 0 01-1.866 1.773h-.004a1.862 1.862 0 01-1.858-1.755v-.005l.011-3.685v-.005a.473.473 0 00-.133-.329l-2.395-2.413a.46.46 0 00-.454-.122l.003-.001a.475.475 0 00-.33.33l-.001.003-.885 3.307a.467.467 0 00.047.363l-.001-.002 1.816 3.187a1.897 1.897 0 01-.696 2.542l-.009.005a1.849 1.849 0 01-2.529-.645l-.005-.008-1.136-1.995a.464.464 0 00-.642-.169l.002-.001-1.981 1.157a1.848 1.848 0 01-2.512-.69l-.005-.009a1.897 1.897 0 01.653-2.555l.008-.005 3.168-1.851a.478.478 0 00.218-.282l.001-.003.885-3.307c.043-.165 6.125-6.304 6.285-6.347l3.283-.891a.475.475 0 00.284-.216l.001-.002 1.835-3.197a1.868 1.868 0 012.561-.691l-.009-.005z"></path></svg>

                                            </span>
                                            <span className="font">NON-AC</span>
                                        </div>
                                        <div onClick={()=>{handledivclick("Seater")}} className="djZxHm">
                                            <span className="bRgIPn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="" class="SeatIcon-sc-5toudm-0 dvsKAb"><path d="M20.267 25.832A3.086 3.086 0 0120.272 32h-9.186a3.086 3.086 0 01-.005-6.168h9.186zM20.525.08c.731-.267 1.52.168 1.763.973l1.461 4.848c.221.731.296 1.507.224 2.272l-1.2 12.605c-.187 1.963-1.685 3.451-3.469 3.453h-9.211c-.773 0-1.397-.693-1.397-1.547v-1.539c0-.853.624-1.544 1.397-1.544h7.325c.715-.003 1.312-.6 1.387-1.387l1-10.533-.032-.323-1.459-4.845c-.24-.811.155-1.68.888-1.949z"></path></svg>

                                            </span>
                                            <span className="font">Seater</span>
                                        </div>
                                        <div onClick={()=>{handledivclick("sleeper")}} className="djZxHm">
                                            <span className="bRgIPn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="" class="SleeperIcon-sc-1bnz2ru-0 dywndb"><path d="M1.333 8h.018c.719 0 1.303.577 1.315 1.293v7.439a.33.33 0 00.334.324h26.003c.18 0 .326-.144.329-.323v-4.205a1.316 1.316 0 011.315-1.294h.019-.001.018c.719 0 1.303.577 1.315 1.293v9.379a1.316 1.316 0 01-1.315 1.294h-.019.001-.018a1.315 1.315 0 01-1.315-1.293v-.645a.328.328 0 00-.334-.324H2.996a.329.329 0 00-.329.323v.646a1.316 1.316 0 01-1.315 1.294h-.019.001-.018a1.315 1.315 0 01-1.315-1.293V9.294A1.316 1.316 0 011.316 8h.017-.001zM8 8.647c1.842 0 3.333 1.447 3.333 3.234S9.84 15.117 8 15.117c-1.842 0-3.333-1.449-3.333-3.236S6.16 8.645 8 8.645zM24 9.94c.884 0 1.732.341 2.357.948a3.19 3.19 0 01.976 2.288v1.292a.658.658 0 01-.658.647H13.991a.658.658 0 01-.658-.647v-3.233a1.316 1.316 0 011.315-1.294h.019-.001z"></path></svg>

                                            </span>
                                            <span className="font">Sleeper</span>
                                        </div>

                                    </div>

                                </div>
                                <div className="jfgoXB">
                                    <div className="dJEHuf">
                                        <span className="dIeNlA">Departure Time</span>
                                        <div onClick={handleReset}><a className="dafNvA" href>Reset</a></div>

                                    </div>
                                    <div className="faQIkU">
                                        <div onClick={()=>{handleTime("12mid-6am")}} className="djZxHm">12 midnight - 6 AM</div>
                                        <div onClick={()=>{handleTime("6am-12noon")}} className="djZxHm">6 AM - 12 noon</div>
                                        <div onClick={()=>{handleTime("12noon-6pm")}} className="djZxHm">12 noon - 6 PM</div>
                                        <div onClick={()=>{handleTime("6pm-12mid")}} className="djZxHm">6 PM - 12 midnight</div>
                                         
                                         
                                    </div>
                                </div>
                                <div className="jfgoXB">
                                    <div className="dJEHuf">
                                        <span className="dIeNlA">Arrival Time</span>
                                        <div onClick={handleReset}><a className="dafNvA" href>Reset</a></div>

                                    </div>
                                    <div className="faQIkU">
                                        <div onClick={()=>{handleTime2("12mid-6am")}} className="djZxHm">12 midnight - 6 AM</div>
                                        <div onClick={()=>{handleTime2("6am-12noon")}} className="djZxHm">6 AM - 12 noon</div>
                                        <div onClick={()=>{handleTime2("12noon-6pm")}} className="djZxHm">12 noon - 6 PM</div>
                                        <div onClick={()=>{handleTime2("6pm-12mid")}} className="djZxHm">6 PM - 12 midnight</div>
                                        

                                    </div>
                                </div>
                               
                                

                                </div>

                            </div>
                        <div className="righside-start">
                            <div className="dWsOPQ">
                                <div className="miEV"><span>Showing</span><span className="bold">10 buses</span></div>
                                <div className="dxDNBd"><a href>Next Day</a></div>
                            </div>
                            <div className="cpuulD">
                                <div className="sortby-div"><span className="sortny-span">Sortby:</span></div>
                                <div className="hAYLvq">
                                    <span onClick={handleFilter2} className="span-br">BEST
                                          {best?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1rem" height="1rem" fill="#2276e3" class="ArrowDownIcon-sc-ch36d8-0 TFcKm"><path d="M28.444 17.06l-2.923-3.093-7.445 7.865V1.779h-4.153v20.053l-7.442-7.861-2.926 3.093 12.444 13.159L28.443 17.06z"></path></svg>:""}
                                    
                                    </span>
                               
                                    <span onClick={handleFilter} className="span-br">RATING
                                        {initial?"":check?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1rem" height="1rem" fill="#2276e3" class="ArrowDownIcon-sc-ch36d8-0 TFcKm"><path d="M28.444 17.06l-2.923-3.093-7.445 7.865V1.779h-4.153v20.053l-7.442-7.861-2.926 3.093 12.444 13.159L28.443 17.06z"></path></svg>:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1rem" height="1rem" fill="#2276e3" class="ArrowUpIcon-sc-17mwiam-0 gOPeJj"><path d="M3.556 14.94l2.923 3.093 7.445-7.865v20.053h4.149V10.168l7.449 7.861 2.923-3.093L16.001 1.777 3.557 14.94z"></path></svg>}</span>
                                <span className="span-br">DEPARTURE</span>
                                <span className="span-br">ARRIVAL</span>
                                    <span onClick={handleFastest} className="span-br">FASTEST
                                    {initial1?"":check1?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1rem" height="1rem" fill="#2276e3" class="ArrowDownIcon-sc-ch36d8-0 TFcKm"><path d="M28.444 17.06l-2.923-3.093-7.445 7.865V1.779h-4.153v20.053l-7.442-7.861-2.926 3.093 12.444 13.159L28.443 17.06z"></path></svg>:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1rem" height="1rem" fill="#2276e3" class="ArrowUpIcon-sc-17mwiam-0 gOPeJj"><path d="M3.556 14.94l2.923 3.093 7.445-7.865v20.053h4.149V10.168l7.449 7.861 2.923-3.093L16.001 1.777 3.557 14.94z"></path></svg>}</span>
                                <span onClick={handlePrice} className="span-br">CHEAPEST</span>

                                </div>
                                

                            </div>
                            <div className="cnOKAm">
                             
                                <Businfo/>

                            </div>
                            
                            

                        </div>
                        </div>
                    
                    </div>
               
            </section>
        </div>
    );
}

export {BusDetailsBody}