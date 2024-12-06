class GlobalScore{
    score = 0;

    addScore(nb: number): number {
        return this.score + nb;
    }

    getScore(): number {
        return this.score;
    }

    getScoreDiv() : JSX.Element {
        return (
            <div>
                <p>Score : {this.score}</p>
            </div>
        );
    }
}