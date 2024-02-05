export type Pro = {
    name: string
    title: string
    image: string
    xRange: [number, number] //-10 - +10
    yRange: [number, number] //-10 - +10
}

export const pros: Pro[] = [
    {
        name: "Hero Marine",
        title: "Big Gabe",
        image: "./pro_images/hero_marine.png",
        xRange: [-2,1],
        yRange: [1,3]
    },
    {
        name: "Oliveira",
        title: "A Normal Man",
        image: "./pro_images/oliveira.jpg",
        xRange: [-10,-2],
        yRange: [1,3]
    },
    {
        name: "Parting",
        title: "The Big Boi",
        image: "./pro_images/parting.png",
        xRange: [-10, 10],
        yRange: [-10, 10]
    },
    {
        name: "Reynor",
        title: "The Italian Stallion",
        image: "./pro_images/reynor.png",
        xRange: [-2,1],
        yRange: [1,3]
    },
    {
        name: "Serral",
        title: "The Finnisher",
        image: "./pro_images/serral.png",
        xRange: [-2,1],
        yRange: [1,3]
    },
    {
        name: "TY",
        title: "The Chessmaster",
        image: "./pro_images/ty.png",
        xRange: [-2,1],
        yRange: [1,3]
    },
    {
        name: "Zest",
        title: "The Wild Card",
        image: "./pro_images/zest.png",
        xRange: [-2,1],
        yRange: [1,3]
    }
]
