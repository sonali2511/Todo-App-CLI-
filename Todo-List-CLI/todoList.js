const chalk=require("chalk");
const figlet=require("figlet");
const readline=require("readline");

console.log(chalk.blueBright(figlet.textSync("Tasker")));
const reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:">"
});
var storage=[];
reader.prompt();
var cmd;
reader.on("line",function(data){
    cmd=data.split(" ")[0];
    const dataArr=data.split(" ");
    dataArr.shift();
    var task=dataArr.join(" ");

    if(cmd=="help"){
        console.log(chalk.green("Available Commands:"));
        console.log(chalk.cyan("add task name"));
        console.log(chalk.magenta("ls(to list all task)"));
        console.log(chalk.yellow("delete id(enter task id to delete it"));
    
    }
    else if(cmd=="add" && task.length>0){
        storage.push(task);
        console.log(chalk.green(task+" added"));
    }
    else if(cmd=="delete" && task.length>0){
        const id=task.split(" ")[0];
        console.log(id);

        storage.splice(id-1,1);
        console.log(chalk.red("one task deleted"));
    }
    else if(cmd=="ls"){
        console.log(chalk.yellowBright("Tasks"));
        for(let i=0;i<storage.length;i++){
            console.log(`${i+1} ${storage[i]}`);    
        }
    }
    else{
        console.log(chalk.magenta("wrong command"));
    }
    reader.prompt();
});


reader.on("close",function(){
    console.log("thank you");
})

