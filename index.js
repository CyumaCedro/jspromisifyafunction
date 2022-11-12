function promisify(f, change = true) {
    if (change) {
        return function (...args) { // return a wrapper-function (*)
            return new Promise((resolve, reject) => {
                function callback(err, result) { // our custom callback for f (**)
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }

                args.push(callback); // append our custom callback to the end of f arguments

                f.call(this, ...args); // call the original function
            });
        };
    } else {
        return function (...args) { // return a wrapper-function (*)
            // append our custom callback to the end of f arguments

            f.call(this, ...args); // call the original function

        };
    }
}
//Example
function add(a, b) {
    setTimeout(() => {
        console.log(a + b);
    }, 1000)

}
promisify(add(2, 3), change = false)
promisify(add(2, 3), change = false)
