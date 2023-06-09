function toggler(...values) {
    let index = 0;

    return function() {
        const value = values[index];
        index = (index + 1) % values.length;
        console.log(value);
    };
}

const toggle = toggler(1, 2, 3);

toggle();
// 1
toggle();
// 2
toggle();
// 3