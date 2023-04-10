const now = new Date()
const week = now.getDay()
const hour = now.getHours()
const validWeek = week >= 1 && week <= 5
const validHour = hour >= 9 && hour < 22
if (validHour && validWeek) return
throw new Error('不在可提交时间段之内，拒绝内卷，从我做起！')