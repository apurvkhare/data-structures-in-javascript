## Algorithms

### Floyd's Tortoise and Hare (Cycle Detection) Algorithm

#### Overview

Floyd's algorithm, also known as "cycle detection" or "tortoise and hare", finds a cycle in a sequence by using two pointers moving at different speeds.

#### Core Concept
- Tortoise: Moves 1 step at a time
- Hare: Moves 2 steps at a time
- When they meet, a cycle exists

#### The Algorithm (Two Phases):

#### 1. Cycle Detection Phase:

- Initialize both the tortoise and the hare to the start of the sequence (or list).
- Move the tortoise one step and the hare two steps at a time.
- Repeat this until the tortoise and hare meet at the same point. If they meet, a cycle exists. If the hare reaches the end of the sequence, there is no cycle.

#### 2. Cycle Start Finding Phase:

- Once the tortoise and hare meet, reset the tortoise to the beginning of the sequence.
- Keep the hare at the meeting point.
- Move both the tortoise and the hare one step at a time.
- The point where they meet again is the start of the cycle.

#### Mathematical Proof

#### 1. Distance Analysis

- Let distance to cycle start = x
- Let meeting point distance from cycle start = y
- Let cycle length = c
- When they meet:
    - Tortoise traveled: x + y
    - Hare traveled: x + y + nc (n rotations)
    - `2(x + y) = x + y + nc`
    - `x = nc - y`
    - `x = nc - c + c - y`
    - `x = (n - 1)c + (c - y)`
    - `(n - 1)c` is a multiple of cycle length
    - `(c - y)` is the distance from meeting point to cycle start

#### 2. Why Phase 2 Works

- Tortoise is y steps into cycle
- New pointer starts from beginning
- They meet after x steps at cycle start

```js
function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    slow2 = nums[0];
    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;
}