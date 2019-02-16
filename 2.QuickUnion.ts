class QuickUnionUF {
  private id: number[]

  constructor(n: number) {
    this.id = Array.from({ length: n }, (val, index) => index)
  }

  private root = (i: number): number => {
    while (i !== this.id[i]) {
      i = this.id[i]
    }
    return i
  }

  connected = (p: number, q: number): boolean => this.root(p) === this.root(q)

  union = (p: number, q: number): void => {
    const i: number = this.root(p)
    const j: number = this.root(q)
    this.id[i] = j
  }
}
