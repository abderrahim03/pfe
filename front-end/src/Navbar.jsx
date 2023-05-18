import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Ajout Stationnements', href: '/ajoutStationnements', current: true },
  { name: 'Chercher Parking', href: '/chercherParking', current: false },
  { name: 'ConsulterDepenses', href: '/consulterDepenses', current: false },
  { name: 'ServiceNombre', href: '/serviceNombre', current: false },
  { name: 'login', href: '/login', current: true },
]

export default function Example() {
  return (
    <header>
        <h2 class="logo"> Logo</h2>
        <nav class="navigation">
            {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    ))}
            <button class="btnLogin-popup">Account</button>
        </nav>
    </header>
    
  )
}
