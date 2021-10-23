import { createContext, useState,useEffect } from "react";
import axios from "axios";


export const AuthContext = createContext({ empty: {}, fetchData: [], seat1: {},handle_seat:()=>{}, handleFilter:() => { },handlechange2:() => { },handledivclick:() => { },handleReset:() => { },handleTime:() => { },handleTime2:() => { },handlePrice:()=>{},handleFastest:()=>{},handleFilter2:()=>{}});

export function AuthProvider({ children }) {
    const [fetchdata, setfetchData] = useState([]);
    const [option, setOption] = useState([]);
    const [empty, setEmpty] = useState(false);
    const [seat1, setSeat] = useState([]);
    const [check, setCheck] = useState(true);
    const [initial, setInitial] = useState(true);
    const [best, setBest] = useState(false);
    const [check1, setCheck1] = useState(true);
    const [initial1, setInitial1] = useState(true);
    useEffect(() => {
        axios.get("https://serene-dusk-24596.herokuapp.com/bus")
            .then((res) => {
                
                console.log("data: ",res.data.data);
                setfetchData(res.data.data);
                setOption(res.data.data);
            })
       
    }, [])
    
    function componentDidMount(){
        window.scrollTo({
            top: 100,
            left: 100,
            behavior:'smooth'
        })

    }

    const handlePrice = () => {
        const price = fetchdata.map((el) => {
            return el;
        })
        let output = (a, b) => {
            return a.price-b.price
            
        }
       
        
        price.sort(output)
        setfetchData(price);


    }

    const handleFastest = () => {
        function outputF(arr) {
  arr=arr.split(" ")
 let ar1 = arr[0].split("");
let ar2 = arr[1].split("");
  let str = "";
  str += "0";
for (var i = 0; i < ar1.length; i++){
  if (ar1[i] !== "h") {
    str+=ar1[i]
  }
}
if (ar2.length < 3) {
  
str += "0";
}

for (let i = 0; i < ar2.length; i++){
  if (ar2[i] !== "m") {
    str+=ar2[i]
  }
  }
  return Number(str);
        }
        
        const Fastest = fetchdata.map((el) => {
            return el;
        })
        let output = (a, b) => {
            return outputF(a.duration)-outputF(b.duration)
            
        }
        let output1 = (a, b) => {
            return outputF(b.duration)-outputF(a.duration)
        }
        check1 ? (
           <>    {setInitial1(false)}
                {Fastest.sort(output)}
                {setCheck1(false)}
               
                </>
            
                
               
        ) :
                
                
            (<>
                {setInitial1(false)}
                {Fastest.sort(output1)}
                {setCheck1(true)}
                
                </>
            
            )
        setfetchData(Fastest);
        
        
    
}
   
    const handle_seat = (e) => {
        console.log("from AuthContext:",e)
        setSeat(e);
        console.log(seat1)
}
    const handleFilter = () => {
        const ar1 = fetchdata.map((el) => {
            return el;
        })
        let output = (a, b) => {
            return a.rating-b.rating
            
        }
        let output1 = (a, b) => {
            return b.rating-a.rating
        }
        check ? (
           <>   {setInitial(false)}
                {ar1.sort(output)}
                {setCheck(false)}
                </>
            
                
               
        ) :
            (<> {setInitial(false)}
                {ar1.sort(output1)}
                {setCheck(true)}
                </>
            
            )
        setfetchData(ar1);
    }
    const handleFilter2 = () => {
         const ar2 = fetchdata.map((el) => {
            return el;
        })
        let output = (a, b) => {
            return b.rating-a.rating
            
        }
        ar2.sort(output)
        setBest(true);
        setfetchData(ar2);
    }
    const handlechange2 = (e) => {
        if (e.target.checked === true) {
            let arr = fetchdata.filter((el) => {
                if (e.target.value === el.popular[0] || e.target.value === el.popular[1]) {
                    return el;
                }
            return 0;
            })
            if (arr.length === 0) {
                setEmpty(true);
            }
            else {
                 setfetchData(arr);
            }
           
                
        }
        else {
            setfetchData(option);
             setEmpty(false);

            
        }
    }
    const handledivclick = (e) => {
        let arr2 =fetchdata.filter((el) => {
            if (e === el.type[0] || e === el.type[1] || e === el.type[2] || e===el.type[3]) {
                return el;
            }
            return 0;
        })
        if (arr2.length === 0) {
            setEmpty(true);
            componentDidMount()
            
        } else {
            setfetchData(arr2);
            setEmpty(false);
            componentDidMount()
        }
        
      
        
    }
     const handleReset = () => {
        setfetchData(option);
         setEmpty(false)
         setInitial1(true);
        componentDidMount()
         setInitial(true);
         
        setBest(false);
    }
    
    const handleTime = (e) => {
        function twodigit(t) {
            let arr = t.split(":").map(Number);
            return arr[0];

            
        }
        if (e === "12mid-6am") {
           var arr3 = fetchdata.filter((el) => {
               if (twodigit(el.source_t) < 6) {
                    
                    return el;
                }
               return 0;
            })
        }
        else if (e === "6am-12noon") {
             arr3 = fetchdata.filter((el) => {
                if (twodigit(el.source_t) > 6 && twodigit(el.source_t) < 12) {
                    
                    
                    return el;
                }
                return 0;
            })
            
        }
        else if(e==="12noon-6pm"){
             arr3 = fetchdata.filter((el) => {
                if (twodigit(el.source_t) > 12 && twodigit(el.source_t) < 18) {
                   
                    return el;
                }
                return 0;
            })

        }
        else if(e==="6pm-12mid"){
             arr3 = fetchdata.filter((el) => {
                if (twodigit(el.source_t) > 18) {
                  
                    return el;
                }
                return 0;
            })

        }
        else {
             arr3 = [];
            return arr3;
        }
        if (arr3.length === 0) {
            setEmpty(true);
            componentDidMount()
        }
        else {
            setfetchData(arr3);
            componentDidMount()
        }
       
       
        
    }
    const handleTime2 = (e) => {
        function twodigit(t) {
            let ar1 = t.split(":").map(Number);
            return ar1[0];

            
        }
        if (e === "12mid-6am") {
           var arr4 = fetchdata.filter((el) => {
               if (twodigit(el.destination_t) < 6) {
                    
                    return el;
                }
                return 0;
            })
        }
        else if (e === "6am-12noon") {
             arr4 = fetchdata.filter((el) => {
                if (twodigit(el.destination_t) >= 6 && twodigit(el.destination_t) < 12) {
                    
                    return el;
                }
                return 0;
            })
            
        }
        else if(e==="12noon-6pm"){
             arr4 = fetchdata.filter((el) => {
                if (twodigit(el.destination_t) > 12 && twodigit(el.destination_t) < 18) {
                    
                    return el;
                }
                return 0;
            })

        }
        else if(e==="6pm-12mid"){
             arr4 = fetchdata.filter((el) => {
                if (twodigit(el.destination_t) >= 18) {
                    console.log("6 to 12mid")
                    return el;
                }
                return 0;
            })

        }
        else {
             arr4 = [];
            return arr4;
        }
        if (arr4.length === 0) {
            setEmpty(true);
            componentDidMount()
        }
        else {
            setfetchData(arr4);
            componentDidMount()
        }
       
        
        
    }


    return (
        <AuthContext.Provider value={{empty,fetchdata,seat1,setSeat,handle_seat,handleFilter,handlechange2,handledivclick,handleReset,handleTime,handleTime2,handlePrice,handleFastest,handleFilter2,check,initial,check1,initial1,best}}>
            {children}
        </AuthContext.Provider>
    )


    
}
