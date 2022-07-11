/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState } from 'react'
import config from '../../config'

const React17 = () => {
  const [microAppData, changeMicroAppData] = useState({msg: '来自基座的数据'})

  function handleCreate () {
    console.log('child-react17 创建了')
  }

  function handleBeforeMount () {
    console.log('child-react17 即将被渲染')
  }

  function handleMount () {
    console.log('child-react17 已经渲染完成')

    setTimeout(() => {
      changeMicroAppData({msg: '来自基座的新数据'})
    }, 2000)
  }

  function handleUnmount () {
    console.log('child-react17 卸载了')
  }

  function handleError () {
    console.log('child-react17 加载出错了')
  }

  function handleDataChange (e) {
    console.log('来自子应用 child-react17 的数据:', e.detail.data)
  }

  return (
    <div>
      <micro-app
        // 应用的名称； 必传； 每个name都对应一个应用，当多个应用同时渲染时，name不可以重复
        name='appname-react17'

        // 应用地址；必传；基座应用和子应用本质是在同一个页面，这里的url只是html地址，子应用的路由还是基于浏览器地址
        url={`${config.react17}/child/react17/`}
        data={microAppData}
        onCreated={handleCreate}
        onBeforemount={handleBeforeMount}
        onMounted={handleMount}
        onUnmount={handleUnmount}
        onError={handleError}
        onDataChange={handleDataChange}
      ></micro-app>
    </div>
  )
}

export default React17
