//fetch function used for making HTTP request to fetch resources.(json style data, images, files) simplifies asynchronus data fetching in .js and used for interacting with APIs to retrieve and send data asynchronously over the web. fetch(url,{options})//

const url="https://ugzptqatywysefonuqip.supabase.co/rest/v1/pokemon?select=*";

let apikey="sb_publishable_ZWjqW3COEer1uXsuk99qyw_35SUmsgM";
const pokemonName="";


async function fetchData() {

    try{

        let response=await fetch(url,{
            method:"GET",
            headers:{
                apikey:apikey,
                Authoroization:`Bearer ${apikey}`
            }  
            

        });
            if(!response.ok){
                throw new Error("could not fetch info");

            }
            let data= await response.json();
            console.log(data);
            displayPokemon(data);

    }
    catch(error){
        console.error(error);
    };
    
}
//added eventlisten listens for page to load, runs fetchData//
addEventListener("DOMContentLoaded",fetchData);
//this function displays my supabase table//
 function displayPokemon(data){
    let displayPokemon= document.getElementById("displayPokemon");
    //loops through the data //
    data.forEach(item => {
        
     displayPokemon.innerHTML+=`
     <div class="col">
     <div class="card" style="width: 18rem;">
  <img src=${item.imageURL} class="card-img-top" alt=${item.Name}>
  <div class="card-body">
    <h5 class="card-title">${item.Name}</h5>
    
    
  </div>
</div>
</div>`   
    });
 }