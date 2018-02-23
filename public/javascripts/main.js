(() => {
  let getButton = document.querySelectorAll('.getButton');
  let deleteButton = document.querySelector('.deleteButton');

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

    fetch(url, {method: 'delete'})
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getButton.forEach(button => button.addEventListener('click', fetchData, false));
  // deleteButton.addEventListener('click', deleteRecord, false);
})();
