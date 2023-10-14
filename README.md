# Mid-term-project_ Week05

I've chosen a film titled "Kikujiro," which is a Japanese movie directed by Takeshi Kitano. The story follows a middle school teacher named Kikujiro and his stepson, Masao. After the death of his wife, the two embark on a journey to find Masao's biological mother. Throughout this journey, they develop a deep bond and influence each other, growing together.

![D0U9bX.jpg](https://imgpile.com/images/D0U9bX.jpg)

For the film cover, I envision a train steadily progressing forward, with glimpses of summer landscapes through its windows. The train symbolizes their journey in search of the mother, while the scenes outside the windows capture the quintessential essence of summer.

![D0UDQE.jpg](https://imgpile.com/images/D0UDQE.jpg)

### Themes and Symbols:
The moving lotus leaves symbolize the passage of time and could also represent the speed of the train's journey. Initially appearing on the right side of the screen, they should gradually move to the left, mimicking the motion of a traveling train.
The arched lines in the background can be interpreted as the summer sun seen from the train's window.
The background can incorporate the sound of a train along with the film's most iconic music, "Summer."

### Interactive Elements:
When users click on the screen, the speed of the reed's movement could either increase or decrease, simulating the acceleration or deceleration of the train. (This may be a bit challenging but give it a try and experiment.)

### Temporal Elements:
The landscape outside the window would change in brightness based on real-world time, being luminous during the day and gradually darkening as night approaches.

### Technical Aspects:
Use arrays to store and manage all the lotus leaf objects.
Define the lotus leaves using functions, with each leaf having its own attributes such as position and speed.
Within the draw() function, iterate through all the lotus leaves, update their positions, and render them on the screen.

### Pseudocode：

function Reed {
    // Properties for position, velocity, etc.
    // Methods to display and update position
}

let reeds = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Initially generate a certain number of reeds
    for (let i = 0; i < 100; i++) {
        reeds.push(new Reed());
    }
}

function draw() {
    background(220);  // Background color
    // Update and display all reeds
    for (let reed of reeds) {
        reed.update();
        reed.display();
    }
}

function mousePressed() {
    // When the mouse is clicked, increase or decrease the movement speed of the reeds
}


# Mid-term-project_ Week06
代码将由四个部分组成
1.向前移动的荷叶
2.鼠标按下去的时候荷叶渐渐停止，鼠标松开时渐渐恢复原速
3.天空颜色是一个渐变色，竖向渐变，12点时是顶端rgb（189,231,242）—底端rgb（255），24点时是顶端rgb（12,26,53）—底端rgb（31,74,109）
4.一个发射光芒的太阳
5.车窗和车内物品

下面是更详细的伪代码
Declare image img and basic animation variables;

// Sky color settings
Declare startColorTop, endColorTop, startColorBottom, endColorBottom;

Function preload():
    Load image from '2222.png' into img;

Function initialize():
    Create canvas;
    Set basic stroke and fill properties;
    Initialize the starting and ending colors for the sky;

Function draw():
    // Sky background
    Get the current hour;
    Determine the sky color gradient based on the hour;
    Call the gradient background drawing function;

    // Sun
    Move to the center of the screen;
    Draw random arcs as sun rays;

    // Leaf animation
    Move back to the origin;
    Display leaf images based on position and speed;
    Update the position of the leaves;
    Adjust speed based on mouse state;

    // Window
    Draw an outer large rectangle and an inner smaller rectangle;

    // (Commented out) Text display
    // Display "菊次郎の夏" at a specific position;

Function drawGradientBackground(c1, c2):
    Draw a vertical gradient on the canvas using colors c1 and c2;

为了先测试可行性，我先用比较简单的图形在p5js中实现我想要的效果

![DFS8Rk.png](https://imgpile.com/images/DFS8Rk.png)
测试天空颜色随时间变化

![DFSVfM.png](https://imgpile.com/images/DFSVfM.png)
测试荷叶向前移动效果

![DFSXF4.png](https://imgpile.com/images/DFSXF4.png)
然后我在illustrator中画出简易的荷叶的形状，测试能否成功

![DFSou2.png](https://imgpile.com/images/DFSou2.png)
然后更改了荷叶的形状以及添加了天空的颜色