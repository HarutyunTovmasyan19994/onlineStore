import React,{useState} from "react";
import { Button, Drawer } from "antd";
import {FilterOutlined} from "@ant-design/icons";
import { useDispatch,useSelector } from "react-redux";
import {FILTER_BY_PRICE,FILTER_BY_MAX_MINI_PRICE,FILTER_BY_TITLE} from "../../../../redux/reducers/filterReducer/action"
import {OPEN_FILTER} from "../../../../redux/reducers/openCloseReducers/action"



const FiliterDrawer =()=>{
    const {openFilter} = useSelector(state=>state.open)
    const dispatch = useDispatch()
    const[title,setTitle] = useState("")
    const[price,setPrice] = useState("")
    const[maxMiniPrice,setMaxMiniPrice] = useState({miniPrice:"",maxPrice:""})


    const MiniMaxPriceHandle =(e)=>{
        const {name,value} = e.target
        setMaxMiniPrice({...maxMiniPrice,[name]:value})
    }

    const filterHandle = (text)=>{
        if(text === "fliterByTitle"){
            dispatch({type:FILTER_BY_TITLE,payload:title})
            dispatch({type:OPEN_FILTER,payload:false})
        }
        if(text === "filterByMinMaxPrice"){
            dispatch({type:FILTER_BY_MAX_MINI_PRICE,payload:maxMiniPrice})
            dispatch({type:OPEN_FILTER,payload:false})
        }
        if(text === "filterByPrice"){
            dispatch({type:FILTER_BY_PRICE,payload:price})
            dispatch({type:OPEN_FILTER,payload:false})
        }
    }

    return(
        <Drawer
        title="Filter"
        onClose={()=>dispatch({type:OPEN_FILTER,payload:false})}
        open={openFilter}
        >
            <div className="formDiv">
                <input type="text" className="inputText" placeholder="Filter by Title" onChange={(e)=>setTitle(e.target.value)}/>
                <Button type="primary" className="filterBtn" onClick={()=>filterHandle('fliterByTitle')}>
                    Filiter
                    <FilterOutlined style={{margin:3}}/>
                    </Button>
                    <div className="maxDiv">
                      <div className="maxMiniDiv1">
                       <input type="number" name="miniPrice" className="inputText" placeholder=" Mini Price" onChange={(e)=>MiniMaxPriceHandle(e)}/>
                       <input type="number" name="maxPrice" className="inputText" placeholder=" Max Price" onChange={(e)=>MiniMaxPriceHandle(e)}/> 
                    </div>
                 <Button type="primary" className="filterBtn" onClick={()=>filterHandle("filterByMinMaxPrice")}>
                    Filiter
                    <FilterOutlined style={{margin:3}}/>
                    </Button>
                    </div>
                  
                <input type="number" className="inputText" placeholder="Filter by Price" onChange={(e)=>setPrice(e.target.value)}/>
                <Button type="primary" className="filterBtn" onClick={()=>filterHandle("filterByPrice")}>
                    Filiter
                    <FilterOutlined style={{margin:3}}/>
                    </Button>
            </div>
             
        </Drawer>
    )
}

export default FiliterDrawer