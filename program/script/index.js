document.getElementById('sampleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var pwd = document.getElementById('pwd').value;
    var pwdRepeat = document.getElementById('pwd-repeat').value;

    if (pwd !== pwdRepeat) {
        document.getElementById('error').textContent = 'Passwords do not match.';
        return;
    }

    
    document.getElementById('error').textContent = '';
    document.getElementById('success').textContent = 'Form submitted successfully!';

    
    var formData = new FormData(this);
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ': '+ pair[1]); 
    }
});

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

console.log(getFactorial(5)); 
console.log(getFactorial('5')); 
console.log(getFactorial('blabla')); 

function multiply(n) {
    const f = function(x) {
        return multiply(n * x);
    };
    f.valueOf = function() {
        return n;
    };
    return f;
}

console.log(multiply(2)(3)(10));
console.log(multiply(-1)(677)(568)(2)); 
console.log(multiply(3)); 