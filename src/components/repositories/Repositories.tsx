import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { repos as reposAtom, view as viewAtom } from '../../atoms'
import Repo from '../repo/Repo'

const Repositories = () => {
  const [repos, setRepos] = useRecoilState(reposAtom)
  const view = useRecoilValue(viewAtom)

  useEffect(() => {
    const getRepos = async () => {
      const url = `https://api.github.com/users/laurapoc/repos?since=${view}`
      const resp = await fetch(url)
      const body = await resp.json()
      setRepos(body)
    }

    getRepos()
  }, [setRepos, view])

  console.log(repos)

  return (
    <div>
      <h4>Repositories since {view}</h4>
      {repos.map((repo: any) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default Repositories