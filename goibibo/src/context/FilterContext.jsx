import { createContext, useState,useEffect } from "react";
import axios from "axios";


export const AuthContext = createContext({ fetchData:[], handleFilter:() => { },handlechange2:() => { }});

export function AuthProvider({ children }) {
    const [fetchdata, setfetchData] = useState([]);
    const [option, setOption] = useState([]);

    const [check, setCheck] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:3001/bus")
            .then((res) => {
                
                //console.log(res.data.data);
                setfetchData(res.data.data);
                setOption(res.data.data);
            })
    }, [])
   

    const handleFilter = () => {
        const ar1 = fetchdata.map((el) => {
            return el;
        })
        let output = (a, b) => {
            return a.rating - b.rating
            
        }
        let output1 = (a, b) => {
            return b.rating - a.rating
        }
        check ? (
            <>
                {ar1.sort(output)}
                {setCheck(false)}
            </>
            
                
               
        ) :
            (<>
                {ar1.sort(output1)}
                {setCheck(true)}
            </>
            
            )
        setfetchData(ar1);
    }
    const handlechange2 = (e) => {
        if (e.target.checked === true) {
            let arr = fetchdata.filter((el) => {
                if (e.target.value === el.popular[0] || e.target.value === el.popular[1]) {
                    return el;
                }
            }
            )
            setfetchData(arr);
        }
        else {
            setfetchData(option);
        }
            }

    return (
        <AuthContext.Provider value={{fetchdata,handleFilter,handlechange2}}>
            {children}
        </AuthContext.Provider>
    )


    
}
