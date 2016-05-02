axios = require('axios');

exports.githubApiTest = function (req, res){
  const apiTest = axios.get('https://api.github.com/search/users?q=+repos:%3E42+language:javascript+location:leeds')
    .then(response =>{
      console.log("response", response);
      res.send(response)
    })
  // console.log("apiTest", apiTest);
}
