function showAlert(){
    alert(" button clicked")
}
function changeName()
{
    document.getElementById("button").innerHTML="venkat";

}
// const printingtable = (num) =>
// {

// }
function printtable(num)
{
let s="";
for(let i=1;i<=10;i++)
{
    //s+="10 * "+i+" = "+10*i+"<br>";
    s+=`${num} * ${i} = ${num*i}<br>`
}
  document.getElementById("table").innerHTML=s;
}

let radius=[2,3,4];
function calculateArea(radius)
{
    let ans=[]
    for(let i=0;i<radius.length;i++)
    {
        ans.push(Math.PI*radius[i]*radius[i]);
    }
    return ans;
}
function calculateCircumference(radius)
{
    let ans=[]
    for(let i=0;i<radius.length;i++)
    {
        ans.push(Math.PI*radius[i]*radius[i]);
    }
    return ans;
}
function calculate(radius,logic)
{
    let ans=[]
    for(let i=0;i<radius.length;i++)
    {
        ans.push(logic(radius[i]));
    }
    return ans;
}
function diameter(num){return 2*num}
calculate(radius,(num)=>{return Math.PI*num*num })

let data=[1,2,3,4,4,5]

let newData=data.map((radius)=>{return radius*2})
console.log(newData);

let evenNumbers=data.filter((num)=>!(num%2))
console.log(evenNumbers);

let sum = data.reduce((currentSum,currentValue) =>{
    return 
})