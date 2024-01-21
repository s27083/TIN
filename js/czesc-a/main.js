
//zad1
function isPythagoreanTriple(a, b, c) {
    // Sortujemy liczby od najmniejszej do największej
    const sortedNumbers = [a, b, c].sort((x, y) => x - y);

    // Sprawdzamy warunek trójkąta pitagorejskiego
    return sortedNumbers[0] ** 2 + sortedNumbers[1] ** 2 === sortedNumbers[2] ** 2;
}

//zad2
function printNumbersInRangeDivisibleBy(a, b, c) {
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}

//zad3 
function printMultiplicationTable(size) {
    for (let i = 1; i <= size; i++) {
        let row = '';
        for (let j = 1; j <= size; j++) {
            row += (i * j) + ' ';
        }
        console.log(row);
    }
}

//zad4
function printFibonacciSequence(length) {
    let sequence = [0, 1];
    for (let i = 2; i < length; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    console.log(sequence);
}

//zad5
function choinka(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= height - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}
//zad6
function choinkaNocna(height) {
    for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < height - i - 1; j++) {
            row += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            row += '*';
        }
        for (let j = 0; j < height - i - 1; j++) {
            row += ' ';
        }
        console.log(row);
    }
    // Draw the trunk of the tree
    let trunk = '';
    for (let i = 0; i < height - 1; i++) {
        trunk += ' ';
    }
    trunk += '|';
    console.log(trunk);
}
//zad7
function rectangleArea(dimensions) {
    return dimensions.width * dimensions.height;
}

function trapezoidArea(dimensions) {
    return ((dimensions.base1 + dimensions.base2) / 2) * dimensions.height;
}

function parallelogramArea(dimensions) {
    return dimensions.base * dimensions.height;
}

function triangleArea(dimensions) {
    return (dimensions.base * dimensions.height) / 2;
}

function calculateArea(shape, dimensions) {
    switch (shape) {
        case 'rectangle':
            return rectangleArea(dimensions);
        case 'trapezoid':
            return trapezoidArea(dimensions);
        case 'parallelogram':
            return parallelogramArea(dimensions);
        case 'triangle':
            return triangleArea(dimensions);
        default:
            throw new Error(`Unknown shape: ${shape}`);
    }
}
//zad8

const rectangleArea = dimensions => dimensions.width * dimensions.height;
const trapezoidArea = dimensions => ((dimensions.base1 + dimensions.base2) / 2) * dimensions.height;
const parallelogramArea = dimensions => dimensions.base * dimensions.height;
const triangleArea = dimensions => (dimensions.base * dimensions.height) / 2;

const shapeCalculators = {
    rectangle: rectangleArea,
    trapezoid: trapezoidArea,
    parallelogram: parallelogramArea,
    triangle: triangleArea
};

function calculateArea(shape, dimensions) {
    const calculator = shapeCalculators[shape];
    if (!calculator) {
        throw new Error(`Unknown shape: ${shape}`);
    }
    return calculator(dimensions);
}

//zad9
function printPascalTriangle(height) {
    let triangle = [[1]];
    for (let i = 1; i < height; i++) {
        let newRow = [1];
        for (let j = 0; j < triangle[i - 1].length - 1; j++) {
            newRow.push(triangle[i - 1][j] + triangle[i - 1][j + 1]);
        }
        newRow.push(1);
        triangle.push(newRow);
    }
    for (let row of triangle) {
        console.log(row.join(' '));
    }
}

//zad10

function censor(forbiddenWords, sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (forbiddenWords.includes(words[i])) {
            words[i] = '*'.repeat(words[i].length);
        }
    }
    return words.join(' ');
}