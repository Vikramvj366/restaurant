export default function Details({ selectedRestaurant }){
   
   return(
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={selectedRestaurant.imageUrl} style = {{width:'100%'}} alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{selectedRestaurant.Brand}</h5>
          <p>Country : {selectedRestaurant.Country}</p>
          <p>Styling : {selectedRestaurant.Style == "Nan"? "Not Specified" : selectedRestaurant.Style}</p>
          <p className="card-text">{`Reciepe : ${selectedRestaurant.Variety}`}</p>
          <p className="card-text"><small className="text-muted">Star Rating: {selectedRestaurant.Stars == "NaN"? "Not Rated" : selectedRestaurant.Stars}</small></p>
          <p className="card-text"><small className="text-muted">Top Ten: {selectedRestaurant["Top Ten"] == "NaN"? "Not Specified" : selectedRestaurant["Top Ten"]}</small></p>
        </div>
      </div>
    </div>
  </div>
   ) 
}