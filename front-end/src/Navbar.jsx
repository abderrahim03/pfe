<<<<<<< HEAD


=======
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Ajout Stationnements', href: '/ajoutStationnements', current: true, desabled: false },
  { name: 'Chercher Parking', href: '/chercherParking', current: false, desabled: false },
  { name: 'ConsulterDepenses', href: '/consulterDepenses', current: false, desabled: false },
  { name: 'ServiceNombre', href: '/serviceNombre', current: false, desabled: false },
  { name: 'login', href: '/login', current: true, desabled: false },
]
>>>>>>> af0e920 (m)

export default function Navbar() {
  const isLogin = localStorage.getItem('isLogin')
  const [login, setLogin] = useState(false)

  useEffect(() => {
    if (isLogin == 'true') {
      navigation[4].desabled = true
      setLogin(true)
    }
    if (isLogin == 'false') {
      navigation[0].desabled = true
      navigation[1].desabled = true
      navigation[2].desabled = true
      navigation[3].desabled = true
      navigation[4].desabled = false
      setLogin(false)
    }
    console.log(login, isLogin);
  }, [])
  return (
<<<<<<< HEAD
=======
    <header>
        <h2 class="logo"> Logo</h2>
        <nav class="navigation">
            {
              login ?  navigation.map((item) => (
                !item.desabled ? 
                <Link
                  key={item.name}
                  to={item.href}
                >
                {item.name}
                </Link> : ''
              )) : <Link
                    to='/login'
                  >
                  Login
                  </Link>
            }
            {
              login ? <Link className="btnLogin-popup p-4 py-3" to='/account'>Account</Link> : ''
            }
        </nav>
    </header>
>>>>>>> af0e920 (m)
    
    <h1 className=" text-4xl text-white">hello</h1>
  )
}
