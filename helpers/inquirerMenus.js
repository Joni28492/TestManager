const inquirer = require('inquirer')

// * OnlyExamples

const inquirerMenu = async() =>{
    console.clear();
    console.log("=============")
    console.log("Menu")
    console.log("=============")

    await inquirer.prompt([])
}


const preguntas = [
    {
        type: 'list',
        name:'opcion',
        message: 'que desea hacer',
        choices: ['opt1', 'opt2', 'opt3']
    }
]


module.exports = {
    inquirerMenu,
}