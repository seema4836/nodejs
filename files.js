const fs=require('fs')

try{
    const data=fs.readFileSync('test.html','utf-8');
       console.log(data)
  }catch(err){
     console.log(err)
 
  }

  
fs.writeFile('test.txt', 'This i an example of writefile', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});


fs.appendFile('mynewfile1.txt', 'Example of append file ??', function (err) {
    if (err) throw err;
    console.log('Saved!');
  })


 console.log("Reading file using sync method or blocking...")
 