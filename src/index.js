const numberMap = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
};
const tenNumberMap = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
};

const toTenReadable = (number) => {
    return number[1] === '0' ? `${tenNumberMap[number[0]]}` : `${tenNumberMap[number[0]]} ${numberMap[number[1]]}`;
}

module.exports = function toReadable(number) {
    if (number <= 20) {
        return numberMap[number];
    }
    const str = number.toString();
    switch (str.length) {
        case 2:
            return toTenReadable(str);
        case 3:
            const rem = number % 100;
            const lastPart = rem < 20 ? numberMap[rem] : toTenReadable(rem.toString());
            return rem === 0 ? `${numberMap[str[0]]} hundred` : `${numberMap[str[0]]} hundred ${lastPart}`;
    }
}
