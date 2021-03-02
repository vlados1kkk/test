let list = document.querySelector('.posts')


async function getResponse(){
    let response = await fetch('https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json')
    let content = await response.json()
    content=content.splice(0,116459)
    var keyBox = document.search.key;
    var val = keyBox.value;
     let key
     for (key in content){
       if(content[key].country == val) {
        let web = content[key].web_pages;
    list.innerHTML +=`
    <ul class="post">
         <div>ID-${[key]}</div>
        <a href="web">${content[key].href=web}</a>
        <div>${content[key].name}</div>
        <div>${content[key].alpha_two_code}</div>
        <div>${content[key].domains}</div>
         <div>${content[key].country}</div>
        </ul>
        
`}

     }
}

function del(){
    location.reload()
}






