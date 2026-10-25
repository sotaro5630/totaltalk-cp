function login(){

const pw =
document
.getElementById(
"password"
).value;

if(pw==="ABC"){

document
.getElementById(
"login"
).style.display="none";

document
.getElementById(
"adminArea"
).style.display="block";

loadAdmin();

}else{

alert(
"パスワードエラー"
);

}

}

async function loadAdmin(){

const res =
await fetch(
"/api/admin"
);

const data =
await res.json();

let html=`
<table>
<tr>
<th>ツアー</th>
<th>人数</th>
<th>合言葉</th>
<th></th>
</tr>
`;

data.forEach(t=>{

html+=`
<tr>

<td>${t.time}</td>

<td>${t.count}</td>

<td>${t.words}</td>

<td>

<button onclick="
deleteTour(${t.id})
">

削除

</button>

</td>

</tr>
`;

});

html+="</table>";

document
.getElementById(
"adminTable"
).innerHTML=html;

}

async function deleteTour(id){

await fetch(
"/api/delete",
{
method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({
id
})
}
);

loadAdmin();

}