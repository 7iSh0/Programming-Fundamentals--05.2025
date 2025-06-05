function ladybugs(arr) {

    let size = arr[0];
    let ladybugs = new Array(size).fill(0);

    if (arr[1]) {
        let initialPositions = arr[1].split(' ').map(Number);
        for (let pos of initialPositions) {
            if (pos < size) {
                ladybugs[pos] = 1;
            }
        }
    }

    for (let i = 2; i < arr.length; i++) {
        let [index, direction, steps] = arr[i].split(' ');
        index = Number(index);
        steps = Number(steps);

        if (ladybugs[index] === 1) {
            ladybugs[index] = 0;

            if (direction === 'right') {
                index += steps;
            } else if (direction === 'left') {
                index -= steps;
            }

            if (index >= 0 && index < size) {
                while (ladybugs[index] === 1) {
                    if (direction === 'right') {
                        index += steps;
                    } else if (direction === 'left') {
                        index -= steps;
                    }
                    if (index < 0 || index >= size) break;
                }
                if (index >= 0 && index < size) {
                    ladybugs[index] = 1;
                }
            }
        }
    }

    console.log(ladybugs.join(' '));
}

ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([ 5, '3', '3 left 2', '1 left -2']);