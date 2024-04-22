// Utilities to handle local storage. 

export const initAdmin = () => {
    localStorage.setItem('pass', 123)
}

export const checkAdmin = (num) => {
    const test = localStorage.getItem('pass')
    console.log(test, num)
    return localStorage.getItem('pass') === num ? true : false
}