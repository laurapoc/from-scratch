import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const getRepos = async () => {
      const url = `https://api.github.com/users/laurapoc/repos?since=2020-12-01T09:07:21.20-07:00`
      const resp = await fetch(url)
      const body = await resp.json()
      console.log(body)
    }

    getRepos()
  }, [])

  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

export default App
