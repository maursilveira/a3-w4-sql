(() => {
  let getButton = document.querySelectorAll('.getButton');
  let deleteButton = document.querySelector('.deleteButton');
  let postButton = document.querySelector('.postButton');

  function fetchData() {
    let url = 'api/' + this.id;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function deleteRecord() {
    let url = "api/" + this.id;

    fetch(url, {
      method: 'delete'
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function insertRecord() {
    console.log('POST HERE');
    // let url = "api/" + this.id;
    let url = "api/";

    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text-plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'F1000',
        modelName: 'Mini Cooper F1000',
        pricing: '50,900',
        modelDetails: 'It is a super car',
        imgPath: 'F1000.jpg'
      })
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getButton.forEach(button => button.addEventListener('click', fetchData, false));
  deleteButton.addEventListener('click', deleteRecord, false);
  postButton.addEventListener('click', insertRecord, false);
})();
