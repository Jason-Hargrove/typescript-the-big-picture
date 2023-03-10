class Artist {
  name: string

  constructor(name: string) {
    this.name = name
  }

  announce() {
    return 'Hello, my name is ' + this.name
  }
}
