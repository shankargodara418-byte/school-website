
async function searchResult(){
let r=roll.value;
let {data}=await db.from('results').select('*').eq('roll',r);
output.innerHTML=data&&data.length?data[0].name+" "+data[0].marks:"Not Found";
}
