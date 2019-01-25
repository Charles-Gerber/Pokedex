export default class Pokemon {
  constructor(pokemonDetail) {
    console.log(`constructor with  : ${JSON.stringify(pokemonDetail)}`)

    const {
      id,
      name,
      types,
      likes,
      imageUrl,
      description,
      weight,
      height,
    } = pokemonDetail

    this.id = id
    this.name = name
    this.image = imageUrl
    this.types = types.map(type => type.type.name)
    this.description = description
    this.weight = weight
    this.height = height
    this.likesCount = likes
  }
}
