import InputError from '@/components/input-error'
import AppLayout from '@/layouts/app-layout'
import SettingsLayout from '@/layouts/settings/layout'
import { type BreadcrumbItem } from '@/types'
import { Transition } from '@headlessui/react'
import { Head, useForm } from '@inertiajs/react'
import { useRef } from 'react'

import HeadingSmall from '@/components/heading-small'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const breadcrumbs: BreadcrumbItem[] = [
 {
  title: 'Mot de passe',
  href: '/settings/password',
 },
]

export default function Password() {
 const passwordInput = useRef<HTMLInputElement>(null)
 const currentPasswordInput = useRef<HTMLInputElement>(null)

 const { data, setData, put, errors, processing, recentlySuccessful, reset } = useForm({
  current_password: '',
  password: '',
  password_confirmation: '',
 })

 const submit = (e: React.FormEvent) => {
  e.preventDefault()
  put('/settings/password', {
   onError: (errors) => {
    if (errors.password) passwordInput.current?.focus()
    if (errors.current_password) currentPasswordInput.current?.focus()
   },
   onSuccess: () => reset(),
  })
 }

 return (
  <AppLayout breadcrumbs={breadcrumbs}>
   <Head title="Modifier le mot de passe" />

   <SettingsLayout>
    <div className="space-y-6">
     <HeadingSmall
      title="Modifier le mot de passe"
      description="Assurez-vous d’utiliser un mot de passe long et sécurisé."
     />

     <form onSubmit={submit} className="space-y-6">
      {/* Mot de passe actuel */}
      <div className="grid gap-2">
       <Label htmlFor="current_password">Mot de passe actuel</Label>
       <Input
        id="current_password"
        ref={currentPasswordInput}
        name="current_password"
        type="password"
        value={data.current_password}
        onChange={(e) => setData('current_password', e.target.value)}
        autoComplete="current-password"
        placeholder="Entrez votre mot de passe actuel"
       />
       <InputError message={errors.current_password} />
      </div>

      {/* Nouveau mot de passe */}
      <div className="grid gap-2">
       <Label htmlFor="password">Nouveau mot de passe</Label>
       <Input
        id="password"
        ref={passwordInput}
        name="password"
        type="password"
        value={data.password}
        onChange={(e) => setData('password', e.target.value)}
        autoComplete="new-password"
        placeholder="Entrez un nouveau mot de passe"
       />
       <InputError message={errors.password} />
      </div>

      {/* Confirmation */}
      <div className="grid gap-2">
       <Label htmlFor="password_confirmation">Confirmer le mot de passe</Label>
       <Input
        id="password_confirmation"
        name="password_confirmation"
        type="password"
        value={data.password_confirmation}
        onChange={(e) => setData('password_confirmation', e.target.value)}
        autoComplete="new-password"
        placeholder="Confirmez le mot de passe"
       />
       <InputError message={errors.password_confirmation} />
      </div>

      {/* Bouton */}
      <div className="flex items-center gap-4">
       <Button type="submit" disabled={processing}>
        Enregistrer
       </Button>

       <Transition
        show={recentlySuccessful}
        enter="transition ease-in-out"
        enterFrom="opacity-0"
        leave="transition ease-in-out"
        leaveTo="opacity-0"
       >
        <p className="text-sm text-neutral-600">Mot de passe mis à jour ✅</p>
       </Transition>
      </div>
     </form>
    </div>
   </SettingsLayout>
  </AppLayout>
 )
}
