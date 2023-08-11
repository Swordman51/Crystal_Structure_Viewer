let x;
//consts can't be changed, but var and let can be changed
//let is the most recent way ot creating variables, you should use it whenever you can

//redeclaring a variable will not override its previous value (if you declared it with var)
// you can't redeclare variables that were created with let or const

//if there is even on string in addition, the rest of the numbers will be turned into strings and concatenated
//The concatenation will only happen at the first occurance of a quotation, so any number before will be added or subtracted as normal

//the dollar sign is used as a letter in java, professionals use it to represent the main function

// variables declared with let have block scope, meaning that if they are declared in a block, they can only be used in that block
//var variables have global scope, so they can be used anywhere, even if they're declard in a block
function displayX(){
    x = 10

}
