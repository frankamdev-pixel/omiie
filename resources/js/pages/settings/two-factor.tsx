import HeadingSmall from '@/components/heading-small'
import TwoFactorRecoveryCodes from '@/components/two-factor-recovery-codes'
import TwoFactorSetupModal from '@/components/two-factor-setup-modal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useTwoFactorAuth } from '@/hooks/use-two-factor-auth'
import AppLayout from '@/layouts/app-layout'
import SettingsLayout from '@/layouts/settings/layout'
import { Head, useForm } from '@inertiajs/react'
import { ShieldBan, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

interface TwoFactorProps {
 requiresConfirmation?: boolean
 twoFactorEnabled?: boolean
}

export default function TwoFactor({
 requiresConfirmation = false,
 twoFactorEnabled = false,
}: TwoFactorProps) {
 const {
  qrCodeSvg,
  hasSetupData,
  manualSetupKey,
  clearSetupData,
  fetchSetupData,
  recoveryCodesList,
  fetchRecoveryCodes,
  errors,
 } = useTwoFactorAuth()

 const [showSetupModal, setShowSetupModal] = useState(false)

 // On prépare les formulaires avec Inertia
 const disableForm = useForm({})
 const enableForm = useForm({})

 // Petites fonctions pour simplifier les requêtes
 const handleEnable = (e: React.FormEvent) => {
  e.preventDefault()
  enableForm.post(route('two-factor.enable'), {
   onSuccess: () => setShowSetupModal(true),
  })
 }

 const handleDisable = (e: React.FormEvent) => {
  e.preventDefault()
  disableForm.delete(route('two-factor.disable'))
 }

 return (
  <AppLayout breadcrumbs={[{ title: 'Authentification à deux facteurs', href: '/settings/two-factor' }]}>
   <Head title="Authentification à deux facteurs" />
   <SettingsLayout>
    <div className="space-y-6">
     <HeadingSmall
      title="Authentification à deux facteurs"
      description="Gérez vos paramètres de sécurité pour renforcer la protection de votre compte."
     />

     {twoFactorEnabled ? (
      <div className="flex flex-col items-start space-y-4">
       <Badge variant="default">Activée</Badge>
       <p className="text-muted-foreground">
        Quand la double authentification est activée, vous devrez entrer un code sécurisé depuis votre application
        d’authentification (Google Authenticator, Authy, etc.) lors de la connexion.
       </p>

       <TwoFactorRecoveryCodes
        recoveryCodesList={recoveryCodesList}
        fetchRecoveryCodes={fetchRecoveryCodes}
        errors={errors}
       />

       <form onSubmit={handleDisable}>
        <Button
         variant="destructive"
         type="submit"
         disabled={disableForm.processing}
        >
         <ShieldBan className="mr-2 h-4 w-4" />
         Désactiver 2FA
        </Button>
       </form>
      </div>
     ) : (
      <div className="flex flex-col items-start space-y-4">
       <Badge variant="destructive">Désactivée</Badge>
       <p className="text-muted-foreground">
        Activez la double authentification pour renforcer la sécurité de votre compte.
        Un code temporaire sera requis à chaque connexion.
       </p>

       {hasSetupData ? (
        <Button onClick={() => setShowSetupModal(true)}>
         <ShieldCheck className="mr-2 h-4 w-4" />
         Continuer la configuration
        </Button>
       ) : (
        <form onSubmit={handleEnable}>
         <Button type="submit" disabled={enableForm.processing}>
          <ShieldCheck className="mr-2 h-4 w-4" />
          Activer 2FA
         </Button>
        </form>
       )}
      </div>
     )}

     <TwoFactorSetupModal
      isOpen={showSetupModal}
      onClose={() => setShowSetupModal(false)}
      requiresConfirmation={requiresConfirmation}
      twoFactorEnabled={twoFactorEnabled}
      qrCodeSvg={qrCodeSvg}
      manualSetupKey={manualSetupKey}
      clearSetupData={clearSetupData}
      fetchSetupData={fetchSetupData}
      errors={errors}
     />
    </div>
   </SettingsLayout>
  </AppLayout>
 )
}
