
async function add(){
await db.from('results').insert([{roll:r.value,name:n.value,marks:m.value}]);
alert("Added");
}
