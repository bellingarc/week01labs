function helloWorld(language = 'en'){
    if (language.toLowerCase() == 'python'){
        console.log("print(hello World!)")
    }
    else if (language.toLowerCase() == "c++"){
        console.log("cout >> 'hello World!' >> endl;")
    }
    else if (language.toLowerCase() == "es"){
        console.log("hola mundo!")
    }
    else if (language.toLowerCase() == "en"){
        console.log("hello World!")
    }
    else {
        console.log("Not familiar with the langauge")
    }
}

helloWorld('python')
helloWorld('c++')
helloWorld()
helloWorld('es')
helloWorld("tolkienElvish")