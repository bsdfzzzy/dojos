/*
* 给定一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，请你判断一个人是否能够参加这里面的全部会议。
*
* 示例 1：
* 输入：intervals = [[0,30],[5,10],[15,20]]
* 输出：false
*
* 示例 2：
* 输入：intervals = [[7,10],[2,4]]
* 输出：true
* */

export const ableToAttendAll = (intervals) => {
  const sortedIntervals = intervals.sort((intervalA, intervalB) => {
    return intervalA[0] < intervalB[0] ? -1 : 1
  })

  return !sortedIntervals.find((interval, index) => {
    if (index === 0) return false
    return interval[0] < sortedIntervals[index - 1][1]
  })
}

/*
* 给定一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi]，为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。
*
* 示例 1：
* 输入：intervals = [[0,30],[5,10],[15,20]]
* 输出：2
*
* 示例 2：
* 输入：intervals = [[7,10],[2,4]]
* 输出：1
* */

export const arrangeMeetingRooms = (intervals) => {
  const sortedIntervals = intervals.sort((intervalA, intervalB) => {
    return intervalA[0] < intervalB[0] ? -1 : 1
  })

  const meetingEndTimes = []

  for (let i = 0; i < sortedIntervals.length; i++) {
    if (i === 0) {
      meetingEndTimes.push(sortedIntervals[i][1])
    } else {
      const endTimeEarlierThanNextMeeting = meetingEndTimes.findIndex(time => time < sortedIntervals[i][0])
      if (endTimeEarlierThanNextMeeting !== -1) {
        meetingEndTimes.splice(endTimeEarlierThanNextMeeting, 1)
      }
      meetingEndTimes.push(sortedIntervals[i][1])
    }
  }

  return meetingEndTimes.length
}