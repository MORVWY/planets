export interface Planet {
  name: string,
  id: number
}

export interface Planets {
  name: string,
  id: number,
  description: string,
  basicDetails: {
    mass: string,
    volume: string
  },
  planetOrder: number,
  wikiLink: string,
  imgSrc: {
    img: string,
    imgDesc: string
  }
}
