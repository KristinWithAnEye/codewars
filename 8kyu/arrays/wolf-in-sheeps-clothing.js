/* CHALLENGE DESCRIPTION

Wolves have been reintroduced to Great Britain. You are a sheep farmer and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array.

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: There will always be exactly one wolf in the array.

Examples:
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/

// MY SOLUTION
function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf("wolf");
    if (wolfIndex === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    } else {
        return `Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!`;
    }
}

// OTHER SOLUTIONS
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf("wolf");
    return position === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

function warnTheSheep(q) {
    return q[q.length - 1] === "wolf" ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf("wolf") + 1)}! You are about to be eaten by a wolf!`;
}