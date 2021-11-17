type Props = {
  repo: any
}

const Repo = ({ repo }: Props) => {
  return <div className='card'>{repo.name}</div>
}

export default Repo
