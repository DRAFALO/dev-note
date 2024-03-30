import React from 'react'

interface Props {
  children: React.ReactNode
}

async function BlogDetailLayout({ children }: Readonly<Props>) {
  return (
    <body>
      <main className='container'>
        <div className='container flex gap-4'>
          <aside
            className='flex basis-16 flex-col gap-4'
            style={{ background: 'blue', minHeight: '400px' }}
          >
            hi1
          </aside>
          <main
            className='flex flex-1 flex-col'
            style={{ background: 'red', minHeight: '400px' }}
          >
            {children}
          </main>
          <aside
            className='flex basis-80 flex-col gap-4'
            style={{ background: 'green', minHeight: '400px' }}
          >
            hi3
          </aside>
        </div>
      </main>
    </body>
  )
}

export default BlogDetailLayout
