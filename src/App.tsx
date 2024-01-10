import { Outlet } from 'react-router-dom'

import NavBar from './assets/components/Navbar/Navbar'

function App() {
	return (
		<>
			<div className='container mx-auto min-h-screen'>
				<NavBar />
				<Outlet />
			</div>
		</>
	)
}

export default App
