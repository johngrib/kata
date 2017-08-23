function toInt(number) {
    return parseInt(number, 10);
}

function bigger(a, b) {
    return (a > b) ? a : b;
}

var input = [];
input.push("                            75");
input.push("                          95  64");
input.push("                        17  47  82");
input.push("                      18  35  87  10");
input.push("                    20  04  82  47  65");
input.push("                  19  01  23  75  03  34");
input.push("                88  02  77  73  07  63  67");
input.push("              99  65  04  28  06  16  70  92");
input.push("            41  41  26  56  83  40  80  70  33");
input.push("          41  48  72  33  47  32  37  16  94  29");
input.push("        53  71  44  65  25  43  91  52  97  51  14");
input.push("      70  11  33  28  77  73  17  78  39  68  17  57");
input.push("    91  71  52  38  17  14  91  43  58  50  27  29  48");
input.push("  63  66  04  68  89  53  67  30  73  16  69  87  40  31");
input.push("04  62  98  27  23  09  70  98  73  93  38  53  60  04  23");

input = input
    .map((row) => row.trim())
    .map((row) => row.split('  '))
    .map((row) => row.map(toInt))
;

for(var i = 1; i < input.length; i++) {
    var parent = input[i-1];
    parent.unshift(0);
    parent.push(0);
    var row = input[i];

    for(var j = 0; j < row.length; j++) {
        var left = parent[j];
        var right = parent[j+1];
        var number = row[j];
        row[j] = number + ((left > right) ? left : right);
    }
}

var result = input.pop().reduce(bigger);

console.log(result);
