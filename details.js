
const getDAta =async ()=>{
    const params=new URLSearchParams(window.location.search);//globale obj
    const id =params.get('id');
    console.log(id);
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
}
getDAta();
const display=async ()=>{
    const data = await getDAta();
    const images =
        `
       <img src="${data.image}"/>
        `;
    const result =`<div class="productt">
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <spam>${data.price}</spam>
    </div>`
    document.querySelector(".productss").innerHTML=result;
    document.querySelector(".imagess").innerHTML=images;
}
display();
