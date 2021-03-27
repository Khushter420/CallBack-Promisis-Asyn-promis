const items=[
    { tittle:'post one',body:"this is post one body"},
        {  tittle:'post two',body:"this is post two body" }
];
function getitems(){
    setTimeout( ()=> {
        let output = '';
        items.forEach((post,index)=>{
                output += `<li> ${post.tittle}</li>`;
            });

            document.body.innerHTML=output;
    },1000);        
}
function createPost(post,callback)
{
    setTimeout(()=>{
        items.push(post);
       callback();
    },2000);
}
let ctr = 1

function time() {
  console.log(ctr++)
  setTimeout(1000) // set the next run
  }

createPost({ tittle:'post three',body:'this is post three'},getitems);
createPost({ tittle:'post four',body:'this is post three'},getitems);
time();