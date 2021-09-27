/* Fill your code*/
document.getElementById('addBlog').addEventListener('click',function(){
    document.getElementById('popupContact').style.display="block";
    
    
    })
    document.getElementById('close').addEventListener('click',function(){
        document.getElementById('popupContact').style.display="none";
    })
class Blog {
    constructor(title, detail) {
        this.title = title;
        this.des = detail;

    }

    addTitle() {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }

    addDescription() {
        var des_card = document.createElement('p');
        des_card.setAttribute("id", "blog-description");
        console.log(des_card);
        document.getElementById('card-text').appendChild(des_card);
        des_card.innerHTML += this.des;
    }
}

let post=document.getElementById('post');
post.addEventListener('click',function(){
let image=document.createElement('img')
image.src='./assets/javascript.png';
image.setAttribute('id','image')
document.getElementById('card-text').appendChild(image);
let title=document.getElementById('title').value;
let detail=document.getElementById('detail').value;
var card=new Blog(title,detail)
card.addTitle()
card.addDescription()
})