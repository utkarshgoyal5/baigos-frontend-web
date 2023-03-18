import { Menu } from 'antd'
import Layout, { Header } from 'antd/es/layout/layout'
import React from 'react'

export default function Home() {
  return (
    <Layout className='h-screen-min'>
        <Header className='bg-white'>
            <div className='text-lime-500 text-4xl font-bold'>B<span className='text-3xl text-black font-bold'>aigos</span></div>
            <Menu
                theme='light'
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(15).fill(null).map((_, index) => {
                    const key = index + 1;
                    return {
                    key,
                    label: `nav ${key}`,
                    };
                })}
            />
        </Header>
    </Layout>
  )
}
