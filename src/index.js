module.exports = function reverse (n) {
if(!isNaN(n))
{
let m=0;
n=Math.abs(n);
while(n)
{
    m=m*10+n%10;
    n=Math.floor(n/10);
}
return m;
}
}
