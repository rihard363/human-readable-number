module.exports = function toReadable(number) {
    switch (number) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
        case 20:
            return "twenty";
        case 30:
            return "thirty";
        case 40:
            return "forty";
        case 50:
            return "fifty";
        case 60:
            return "sixty";
        case 70:
            return "seventy";
        case 80:
            return "eighty";
        case 90:
            return "ninety";
        case 100:
            return "one hundred";
        case 200:
            return "two hundred";
        case 300:
            return "three hundred";
        case 400:
            return "four hundred";
        case 500:
            return "five hundred";
        case 600:
            return "six hundred";
        case 700:
            return "seven hundred";
        case 800:
            return "eight hundred";
        case 900:
            return "nine hundred";
    }
    if (number < 100) {
        return (
            toReadable(Math.floor(number / 10) * 10) +
            " " +
            toReadable(number % 10)
        );
    }
    return (
        toReadable(Math.floor(number / 100) * 100) +
        " " +
        toReadable(number % 100)
    );
};
