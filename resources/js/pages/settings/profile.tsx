import { type BreadcrumbItem, type SharedData } from '@/types'
import { Transition } from '@headlessui/react'
import { Head, Link, useForm, usePage } from '@inertiajs/react'

import DeleteUser from '@/components/delete-user'
import HeadingSmall from '@/components/heading-small'
import InputError from '@/components/input-error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AppLayout from '@/layouts/app-layout'
import SettingsLayout from '@/layouts/settings/layout'

const breadcrumbs: BreadcrumbItem[] = [
 {
  title: 'Profil',
  href: '/settings/profile',
 },
]

export default function Profile({
 mustVerifyEmail,
 status,
}: {
 mustVerifyEmail: boolean
 status?: string
}) {
 const { auth } = usePage<SharedData>().props

 const { data, setData, put, processing, errors, recentlySuccessful } = useForm({
  name: auth.user.name || '',
  email: auth.user.email || '',
 })

 const submit = (e: React.FormEvent) => {
  e.preventDefault()
  put('/settings/profile') // route Laravel pour mettre à jour le profil
 }

 return (
  <AppLayout breadcrumbs={breadcrumbs}>
   <Head title="Paramètres du profil" />

   <SettingsLayout>
    <div className="space-y-6">
     <HeadingSmall
      title="Informations du profil"
      description="Modifiez votre nom et votre adresse e-mail."
     />

     <form onSubmit={submit} className="space-y-6">
      {/* Nom */}
      <div className="grid gap-2">
       <Label htmlFor="name">Nom</Label>
       <Input
        id="name"
        name="name"
        value={data.name}
        onChange={(e) => setData('name', e.target.value)}
        required
        placeholder="Entrez votre nom complet"
       />
       <InputError className="mt-2" message={errors.name} />
      </div>

      {/* Email */}
      <div className="grid gap-2">
       <Label htmlFor="email">Adresse e-mail</Label>
       <Input
        id="email"
        type="email"
        name="email"
        value={data.email}
        onChange={(e) => setData('email', e.target.value)}
        required
        placeholder="Entrez votre adresse e-mail"
       />
       <InputError className="mt-2" message={errors.email} />
      </div>

      {/* Vérification d’e-mail */}
      {mustVerifyEmail && auth.user.email_verified_at === null && (
       <div>
        <p className="-mt-4 text-sm text-muted-foreground">
         Votre adresse e-mail n’est pas encore vérifiée.{' '}
         <Link
          href="/email/verification-notification"
          method="post"
          as="button"
          className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current dark:decoration-neutral-500"
         >
          Cliquez ici pour renvoyer l’e-mail de vérification.
         </Link>
        </p>

        {status === 'verification-link-sent' && (
         <div className="mt-2 text-sm font-medium text-green-600">
          Un nouveau lien de vérification a été envoyé à votre adresse e-mail.
         </div>
        )}
       </div>
      )}

      {/* Bouton + message */}
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
        <p className="text-sm text-neutral-600">Enregistré avec succès ✅</p>
       </Transition>
      </div>
     </form>
    </div>

    {/* Section suppression du compte */}
    <DeleteUser />
   </SettingsLayout>
  </AppLayout>
 )
}
