class QuickUnionImprovementsUF {
  private id: number[]
  private sz: number[]

  constructor(n: number) {
    this.id = Array.from({ length: n }, (val, index) => index)
    this.sz = Array(n).fill(1)
  }

  private root = (i: number): number => {
    while (i !== this.id[i]) {
      // Path compression
      // Not completely flattening but just about as good in practice
      this.id[i] = this.id[this.id[i]]
      i = this.id[i]
    }
    return i
  }

  connected = (p: number, q: number): boolean => this.root(p) === this.root(q)

  union = (p: number, q: number): void => {
    let i: number = this.root(p)
    let j: number = this.root(q)

    if (i === j) {
      return
    }

    // Weighting
    if (this.sz[i] > this.sz[j]) {
      [i, j] = [j, i]
    }

    this.id[i] = j
    this.sz[j] += this.sz[i]
  }
}
