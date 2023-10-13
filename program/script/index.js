document.addEventListener('DOMContentLoaded', (event) => {
    var pwd = document.getElementById('pwd');
    var pwdRepeat = document.getElementById('pwd-repeat');
    var passwordRules = document.querySelector('small');

    
    passwordRules.style.display = 'none';

    
    pwd.addEventListener('focus', function(event) {
        passwordRules.style.display = 'inline';
    });

    
    pwd.addEventListener('blur', function(event) {
        passwordRules.style.display = 'none';
    });

    document.getElementById('sampleForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var pwdValue = pwd.value;
        var pwdRepeatValue = pwdRepeat.value;

        if (pwdValue !== pwdRepeatValue) {
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