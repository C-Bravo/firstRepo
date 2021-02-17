const scores = [100, 90, 90, 80, 75, 60];
const alice = [50, 65, 77, 90, 102];

res = climbingLeaderboard(scores, alice);
console.log(res);

function climbingLeaderboard(scores, alice) {
	var res = [];

	for (i = 0; i < alice.length; i++) {
		var j = 0;
		var rank = 1;
		var compare = true;

		while (compare) {
			if (alice[i] >= scores[j]) {
				compare = false;
			} else {
				if (scores[j] !== scores[j + 1]) {
					rank = rank + 1;
				}
				j++;
				if (j === scores.length) {
					compare = false;
				}
			}
		}
		res.push(rank);
	}

	return res;
}
