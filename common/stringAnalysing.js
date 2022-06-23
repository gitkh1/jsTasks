const path = "/users/download/index.html";
const requiredExt = '.html';

const isMatch = (path, requiredExt) => {
    const lastSymbolsOfPath = path.slice(path.length - requiredExt.length, path.length);

    return (lastSymbolsOfPath == requiredExt);
}





console.log(isMatch(path, requiredExt));