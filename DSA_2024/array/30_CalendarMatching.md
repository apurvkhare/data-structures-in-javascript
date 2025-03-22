## [Calendar Matching](https://leetcode.ca/all/1229.html)

Imagine that you want to schedule a meeting of a certain duration with a co-worker. You have access to your calendar and your co-worker's calendar (both of which contain your respective meetings for the day, in the form of [startTime, endTime]), as well as both of your daily bounds (i.e., the earliest and latest times at which you're available for meetings every day, in the form of [earliestTime, latestTime]).

Write a function that takes in your calendar, your daily bounds, your co-worker's calendar, your co-worker's daily bounds, and the duration of the meeting that you want to schedule, and that returns a list of all the time blocks (in the form of [startTime, endTime]) during which you could schedule the meeting, ordered from earliest time block to latest.

Note that times will be given and should be returned in military time. For example: 8:30, 9:01, and 23:56.

Also note that the given calendar times will be sorted by start time in ascending order, as you would expect them to appear in a calendar application like Google Calendar.

```
## Sample Input
calendar1 = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
dailyBounds1 = ['9:00', '20:00']
calendar2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
dailyBounds2 = ['10:00', '18:30']
meetingDuration = 30

## Sample Output
[['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']]
```

```js
/*
1.Calendar Update Process (updateCalendar):

Adds boundary times to each calendar (starts at 00:00, ends at 24:00)
Converts all time strings to minutes for easier calculation
Example: "9:30" → 570 minutes (9 * 60 + 30)


2.Calendar Merging (mergeCalendars):

Combines both calendars into a single sorted list
Uses two pointers (c1, c2) to compare and merge meetings
Maintains chronological order based on start times
Includes remaining meetings from whichever calendar is longer


3.Calendar Flattening (flattenCalendar):

Combines overlapping time slots
For each meeting slot:

If it overlaps with previous slot, merges them
If no overlap, adds as new slot

Result is a list of non-overlapping busy periods


4.Finding Available Slots (getCommonAvailabilities):

Looks at gaps between busy periods
Checks if gap is long enough for requested meeting duration
Converts times back to string format (HH:MM)
Returns all valid time slots for the meeting
*/

function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
  // Write your code here.
  const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1)
  const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2)
  const mergedCalendars = mergeCalendars(updatedCalendar1, updatedCalendar2)
  const flattenedCalendar = flattenCalendar(mergedCalendars)
  return getCommonAvailabilities(flattenedCalendar, meetingDuration)
}

function updateCalendar(calender, dailyBounds) {
  const updatedCalendar = [['00:00', dailyBounds[0]], ...calender, [dailyBounds[1], '24:00']]
  return updatedCalendar.map(meeting => meeting.map(timeInMinutes))
}

function timeInMinutes(time) {
  let [hours, minutes] = time.split(':').map(str => parseInt(str))
  return hours * 60 + minutes
}

function mergeCalendars(calendar1, calendar2) {
  let c1 = 0
  let c2 = 0
  let mergedCalendars = []
  
  while (c1 < calendar1.length && c2 < calendar2.length) {
    const meeting1 = calendar1[c1]
    const meeting2 = calendar2[c2]
    if(meeting1[0] < meeting2[0]){
      mergedCalendars.push(meeting1)
      c1++
    } else {
      mergedCalendars.push(meeting2)
      c2++
    }
  }

  while (c1 < calendar1.length) {
    mergedCalendars.push(calendar1[c1])
    c1++
  }

  while (c2 < calendar2.length) {
    mergedCalendars.push(calendar2[c2])
    c2++
  }

  return mergedCalendars
}

function flattenCalendar(calendar) {
  const flattenedCalendar = [calendar[0]]
  for (let i = 1; i < calendar.length; i++) {
    const currentMeeting = calendar[i]
    const previousMeeing = flattenedCalendar[flattenedCalendar.length - 1]
    const [currentStart, currentEnd] = currentMeeting
    const [previousStart, previousEnd] = previousMeeing
    if(previousEnd >= currentStart){
      flattenedCalendar[flattenedCalendar.length - 1] = [previousStart, Math.max(previousEnd, currentEnd)]
    } else {
      flattenedCalendar.push(currentMeeting)
    }
  }

  return flattenedCalendar
}

function getCommonAvailabilities(calendar, duration) {
  const commonAvailabilities = []
  for (let i = 0; i < calendar.length - 1; i++) {
    const start = calendar[i][1]
    const end = calendar[i+1][0]
    if(end - start >= duration)
      commonAvailabilities.push([start, end])
  }
  return commonAvailabilities.map(slot => slot.map(minutesInTime));
}

function minutesInTime (minutes){
  const mins = minutes % 60
  const hours = Math.floor(minutes/60)
  const minsInString = mins < 10 ? '0' + mins.toString() : mins.toString()
  return `${hours}:${minsInString}` 
}

// Time complexity - O(c1 + c2)
// Space complexity - O(c1 + c2)
// c1 = calendar1.length, c2 = calendar2.length
```

### Similar Questions

- [Meeting Planner](https://leetcode.ca/all/1229.html)
- [Missing Ranges](https://leetcode.ca/all/163.html)
- [Employee Free Time](https://leetcode.ca/all/759.html)
- [Merge Intervals](https://leetcode.com/problems/merge-intervals/description/)