const fs = require("fs");
const Twit = require("twit");

fs.readFile('./tweets.json', 'utf8', (err, jsonString) => {
  if (err) {
      console.log("Error:", err)
      return
  }
  try {
      let twitterData = JSON.parse(jsonString)
      let str = twitterData.search_metadata.next_results
      let strData = (str.match(/\d{18,}/))
      console.log(strData[0])
} catch(err) {
      console.log('Error parsing JSON string:', err)
  }
})

const T = new Twit({
  consumer_key: "McpuD9sd0pAbyZtwvCYq1Ypv6",
  consumer_secret: "2LZ3LKoR0fio3PIERY5IslgK9IT2WY6dWufdAtCAcQjMSeP7J5",
  access_token: "1213295462393892864-HTToxrmrGXKZ26Bt5vyjDOyyWrzZMd",
  access_token_secret: "kmu0Eq1UfEFqw3kjhYilUzItn0tbaxfJxhhUg1Ji72SWG",
});

T.get(
  "search/tweets", { q: "#corona since:2020-03-1", count: 10},
  function (err, data, response) {
    try {
      fs.appendFileSync("tweets.json", JSON.stringify(data, response));
    } catch {
      console.log(err)
    }
  }
);

T.get(
  "search/tweets", { q: "#corona since:2020-03-1", count: 10},
  function (err, data, response) {
    try {
      fs.appendFileSync("tweets.json", JSON.stringify(data, response));
    } catch {
      console.log(err)
    }
  }
);


// (#coronajihad OR #corona_jihad ) until:2020-04-15 since:2020-03-10