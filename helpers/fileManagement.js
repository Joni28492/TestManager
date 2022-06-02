

const solutionsToArr = (txtSoluciones, arr) =>{
    for (let i = 0; i < txtSoluciones.length; i+=3) {
        arr.push(txtSoluciones[i]);   
    }
}


const questionSplitter = (textToSplit) =>{
    return textToSplit
            .split(/\d\d.-/g)
            .map( e => e.split(/\d.-/g) )
            .flat()
}

const questionToArrayChilds = (splittedQuestions, arrToFill) =>{
    for (let i = 1; i < splittedQuestions.length; i++) {   
        arrToFill.push(splittedQuestions[i].split(/\D\)/g));
    }
}

const questionsToJson = (questions, exam, solutions, details={}) =>{
    let count = 0;
    questions = questions.map( (q) =>{
        exam.push({
            pregunta: q[0], 
            a: q[1],    b: q[2],
            c: q[3],    d: q[4],
            ...details,
            solucion: solutions[count++]
        })
        
    } )
}

module.exports = {
    solutionsToArr,
    questionSplitter,
    questionToArrayChilds,
    questionsToJson,
}