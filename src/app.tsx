import { FirstComponent } from "./assets/components/firstComponent"

export function App() {
  const name: string = 'Giovani'

  const greetUser = (name: string): string => {
    return `Olá ${name}`
  }

  return (
    <div>
      <h1>Typescript com React</h1>
      <h2>Name: {name}</h2>
      <h3>{greetUser(name)}</h3>
      <FirstComponent />
    </div>
  )
}