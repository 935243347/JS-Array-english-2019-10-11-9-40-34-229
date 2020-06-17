// The writer determines whether the following variables are of type array.
    var a = '[a, b, c, d]';
    var b = [1, 2, 3, 4];
    //TODO
    console.log('typeof a = '+typeof a);
    console.log('typeof b = '+typeof b);


    // Write a program that multiplies each entry in the following array by 2。
    var a = [1, 2, 3, 4, 5];
    // TODO should output [2,4,6,8,10]
    for(var i = 0; i < a.length; i++){
        a[i] = a[i]*2
    }
    console.log(a);


    // Write the program, according to the following requirements output results.
    var colors = ["Red", "Green", "White", "Black"];
    //TODO case 1 output: 'Red Green White Black'
    console.log(colors.join(' '));
    // case 2 output: 'Red+Green+White+Black'
    console.log(colors.join('+'));
    // case 3 output: 'Red,Green,White,Black'
    console.log(colors.join(','));


    // Write a program to sort the Numbers in the following array from largest to smallest.
    var a = [5, 1, 8, 10, 4];
    //TODO should output: [10,8,5,4,1]
    function quick_sort(list, l, r){
        if(l < r){
            var i = l;
            var j = r;
            var x = list[i];
            while(i < j) {
                while (i < j && a[j] <= x) {
                    j--;
                }
                if(i < j){
                    list[i] = list[j];
                    i++;
                }
                while (i < j && a[i] > x) {
                    i++;
                }
                if(i < j){
                    list[j] = list[i];
                    j--;
                }
            }
            list[i] = x;
            quick_sort(list, l, i-1);
            quick_sort(list, i+1, r);
        }
    }
    quick_sort(a, 0, a.length-1);
    console.log(a);


    // Program to find the most frequent element in the following array.
    var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    var tmp = {};
    //TODO should output: 'a'
    for(var i = 0; i < a.length; i++){
        tmp[a[i]] = tmp[a[i]]?tmp[a[i]]+1:1;
    }
    var maxCount = 0;
    var key;
    for(let t in tmp){
        if(tmp[t] > maxCount){
            maxCount = tmp[t];
            key = t;
        }
    }
    console.log(key)
