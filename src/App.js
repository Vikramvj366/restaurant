import logo from './logo.svg';
import './App.css';
import Restaurant from './Restaurant';
import Details from './Details'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState } from "react"

function App() {

  const [restaurant,setRestaurant] = useState([]);
  const [selectedRestaurant,setSelectedRestaurant] = useState(JSON.parse(localStorage.getItem('selectedItem')))

  function handleSort(order){
    let sortedList = [...restaurant].sort((a,b) => {
      if(order){
        if(isFinite(a.Stars-b.Stars)){
          return a.Stars - b.Stars
        }else {
          return isFinite(a.Stars) ? -1 : 1;
        }
      }else{
        if(isFinite(b.Stars-a.Stars)){
          return b.Stars - a.Stars
        }else {
          return isFinite(a.Stars) ? -1 : 1;
        }
      }
       
    })
    console.log(sortedList)
    setRestaurant(sortedList)
  }

  useEffect(() => {

    Promise.all([
        fetch('/restaurant.json'),
        fetch('/images.json')
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        // Log the data to the console
        // You would do something with both sets of data here
        data[0].map(item  => item.imageUrl = data[1][Math.floor(Math.random() * data[1].length)].Image)
        setRestaurant(data[0])
    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });

  },[]);

  return (
      <div className="container">
        <div className="containerRes">
        <h2 className="m-4">
          Top Ramen Restuarant
        </h2>
        <Router>
        <Switch>
          <Route exact path="/">
            <Restaurant restaurant={restaurant} setSelectedRestaurant={setSelectedRestaurant} handleSort={handleSort}/>
          </Route>
          <Route path="/:id">
            <Details selectedRestaurant={selectedRestaurant}/>
          </Route>
        </Switch>
        </Router>
        </div>
      </div>
    
  );
}

export default App;
