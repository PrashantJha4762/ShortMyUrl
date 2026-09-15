const BASE62_CHARSET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export  function toBase62(num:number):string{
    if(num===0) return '0';
    let result="";
    let n=num;
    while(n>0){
        const remainder = n % 62;
        const char = BASE62_CHARSET[remainder];
        result+=char;
        n=Math.floor(n/62);
    }
    return result.split('').reverse().join('');
}

export function fromBase62(str:string):number{
    let result=0;
    for(let i=0;i<str.length;i++){
        const char=str[i]||str.charAt(i);
        const index=BASE62_CHARSET.indexOf(char);
        if(index===-1){
            throw new Error(`Invalid character '${char}' in base62 string`);
        }
        result=result*62+index;
    }
    return result;
}