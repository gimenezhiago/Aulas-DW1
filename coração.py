import turtle

caneta= turtle.Turtle()

def curva():
    for i in range(200):
        caneta.right(1)
        caneta.forward(1)

def coração():
    caneta.fillcolor('red')
    caneta.begin_fill
    caneta.left(140)
    caneta.forward(113)
    curva()
    caneta.left(200)
    curva()
    caneta.forward(112)
    caneta.end_fill()

def texto():
    caneta.up()
    caneta.setpos(-68,95)
    caneta.down()
    caneta.color('lightgreen')
    caneta.write("geeksforgeeks", font=("verdana", 12, "bold"))

coração()
texto()

caneta.ht()
