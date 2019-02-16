class QuickFindUF {
  private id: number[]
  constructor(n: number) {
    this.id = Array.from({ length: n }, (_, index) => index)
  }
}
