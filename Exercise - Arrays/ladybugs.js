function ladybugs(arr) {

  let fieldSize = Number(arr[0]);
  let initialPositions = arr[1].split(' ').map(Number);
  let commands = arr.slice(2);
  let field = Array(fieldSize).fill(0);

  for (let index of initialPositions) {
    if (index >= 0 && index < fieldSize) {
      field[index] = 1;
    }
  }

  for (let command of commands) {
    let [startIndexStr, direction, flyLengthStr] = command.split(' ');
    let startIndex = Number(startIndexStr);
    let flyLength = Number(flyLengthStr);

    if (startIndex < 0 || startIndex >= fieldSize || field[startIndex] !== 1) {
      continue;
    }

    field[startIndex] = 0;

    if (flyLength < 0) {
      flyLength = Math.abs(flyLength);
      direction = direction === 'right' ? 'left' : 'right';
    }

    let position = startIndex;

    while (true) {
      position += direction === 'right' ? flyLength : -flyLength;

      if (position < 0 || position >= fieldSize) {
        break;
      }

      if (field[position] === 0) {
        field[position] = 1;
        break;
      }
    }
  }

  console.log(field.join(' '));
}

ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([ 5, '3', '3 left 2', '1 left -2']);