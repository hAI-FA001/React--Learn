import avatar from '../../../assets/default-avatar.svg'

export function PersonList({ people }) {
  return (
    <ul>
      {people.map((p) => (
        <Person key={p.id} {...p} />
      ))}
    </ul>
  )
}

function Person({ name, nickName, images }) {
  //   const img = images && images[0] && images[0].small && images[0].small.url
  //   const img = images?.[0]?.small?.url || avatar
  const img = images?.[0]?.small?.url ?? avatar
  return (
    <li>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '50%',
          margin: 'auto',
        }}
      >
        <p>{name}</p>
        <p>{nickName || 'No Nickname'}</p>
        {/* {(p.images &&
          p.images.map((img) => (
            <img
              src={img.small.url}
              alt="Small image"
              style={{
                width: '3rem',
              }}
            />
          ))) || <p>No Image</p>} */}
        <img src={img} alt={name} style={{ width: '50px' }} />
      </div>
    </li>
  )
}
