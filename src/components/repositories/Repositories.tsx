import { useQuery } from 'react-query'
import { useRecoilState, useRecoilValue } from 'recoil'

import { repos as reposAtom, view as viewAtom } from '../../atoms'
import Repo from '../repo/Repo'

const Repositories = () => {
  const [repos, setRepos] = useRecoilState(reposAtom)
  const view = useRecoilValue(viewAtom)

  const fetchRepos = async () => {
    const resp = await fetch(
      `https://api.github.com/users/laurapoc/repos?since=${view}`
    )
    const body = await resp.json()
    setRepos(body)
  }
  const { data } = useQuery(['repos', view], () => fetchRepos())

  console.log(data)

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
