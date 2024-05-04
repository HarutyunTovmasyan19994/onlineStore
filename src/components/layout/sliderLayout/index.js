import React,{useState} from "react";
import {Layout,Typography} from "antd";
import {FilterOutlined} from  "@ant-design/icons"
import {FILTER_BY_PRICE,FILTER_BY_MAX_MINI_PRICE,FILTER_BY_TITLE} from "../../../redux/reducers/filterReducer/action"
import { useDispatch } from "react-redux";
import "../styles/hedaerLayoutStyle.css"


const AppSlider = () => {
    const[title,setTitle] = useState("")
    const[price,setPrice] = useState("")
    const[maxMiniPrice,setMaxMiniPrice] = useState({miniPrice:"",maxPrice:""})
    const dispatch = useDispatch()


    const MiniMaxPriceHandle =(e)=>{
        const {name,value} = e.target
        setMaxMiniPrice({...maxMiniPrice,[name]:value})
    }


    return (
        <Layout.Sider className="sider">
            <Typography.Paragraph className="filter">Filter</Typography.Paragraph>
            <div className="formDiv">
                <input type="text" className="inputText" placeholder="Filter by Title" onChange={(e)=>setTitle(e.target.value)}/>
                <button className="filterBtn" onClick={()=>dispatch({type:FILTER_BY_TITLE,payload:title})}>
                    Filiter
                    <FilterOutlined style={{margin:3}}/>
                    </button>
                    <div className="maxDiv">
                      <div className="maxMiniDiv">
                       <input type="number" name="miniPrice" className="inputText" placeholder=" Mini Price" onChange={(e)=>MiniMaxPriceHandle(e)}/>
                       <input type="number" name="maxPrice" className="inputText" placeholder=" Max Price" onChange={(e)=>MiniMaxPriceHandle(e)}/> 
                    </div>
                 <button className="filterBtn" onClick={()=>dispatch({type:FILTER_BY_MAX_MINI_PRICE,payload:maxMiniPrice})}>
                    Filiter
                    <FilterOutlined style={{margin:3}}/>
                    </button>
                    </div>
                  
                <input type="number" className="inputText" placeholder="Filter by Price" onChange={(e)=>setPrice(e.target.value)}/>
                <button className="filterBtn" onClick={()=>dispatch({type:FILTER_BY_PRICE,payload:price})}>
                    Filiter
                    <FilterOutlined style={{margin:3}}/>
                    </button>
            </div>
        </Layout.Sider>
    )
}

export default AppSlider
