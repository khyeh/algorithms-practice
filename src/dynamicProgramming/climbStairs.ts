type Memo = {
    [key: number]: number
}

function climbStairs(n: number, memo: Memo = {}): number {
    if (memo[n] != undefined) {
        return memo[n];
    }
    if (n === 0) {
        return 1;
    }
    if (n <= 0) {
        return 0;
    }
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};