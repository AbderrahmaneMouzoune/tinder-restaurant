'use client'
import useWebShare from '@/utils/hook/useWebShare'
import React from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import useClipboard from '@/utils/hook/useClipboard'

export default function ShareButton({
  title,
  text,
  url,
  children,
}: ShareData & { children: React.ReactNode }) {
  const { isSupported, share, error } = useWebShare()
  const { copyToClipboard, clipboardSuccess, clipboardError } = useClipboard()

  const handleShare = async () => {
    share({
      title,
      text,
      url,
    })

    if (url) {
      await copyToClipboard(url)
    }
  }

  if (error) {
    console.log(error)
    toast.error(`Une erreur est survenu pour le partage de ${url}, : ${error}`)
  }

  if (clipboardSuccess) {
    toast.success(`Copie de ${url}`)
  }

  if (!isSupported) {
    return <p>Lien de partage : {url}</p>
  }

  return <Button onClick={handleShare}>{children}</Button>
}
