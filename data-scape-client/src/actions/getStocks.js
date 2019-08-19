

// Add the external and internal fetchs here, then export and import 



export default function getStocks() {
    // const getURL = () => {
    //     //https://api.worldtradingdata.com/api/v1/history?symbol=AAPL&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz
    //     return (
    //       // "https://api.worldtradingdata.com/api/v1/history?symbol=" + this.state.stock_name + "&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"
    //       "https://api.worldtradingdata.com/api/v1/history?symbol=SBUX&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"
    //     )
    //   }

      return fetch(`https://api.worldtradingdata.com/api/v1/history?symbol=SBUX&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz`)
            .then(response => response.json())
            .then((responseData) => {
              this.setState({ stock_name: responseData.name,
                history: responseData.history
              })
              .catch(error => this.setState({ error }));
      })
}

// for some reason, my this.getGURL is a problem




