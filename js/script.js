function factorize(n){
    var factors = [];
    for(var i = 0; i<n;i++)
    {
        if(n%i==0)
        {
            factors.push(i);
        }
    }
    return factors;
}

function unique(n)
{
    var uniqueChars = "";

    for(var i =0;i<n.length; i++)
    {
        var found = false;
        for(var j = 0;j<uniqueChars.length;j++)
        {
            if(uniqueChars[j] == n[i])
            {
                found = true;
            }
        }
        if(!found)
        {
            uniqueChars =uniqueChars+n[i];
        }
    }
    return(uniqueChars);
}

function doOperation(x,y,operator)
{
    return operator(x,y);
}

function mult(x,y)
{
    return x*y;
}

function power(x,y)
{
    return Math.pow(x,y);
}