const fns = {
    sum,
    res,
    mul,
    div,
    pow,
};

function sum(a, b) {
    return a + b;
}


function res(a, b) {
    return b - a;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    	if (b==0){
	alert ("Error: div by 0");
	}
	return a / b;
	// Tener en cuenta division por 0
    // Si b es 0 retornar "Error: div by 0"
}

function pow(a, b) {
    return a ** b;
}

module.exports = fns;


//commit xd