import { useQuery } from 'react-query'
import { useRecoilState, useRecoilValue } from 'recoil'

import Repo from '../repo/Repo'

import { repos as reposAtom, view as viewAtom } from '../../atoms'
import { formatDate } from '../../helpers/constants'

const Repositories = () => {
  const [repos, setRepos] = useRecoilState(reposAtom)
  const view = useRecoilValue(viewAtom)

  const date = formatDate(view)

  const fetchRepos = async (key: string, date: string) => {
    const resp = await fetch(
      `https://api.github.com/users/laurapoc/repos?since=${date}`
    )
    const body = await resp.json()
    setRepos(body)
  }
  const { status } = useQuery(['repos', view], () =>
    fetchRepos('repos', view)
  )

  return (
    <div>
      <h4>Repositories since {date}</h4>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data...</div>}
      {repos.map((repo: any) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default Repositories
