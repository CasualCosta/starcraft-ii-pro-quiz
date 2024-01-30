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
        image: "src/assets/pro_images/hero_marine.png",
        xRange: [-2,1],
        yRange: [1,3]
    }
]
