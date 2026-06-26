import React from 'react'

const NavBar = () => {
  const links = ['Dashboard', 'Students', 'Attendance', 'Contact']

  return (
    <header className='border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-3'>
          <div className='flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-md'>
            NG
          </div>

          <div>
            <h1 className='text-lg font-semibold tracking-tight text-slate-800'>
              New Generation High School
            </h1>
            <p className='text-sm text-slate-500'>Student Portal</p>
          </div>
        </div>

        <nav className='hidden items-center gap-6 md:flex'>
          {links.map((link) => (
            <a
              key={link}
              href='#'
              className='text-sm font-medium text-slate-600 transition hover:text-blue-600'
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href='#'
          className='rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700'
        >
          Login
        </a>
      </div>
    </header>
  )
}

export default NavBar
