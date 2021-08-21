function reverse (n) {
    //     let m=0;
    //   while(n)
    //   {
    //       m=m*10+n%10;
    //       n=Math.floor(n/10);
    //   }
    //   return m;
    
    
    if(isNaN(n))return 'vc';
    let m=0;
    while(n!=0)
    {
        m=m*10+n%10;
        n=Math.floor(n/10);
    }
    if(typeof m ==NaN) return'';
    return m;
    
    }
    console.log(reverse(''));
    