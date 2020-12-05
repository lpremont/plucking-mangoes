class Stone extends BaseClass {
    constructor(x, y) {
        super(x, y, 35/2, 110/2,{
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        },stoneImage)
    }

}