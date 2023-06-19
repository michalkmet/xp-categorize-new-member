# Notes

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans
- ⚠ TODO return exception when given incorrect data
- ⚠ TODO return ["Open"] when given [[20,20]]
- ⚠ TODO return ["Open"] when given [[20,0]]
- ⚠ TODO return ["Senior"] when given [[56,8]]
- ⚠ TODO return ["Open,Senior"] when given [[58,0][56,8]]
- ⚠ TODO return ["Open", "Open", "Senior", "Open", "Open", "Senior"] when given [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]