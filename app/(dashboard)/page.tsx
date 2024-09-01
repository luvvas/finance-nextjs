"use client"

import { Button } from "@/components/ui/button"
import { useNewAccounts } from "@/features/accounts/hooks/use-new-account"

export default function Home() {
  const { onOpen } = useNewAccounts()

  return (
    <div>
      <Button onClick={onOpen}>
        Add an Account
      </Button>
    </div>
  )
}