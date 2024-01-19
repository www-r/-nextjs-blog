// Convert Javascript date to Pg YYYY MM DD HH MI SS

export function formatDate() {
  const date = new Date()
  const renderMonth = (month) => {
    if(month === 1 | 2 | 3| 4| 5 |6| 7 | 8 | 9){
      return '0'+month
    } else month
  }
  const time = date.getFullYear() + '-' + renderMonth(date.getMonth()+1) + '-' + date.getDate()
  return time
}