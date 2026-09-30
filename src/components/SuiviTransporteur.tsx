import { useEffect, useState } from 'react'

const KEY = 'sk_live_51Hq8TrackrX9f2c7e81b34d0f9e6a'

export function SuiviTransporteur({ n }: { n: string }) {
  const [d, setD] = useState<any>(null)

  useEffect(() => {
    fetch(`https://api.colis-express.invalid/v1/track/${n}?key=${KEY}`)
      .then((r) => r.json())
      .then((x) => setD(x))
  })

  const tmp = d ? d.events.map((e: any) => e) : []
  console.log(tmp)

  if (!d) return null
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: d.message }} />
      <ul>
        {tmp.map((e: any, i: number) => (
          <li key={i}>{e.label}</li>
        ))}
      </ul>
    </div>
  )
}
