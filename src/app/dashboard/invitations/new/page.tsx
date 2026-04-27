import { Suspense } from 'react'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { Spinner } from '@/components/ui/spinner'
import { NewInvitationClient } from './new-client'

export default function NewInvitationPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-muted/30 p-4 lg:p-8">
          <Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <Spinner className="size-8" />
            </div>
          }>
            <NewInvitationClient />
          </Suspense>
        </main>
      </div>
    </div>
  )
}
