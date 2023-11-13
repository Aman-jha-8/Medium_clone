setTimeout(
    function() {
        console.log('Hello World!');
        for (let i = 0; i < 6; i++) {
            (function (index) {
                setTimeout(
                    function () {
                        console.log(index,i);
                    },
                    1000
                );
            })(i);
        }
    },
    1
);
