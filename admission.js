
async function saveData(e){
e.preventDefault();
await db.from('students').insert([{name:name.value,class:cls.value}]);
alert("Saved");
}
