function multiply()
{
   let num1 = document.getElementById("firstNumber").value;
    Number(num1);
    let num2 = document.getElementById("secondNumber").value;
    Number(num2);
    document.getElementById("grandTotal").innerHTML = grandTotal;

     let tipTotal = num1 * num2;
     let grandTotal = num1 + tipTotal;





    console.log(grandTotal);
    console.log(num1);
    console.log(num2);



//     function multiply()
// {
//    let num1 = document.querySelector("firstNumber").value;
//     let num2 = document.querySelector("secondNumber").value;

//     let grandTotal = num1 + (num2 * num1);
//     grandTotal = grandTotal.toFixed(2);


//     document.querySelector("#grandTotal").innerHTML = grandTotal;
// }
// const changeText = () => {
//     const button = document.querySelector('p');
//     button.innerHTML = "this is the answer";
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', changeText);
}