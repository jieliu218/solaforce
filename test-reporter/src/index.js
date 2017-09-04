export default function () {
    return {
        noColors: false,
        reportTaskStart (startTime, userAgents, testCount) {
            this.startTime = startTime;
            this.testCount = testCount;

            this.write(`Running tests in: ${userAgents}`)
                .newline()
                .newline();
        },

        reportFixtureStart (name) {
            this.currentFixtureName = name;
        },

        reportTestDone (name, errs) {
            const hasErr = !!errs.length;
            const result = hasErr ? `passed` : `failed`;

            name = `${this.currentFixtureName} - ${name}`;

            const title = `${result} ${name}`;

            this.write(title)
                .newline();
        },

        reportTaskDone (endTime, passed) {
            const durationMs  = endTime - this.startTime;
            const durationStr = this.moment
                .duration(durationMs)
                .format('h[h] mm[m] ss[s]');
            let footer = passed === this.testCount ?
                `${this.testCount} passed` :
                `${this.testCount - passed}/${this.testCount} failed`;

            footer += ` (Duration: ${durationStr})`;

            this.write(footer)
                .newline();
        }
    };
}
