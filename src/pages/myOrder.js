/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from "react";
import { useSelector } from "react-redux";
import {ArrowLeftOutlined} from "@ant-design/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {Typography, Button} from "antd"

const myOrder = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const {order} = useSelector(state => state.order)
  const todoPage = 5
  const history = useHistory()
  const pagination = []
  const TodoListLength = order.length
  const pageLast = currentPage * todoPage;
  const pageFirst = pageLast - todoPage;
  const currentPages = order.slice(pageFirst, pageLast);
  for (let i = 1; i <= Math.ceil(TodoListLength / todoPage); i++) {
      pagination.push(i)
  }

  return (
    <div className="myOrderCss">
        <div className="headerDetails">
           <div className="btnBox">
               <Button type="link" onClick={()=>history.push("/")}>
                   <ArrowLeftOutlined/>
                   Back
               </Button>
           </div>
           <div className="DetailsProduct">
               <Typography.Title level={3}> My Orders</Typography.Title>
           </div>
  </div>
  {
    order.length  ? (
<div className="commonOrder">
            <div className="productOrderSuccess">
              <table className="table">
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                  {
                    currentPages.map(item=>(
                        <tr>
                        <td>{item.title}</td>
                        <td>{item.count}</td>
                        <td>{item.price}{" "}$</td>
                        </tr>
                      ))
                    
                  }
              </table>
              <ul className="pageination">
                  {
                     pagination.map(number =>
                            <li key={number}>
                                <a href="#" onClick={() => setCurrentPage(number)}>{number}</a>
                            </li>
                        )
                  }
                        
               </ul>
            </div> 

           </div>
    ):(
      <div className="commonOrder">
       <Typography.Title level={3}>You have no gone products</Typography.Title>
      </div>
    )
  }
     
    </div>
  );
};

export default myOrder;

