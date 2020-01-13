let canvas = document.querySelector("canvas")

let c = canvas.getContext("2d")
c.lineWidth= 3
//Najvisi deo krova
c.beginPath()
c.strokeStyle ="black"
c.moveTo(700,50)
c.lineTo(550,200)
c.lineTo(850,200)
c.lineTo(700,50)
c.stroke()
//Levo krilo
c.beginPath()
c.moveTo(200,450)
c.lineTo(600,450)
c.lineTo(400,250)
c.lineTo(200,450)
c.stroke()
//Desno krilo
c.beginPath()
c.moveTo(800,450)
c.lineTo(1200,450)
c.lineTo(1000,250)
c.lineTo(800,450)
c.stroke()
//Pravougaonik ispod najviseg dela
c.beginPath()
c.strokeRect(525,200,350,25)
//Pravougaonik ispod levog krila
c.beginPath()
c.strokeRect(175,450,450,25)
//Pravougaonik ispod desnog krila
c.beginPath()
c.strokeRect(775,450,450,25)
//Kvadrad ispod levog krila sa krugovima
c.strokeRect(200,475,400,250)

for(i = 0; i < 7; i++) {
    for(j = 0; j < 5; j++) {
        c.beginPath()
        c.arc(250+i*50, 500+j*50, 10, 0, Math.PI*2, false)
        c.stroke()
    }
}
//Kvadrat ispod desnog krila sa kvadraticima
c.strokeRect(800,475,400,250)

for(i = 0;i < 4;i++) {
    for(j = 0;j < 2;j++) {
        c.beginPath()
        c.moveTo(825+i*100,550+j*100)
        c.lineTo(850+i*100,525+j*100)
        c.lineTo(875+i*100,550+j*100)
        c.lineTo(850+i*100,575+j*100)
        c.lineTo(825+i*100,550+j*100)
        c.stroke()
    }
}
//Pravougaonici ispod Kvadrata l i d krila
for(i = 0; i < 2; i++) {
    c.beginPath()
    c.strokeRect(200+i*600,725,400,25)
}
