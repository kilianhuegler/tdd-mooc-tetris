export class Scoring {
  score = 0;

  linesRemoved(n) {
    const points = { 1: 40, 2: 100, 3: 300, 4: 1200 };
    this.score += points[n];
  }
}
