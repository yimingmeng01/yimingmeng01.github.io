(() => {
  // 等待页面加载完成和 PJAX 切换完成（解决页面切换消失的问题）
  const initRuntime = () => {
    const el = document.getElementById('realtime_duration')
    if (!el) return
    
    // 这里改成你自己博客的上线日期
    const startDate = dayjs('2024-01-01T00:00:00+08:00')
    
    const updateTime = () => {
      const now = dayjs()
      const diffDays = now.diff(startDate, 'day')
      el.innerHTML = `🎉 网站已运行 ${diffDays} 天`
    }
    
    updateTime()
    setInterval(updateTime, 1000)
  }
  
  // 兼容 PJAX，解决切换页面后计时器消失的问题
  document.addEventListener('DOMContentLoaded', initRuntime)
  document.addEventListener('pjax:complete', initRuntime)
})()