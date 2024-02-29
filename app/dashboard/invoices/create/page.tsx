import { fetchCustomers } from '@/app/lib/data'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/create-form';
import React from 'react'

const page = async() => {
    const customers = await fetchCustomers();
  return (
    <main>
            <div>
                <Breadcrumbs breadcrumbs={[
                    {label: "Invoices", href: "/dashboard/invoices/"},
                    {
                        label: "Create Invioce",
                        href: "/invoices/dashboard/create",
                        active: true
                    }
                ]}/>
                <Form customers={customers}/>         
            </div>
    </main>
  )
}

export default page