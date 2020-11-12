
 const handleSubmit = (e) => {
    e.preventDefault(); // preventing the default browser event handling
    submitEvent();
  };


let product;
let url = "https://striveschool-api.herokuapp.com/api/product/"
const submitEvent = async () => {

    let myEvent = {
        // gathering the data from the form, field by field
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        time: document.querySelector("#time").value,
        price: document.querySelector("#price").value,
      };


      try {
        let response = await fetch(url, {
          // our POST request is made with the fetch method as well!
          method: "POST", // declaring the CRUD method
          body: JSON.stringify(myEvent), // we need to stringify the JS object in order to send it
          headers: new Headers({
            // we need also to declare the content type
            "Content-Type": "application/json",
          }),
        });
       
        if (response.ok) {
          // checking the ok property which stores the successful result of the operation
          alert("Event created successfully");
          location.assign("index.html");
        } else {
          alert("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    };
