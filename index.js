var quote=[
{
qoute:"Success is not final, failure is not fatal.",
 Auther: "Winston Churchill"
},

 {
        qoute: "'The best revenge is massive success.'",
        Auther: "--Frank Sinatra"
    },
    {
        qoute: "'You miss 100% of the shots you don't take.'",
        Auther: "--Wayne Gretzy"
    },
{
    qoute:"Believe you can and you're halfway there.",
  Auther: 'Theodore Roosevelt'
},
    {
        qoute: "Do not take life too seriously. You will not get out alive.",
        Auther: "--Elbert Hubbard"
    },

    {
        qoute: "'The best revenge is massive success.'",
        Auther: "--Frank Sinatra"
    },
    {
        qoute: "'You miss 100% of the shots you don't take.'",
        Auther: "--Wayne Gretzy"
    },


]

function getQoutes(){

var num = Math.floor (Math.random () * quote.length)
 
    document.getElementById("quote").innerHTML = quote[num].qoute
    document.getElementById("auther").innerHTML = quote[num].Auther


}
