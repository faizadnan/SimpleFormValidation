
//adding labels:-
document.getElementById("fname").insertAdjacentHTML("beforebegin", "<label>First Name</label>")
document.getElementById("lname").insertAdjacentHTML("beforebegin", "<label>Last Name</label>")
document.getElementById("number").insertAdjacentHTML("beforebegin", "<label>Mobile</label>")
document.getElementById("email").insertAdjacentHTML("beforebegin", "<label>Email</label>")

//adding error thing:-
document.querySelectorAll(".input_div input").forEach(input => input.addEventListener("blur", function (event) {
    let errorMessage = Array.from(event.target.parentNode.querySelectorAll("span"));

    if (event.target.value == "" && errorMessage.length == 0) {
        input.insertAdjacentHTML("afterend", "<span>Invalid</span>")
    }

    if (event.target.value != "" && errorMessage) {
        errorMessage.forEach(element => element.remove())

    }

}))



//making button disabled:-

document.getElementById("btn").setAttribute("disabled", "disabled");

document.querySelector(".form").addEventListener("change", function () {
    let isfilled = Array.from(document.querySelectorAll(".input_div input")).every(input => input.value);
    if (isfilled) {
        document.getElementById("btn").removeAttribute("disabled")
    } else {
        document.getElementById("btn").setAttribute("disabled", "disabled")
    }
})

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault();
    alert("You Havve registered Successfully");
    document.querySelectorAll(".input_div input").forEach(input=> input.value="")
})
