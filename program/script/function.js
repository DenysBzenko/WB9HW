function getFactorial(n) {
    if (typeof n === 'string') {
        n = parseInt(n);
        if (isNaN(n)) {
            return 'not a number';
        }
    }
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * getFactorial(n - 1);
    }
}

function multiply(n) {
    const f = function(x) {
        return multiply(n * x);
    };
    f.valueOf = function() {
        return n;
    };
    return f;
}

module.exports = { getFactorial, multiply }; // Експортуємо функції для використання в інших файлах
