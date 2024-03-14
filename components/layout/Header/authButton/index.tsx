import { Button } from '@/components/ui/button'
import { LocaleKeys } from '@/types/locales';
import React from 'react'


interface AuthButtonProps {
  title: string,
  onClick: () => void,
  dictionary: LocaleKeys;
}
export default function AuthButton({ title, onClick, dictionary }: AuthButtonProps) {
  return (
    <div>
      <Button onClick={onClick} className="btn btn-primary">
        {dictionary[title as "Sign In" | "Sign Up"]}
      </Button>
    </div>
  )
}
