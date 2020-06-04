//What if someone asked you to figure out why the below code was not working? What steps would you take?

    const flattened = [[0,1], [2,3], [4,5]].reduce(
        (a,b) => a.concat(b), []
    );

//read through the code: we have a few nested arrays in a larger array. we know that in reduce, a = accummulator and b is our nested arrays: [0,1], [2,3], [4,5] since we are looping over our first array. to make it make more sense, change the syntax:

    const flattened = [[0,1], [2,3], [4,5]].reduce(
        (accummulator,array1) => accummulator.concat(array1), []
    );

//our accumulator will start with an empty array, since that is what reduce syntax denotes (check out 17. Advanced Arrays). And our concat will place the things in our accumulator into a new array. 

//we can open up our function and see what we are looking at:
    const flattened = [[0,1], [2,3], [4,5]].reduce(
        (accummulator,array1) => {
            console.log(accummulator);
            console.log(array1);
            return accummulator.concat(array1)}, []
        );
//making sure that we use return, since this is now a multistep function. This console.log will let us see what is happening and give us a better idea... BUT there's a more detailed way of doing it
    const flattened = [[0,1], [2,3], [4,5]].reduce(
        (accummulator,array1) => {
            debugger;
            return accummulator.concat(array1)}, []
        );
//our debugger will open up a new window and let us run through our function step by step. use the step-over to move through the steps. (it also gives us our scope!)