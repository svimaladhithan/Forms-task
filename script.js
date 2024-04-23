document.getElementById("form").addEventListener("submit",function(event) {
    event.preventDefault();

    const fname=document.getElementById("first-name").value;
    const lname=document.getElementById("last-name").value;
    const address=document.getElementById("address").value;
    const pincode=document.getElementById("pincode").value;
    const gender=document.querySelector('input[name=gender]:checked').value;
    const foods=document.querySelectorAll('input[name="food"]:checked');
    const selectedfoods= Array.from(foods).map(food=>food.value).join(', ');
    const state=document.getElementById("state").value;
    const country=document.getElementById("country").value;
    const tablebody=document.getElementById("tbody");

    const newrow= document.createElement("tr");

    newrow.innerHTML= `
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${gender}</td>
    <td>${selectedfoods}</td>
    <td>${state}</td>
    <td>${country}</td>
`
tablebody.appendChild(newrow);

document.getElementById("form").reset();
});