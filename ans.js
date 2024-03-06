const q=[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]]

let ans=[];
let req=4;
for(let i=0;i<q.length;i++)
{
    const people=q[i][0].length;
    const seats=q[i][1];
    if(people<seats)
    {
        ans.push(Math.min(req,seats-people))
        req=req-ans[ans.length-1];
    }
    else
    {
        ans.push(0);
    }
    if(req===0)
    {
        break;
    }
}
console.log(ans);
