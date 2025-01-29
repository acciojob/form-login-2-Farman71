//your JS code here. If required.
function getFormvalue(event) {
	event.preventDefault();
	let fName=document.getElementById("fname");
	let lName=document.getElementById("lname");
	let pNum=document.getElementById("num");
	let eMail=document.getElementById("email");
	let string=`First Name: ${fName.value} Last Name: ${lName.value} Phone Number: ${pNum.value} Email ID: ${eMail.value}`
	alert(string);
}
