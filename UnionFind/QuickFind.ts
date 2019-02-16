class QuickFindUF {
  private id: number[]

  constructor(n: number) {
    this.id = Array.from({ length: n }, (val, index) => index)
  }

  connected = (p: number, q: number): boolean => this.id[p] === this.id[q]

  union = (p: number, q:number): void => {
    const pid: number = this.id[p]
    const qid: number = this.id[q]

    this.id.forEach((val, index) => {
      if (val === pid) {
        this.id[index] = qid
      }
    })
  }
}
