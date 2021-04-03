import { useHistory } from "react-router-dom";
import { useState } from "react"
export default function Restaurant({ restaurant, setSelectedRestaurant, handleSort }) {
    
    const history = useHistory();
    const [value, setvalue] = useState('')
    const [order,setOrder] = useState(true);

    function handleClick(item) {
        setSelectedRestaurant(item);
        localStorage.setItem("selectedItem",JSON.stringify(item))
        history.push(`/${item.Variety}`);
    }

    function handleSortingOrder(flag){
        handleSort(flag)
        setOrder(flag)
    }


    function handleChange(e){
        setvalue(e.target.value);
    }

    return(
        <div>
        <div className="mb-5 search">
          <input type="text" className="form-control inputBox" placeholder="Search Restaurant" value={value} onChange={handleChange}/>
          <button type="button" className="btn btn-outline-secondary" onClick={() => handleSortingOrder(!order)}>Sort By Rating</button>
        </div>
        <div className="restaurant">
            {
                 restaurant.filter(f => f.Brand.includes(value) || value === '').map((item,index) => {
                    return  <div className="card " style={{'width': '18rem', marginBottom:'2%'}} key={index} onClick={() => handleClick(item)}>
                    <img src={item.imageUrl} className="card-img-top" style={{'height':'100%'}}/>
                    <div className="card-body mx-auto">
                        <h5 className="card-title ">{item.Brand}</h5>
                        <p>{`Star Rating : ${item.Stars == "NaN" ? "Not Rated" : item.Stars}`}</p>
                    </div>
                  </div>
                  
                })
            }
        </div>
        </div>
    )
}