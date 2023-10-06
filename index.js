

function receivesAFunction(callback)
{
    return callback();
};
receivesAFunction();

function returnsANamedFunction(){
   const NamedFunction =()=>'';
    return NamedFunction;
} 


function returnsAnAnonymousFunction(){
    return function(){}
} 
