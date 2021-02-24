var busqueda = null;
var status = null;
var pinturas = [];


function sub(){
    busqueda = document.getElementsByName("buscador")[0].value;
    //alert(busqueda);
    var pintura = "https://www.wikiart.org/en/App/Painting/MostViewedPaintings?offset=0&quantity=1&limit=1&randomSeed=123&json=1";
    //url https://www.wikiart.org/en/search/dali/1?json=1
    fetch(pintura)
        .then(response => {
            if (response.ok)
            return response.json()
            else
            throw new Error(response.status);
        })
        .then(data => {
            imprimirImagenes(data);
        })
        .catch(err => {
            console.error("ERROR: ", err.message)
        });

};

function imprimirImagenes(data){
    for(var i=0;i<data.length;i++){
        pinturas[i] = data[i].image;
        console.log(pinturas[i]);
    }
}

var num = 0;
function adelante(){
    num++;
    if(num>pinturas.length)
        num = 0;
    
    var marco = document.getElementById("marco");
    marco.src = pinturas[num];      
}

function atras(){
    num--;
    if(num<0)
        num = pinturas.length;
    
    var marco = document.getElementById("marco");
    marco.src = pinturas[num];      
}


















/*

title: Painting title
artistName: Name of artist
artistContentId: id of artist
completitionYear: int
yearAsString: string (could be “1957”, “1955-1957”, etc)
width: original image width
height: original image height
image: path to Large thumbnail
contentId: id of painting, int
artistContentId: id of artist, int

*/




/*fetch('https://reqres.in/api/users')
    .then(res => {
        if(res.ok){
            console.log('SUCCESS')
        }else{
            console.log('NOT SUCCESS')
        }
        res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))*/