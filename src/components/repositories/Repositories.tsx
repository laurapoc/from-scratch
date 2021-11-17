import { useQuery } from 'react-query'
import { useRecoilState, useRecoilValue } from 'recoil'

import Repo from '../repo/Repo'

import { repos as reposAtom, view as viewAtom } from '../../atoms'
import { formatDate } from '../../helpers/constants'

const Repositories = () => {
  const [repos, setRepos] = useRecoilState(reposAtom)
  const view = useRecoilValue(viewAtom)

  const date = formatDate(view)

  const fetchRepos = async () => {
    const resp = await fetch(
      `https://api.github.com/users/laurapoc/repos?since=${view}`
    )
    const body = await resp.json()
    setRepos(body)
  }
  /* eslint-disable */
  const { data } = useQuery(['repos', view], () => fetchRepos())

  return (
    <div>
      <h4>Repositories since {date}</h4>
      {repos.map((repo: any) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default Repositories
