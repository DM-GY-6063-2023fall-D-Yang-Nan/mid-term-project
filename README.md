# Mid-term-project

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