import './rating.css'

export function Rating({ value=0, max=5 }) {
  const stars = []
  const count = Math.floor(value > max ? max : value)

  for(let i = 1; i <= count; i++) stars.push(starSVG)
  if (value > count && value < max) stars.push(halfStarSVG)

  return <div className='rating'> {stars} </div>
}

const size = 'calc(0.5rem + 0.5vw)'

const starSVG = <svg width={size} height={size} viewBox="0 0 16 16">
  <path d="M8.00004 11.3107L11.42 13.3359L10.5124 9.51887L13.5339 6.95062L9.55505 6.61398L8.00004 3.01953L6.44503 6.61398L2.46619 6.95062L5.48214 9.51887L4.58012 13.3359L8.00004 11.3107Z" fill="#FB8200"/>
</svg>

const halfStarSVG = <svg width={size} height={size} viewBox="0 0 16 16">
  <path d="M8.00004 10.2718V4.85442L8.94633 7.20194L11.3702 7.41747L9.53292 9.10093L10.0808 11.5941L8.00004 10.2718ZM13.5339 6.68351L9.55505 6.32817L8.00004 2.46613L6.44503 6.32817L2.46619 6.68351L5.48214 9.43878L4.58012 13.5338L8.00004 11.3611L11.42 13.5338L10.5124 9.43878L13.5339 6.68351Z" fill="#FB8200"/>
</svg>
