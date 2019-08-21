

// I AM NOT USED. I MOVED MY FETCH TO EXTERNAL API TO
// THE ACTUAL CONTAINER

// Add the external and internal fetchs here, then export and import 



export const getStocks = () => {
    // const getURL = () => {
    //     //https://api.worldtradingdata.com/api/v1/history?symbol=AAPL&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz
    //     return (
    //       // "https://api.worldtradingdata.com/api/v1/history?symbol=" + this.state.stock_name + "&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"
    //       "https://api.worldtradingdata.com/api/v1/history?symbol=SBUX&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"
    //     )
    //   }
    return dispatch => {
      return fetch(`https://api.worldtradingdata.com/api/v1/history?symbol=SBUX&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz`)
            .then(response => response.json())
            .then(responseData => {
              console.log(responseData.name)

              this.setState({
                stock_name: responseData.name, 
                history: responseData.history
            }).bind(this)
              // this.setState({ stock_name: responseData.name,
              //   history: responseData.history}, function() {
              //     console.log(this.state.stock_name)
              //   }).bind(this)
              // .catch(errors => console.log(errors))
            })
    }
}


// export const createScape = scape => {
//   return dispatch => {
//   return fetch(`http://localhost:3000/api/scapes`,  {
//       method: "POST", 
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ scape: scape })
//   })
//       .then(response => response.json())
//       .then(scape => {
//           dispatch(addScape(scape))
//           dispatch(resetScapeForm())
//       })
//       // .catch(error => console.log(error))
//   }
// }





