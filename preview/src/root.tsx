import { useEffect, useState } from 'react'
import { semanticClassName, themeLightClassName } from '../../starter/src'
import { Components } from './components'
import { indexClassName } from './root.css'

export function Root() {
  const [themeClassName] = useState(themeLightClassName)

  useEffect(() => {
    const bodyClassNames = [themeClassName, semanticClassName]

    document.body.classList.add(...bodyClassNames)

    return () => {
      document.body.classList.remove(...bodyClassNames)
    }
  }, [themeClassName])

  return (
    <div className={indexClassName}>
      <Components />
    </div>
  )
}
