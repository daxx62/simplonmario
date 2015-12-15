// appel du fichier + variable

var c = document.getElementById( "simplonLogo" );
var ctx = c.getContext("2d");
ctx.lineWidth = 20;

// Cercle externe //

ctx.beginPath()
ctx.arc(200,200,100,0,Math.PI*2,true);
ctx.strokeStyle = "rgb(12, 127, 221)";   // couleur bordure
ctx.fillStyle = "white";   // couleur fond
ctx.fill();
ctx.stroke();

// carré haut milieu

ctx.fillStyle = "rgb(12, 127, 221)";
ctx.fillRect(187,170,25,25);


// carré bas milieu

ctx.fillStyle = "rgb(12, 63, 149)";
ctx.fillRect(187,210,25,25);

// MARIO
// W850 H850



// couleur : Marron rgb(102, 59, 8);
// couleur beige : rgb(217, 179, 115);

var c = document.getElementById( "mario" );
var ctx = c.getContext("2d");
ctx.lineWidth = 20;

// 1ere Ligne

ctx.fillStyle = "red";
ctx.fillRect(100,0,25,25);
ctx.fillStyle = "red";
ctx.fillRect(125,0,25,25);
ctx.fillStyle = "red";
ctx.fillRect(150,0,25,25);
ctx.fillStyle = "red";
ctx.fillRect(175,0,25,25);
ctx.fillStyle = "red";
ctx.fillRect(200,0,25,25);

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(275,0,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(300,0,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(325,0,25,25);





// 2eme Ligne

ctx.fillStyle = "red";
ctx.fillRect(75,25,25,25);
ctx.fillStyle = "red";
ctx.fillRect(100,25,25,25);
ctx.fillStyle = "red";
ctx.fillRect(125,25,25,25);
ctx.fillStyle = "red";
ctx.fillRect(150,25,25,25);
ctx.fillStyle = "red";
ctx.fillRect(175,25,25,25);
ctx.fillStyle = "red";
ctx.fillRect(200,25,25,25);
ctx.fillStyle = "red";
ctx.fillRect(225,25,25,25);
ctx.fillStyle = "red";
ctx.fillRect(250,25,25,25);
ctx.fillStyle = "red";
ctx.fillRect(275,25,25,25);

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(300,25,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(325,25,25,25);




// 3eme Ligne

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(75,50,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(100,50,25,25)
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(125,50,25,25)

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(150,50,25,25)
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(175,50,25,25)

ctx.fillStyle = "black";
ctx.fillRect(200,50,25,25)

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(225,50,25,25)


ctx.fillStyle = "red";
ctx.fillRect(275,50,25,25)
ctx.fillStyle = "red";
ctx.fillRect(300,50,25,25)
ctx.fillStyle = "red";
ctx.fillRect(325,50,25,25)



// 4eme Ligne

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(50,75,25,25);

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(75,75,25,25);

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(100,75,25,25);

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(125,75,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(150,75,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(175,75,25,25);

ctx.fillStyle = "black";
ctx.fillRect(200,75,25,25);

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(225,75,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(250,75,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(275,75,25,25);

ctx.fillStyle = "red";
ctx.fillRect(300,75,25,25);
ctx.fillStyle = "red";
ctx.fillRect(325,75,25,25);



// 5eme Ligne


ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(50,100,25,25);

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(75,100,25,25);

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(100,100,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(125,100,25,25);

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(150,100,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(175,100,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(200,100,25,25);

ctx.fillStyle = "black";
ctx.fillRect(225,100,25,25);

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(250,100,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(275,100,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(300,100,25,25);

ctx.fillStyle = "red";
ctx.fillRect(325,100,25,25);

// 6em Ligne

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(50,125,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(75,125,25,25);

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(100,125,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(125,125,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(150,125,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(175,125,25,25);

ctx.fillStyle = "black";
ctx.fillRect(200,125,25,25);
ctx.fillStyle = "black";
ctx.fillRect(225,125,25,25);
ctx.fillStyle = "black";
ctx.fillRect(250,125,25,25);
ctx.fillStyle = "black";
ctx.fillRect(275,125,25,25);

ctx.fillStyle = "red";
ctx.fillRect(300,125,25,25);




// 7eme Ligne

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(100,150,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(125,150,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(150,150,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(175,150,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(200,150,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(225,150,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(250,150,25,25);

ctx.fillStyle = "red";
ctx.fillRect(275,150,25,25);
ctx.fillStyle = "red";
ctx.fillRect(300,150,25,25);



// 8eme  Ligne

ctx.fillStyle = "red";
ctx.fillRect(25,175,25,25);
ctx.fillStyle = "red";
ctx.fillRect(50,175,25,25);
ctx.fillStyle = "red";
ctx.fillRect(75,175,25,25);
ctx.fillStyle = "red";
ctx.fillRect(100,175,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(125,175,25,25);
ctx.fillStyle = "red";
ctx.fillRect(150,175,25,25);
ctx.fillStyle = "red";
ctx.fillRect(175,175,25,25);
ctx.fillStyle = "red";
ctx.fillRect(200,175,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(225,175,25,25);
ctx.fillStyle = "red";
ctx.fillRect(250,175,25,25);
ctx.fillStyle = "red";
ctx.fillRect(275,175,25,25);

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(350,175,25,25);




// 9eme Ligne


ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(-25,200,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(0,200,25,25);

ctx.fillStyle = "red";
ctx.fillRect(25,200,25,25);
ctx.fillStyle = "red";
ctx.fillRect(50,200,25,25);
ctx.fillStyle = "red";
ctx.fillRect(75,200,25,25);
ctx.fillStyle = "red";
ctx.fillRect(100,200,25,25);
ctx.fillStyle = "red";
ctx.fillRect(125,200,25,25);

ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(150,200,25,25);

ctx.fillStyle = "red";
ctx.fillRect(175,200,25,25);
ctx.fillStyle = "red";
ctx.fillRect(200,200,25,25);
ctx.fillStyle = "red";
ctx.fillRect(225,200,25,25);

ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(250,200,25,25);


ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(350,200,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(325,200,25,25);
console.log(mario);

// 10 EME ligne debut pantalon

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(0,225,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(0,225,25,25);
ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(25,225,25,25);

ctx.fillStyle = "red";
ctx.fillRect(50,225,25,25);
ctx.fillStyle = "red";
ctx.fillRect(75,225,25,25);
ctx.fillStyle = "red";
ctx.fillRect(100,225,25,25);
ctx.fillStyle = "red";
ctx.fillRect(125,225,25,25);

ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(150,225,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(175,225,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(200,225,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(225,225,25,25);

ctx.fillStyle = "yellow";
ctx.fillRect(250,225,25,25);

ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(275,225,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(300,225,25,25);

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(325,225,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(350,225,25,25);



// 11eme Ligne

ctx.fillStyle = "rgb(217, 179, 115)";
ctx.fillRect(0,250,25,25);

ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(75,250,25,25);

ctx.fillStyle = "red";
ctx.fillRect(100,250,25,25);

ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(125,250,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(150,250,25,25);

ctx.fillStyle = "yellow";
ctx.fillRect(175,250,25,25);

ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(200,250,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(225,250,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(250,250,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(275,250,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(300,250,25,25);

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(325,250,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(350,250,25,25);


// 12eme Ligne

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(25,275,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(50,275,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(75,275,25,25);

ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(100,275,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(125,275,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(150,275,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(175,275,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(200,275,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(225,275,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(250,275,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(275,275,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(300,275,25,25);

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(325,275,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(350,275,25,25);


// 13 eme Ligne

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(0,300,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(25,300,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(50,300,25,25);

ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(75,300,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(100,300,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(125,300,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(150,300,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(175,300,25,25);
ctx.fillStyle = "rgb(58, 59, 190)";
ctx.fillRect(200,300,25,25);

// 14eme

ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(0,325,25,25);
ctx.fillStyle = "rgb(102, 59, 8)";
ctx.fillRect(25,325,25,25);


// bonus
