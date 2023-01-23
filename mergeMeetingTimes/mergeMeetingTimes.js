// https://www.interviewcake.com/question/javascript/merging-ranges?course=fc1§ion=array-and-string-manipulation

function mergeRanges(meetings) {
    const len = meetings.length;
    if(len <= 1) return meetings;

    //make a copy of the array
    const meetingsCopy = meetings;
    //reorder the array by start time so we can compare more easily
    const sorted = meetingsCopy.sort((a,b) => a.startTime - b.startTime);
    const mergedMeetings = [];

    let first = sorted[0];
    let current;

    for (let i = 1; i < len; i++) {
        current = sorted[i];
        // if the start time of the second meeting is earlier than the end of the first meeting, assign the merged variable to the combination of the two slots
        if(current.startTime <= first.endTime) {
            const latestEnd = Math.max(current.endTime, merged.endTime);
            first = {startTime: merged.startTime, endtime: latestEnd};
        }
        else {
            // if there is no overlap, push the current meeting to the final array and move the pointer to the next element
            mergedMeetings.push(first);
            first = current;
        }
    }

    mergedMeetings.push(merged);
    return mergedMeetings;
}

mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
//should return [{ startTime: 1, endTime: 4 }];
// Big O notation is O(n log n) for time complexity and O(n)