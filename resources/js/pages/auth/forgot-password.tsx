import { Form, Head, useForm } from '@inertiajs/react'
import { LoaderCircle } from 'lucide-react'

import InputError from '@/components/input-error'
import TextLink from '@/components/text-link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AuthLayout from '@/layouts/auth-layout'

export default function ForgotPassword({ status }: { status?: string }) {
 const { data, setData, post, processing, errors, reset } = useForm({
  email: '',
 })

 const submit = (e: React.FormEvent) => {
  e.preventDefault()
  post('/forgot-password', {
   onSuccess: () => reset(),
  })
 }

 return (
  <AuthLayout
   title="Mot de passe oublié"
   description="Entrez votre e-mail pour recevoir un lien de réinitialisation"
  >
   <Head title="Mot de passe oublié" />

   {status && (
    <div className="mb-4 text-center text-sm font-medium text-green-600">
     {status}
    </div>
   )}

   <div className="space-y-6">
    <form onSubmit={submit}>
     <div className="grid gap-2">
      <Label htmlFor="email">Adresse e-mail</Label>
      <Input
       id="email"
       type="email"
       name="email"
       value={data.email}
       onChange={(e) => setData('email', e.target.value)}
       autoComplete="off"
       autoFocus
       placeholder="email@example.com"
      />
      <InputError message={errors.email} />
     </div>

     <div className="my-6 flex items-center justify-start">
      <Button
       className="w-full"
       type="submit"
       disabled={processing}
       data-test="email-password-reset-link-button"
      >
       {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
       Envoyer le lien de réinitialisation
      </Button>
     </div>
    </form>

    <div className="space-x-1 text-center text-sm text-muted-foreground">
     <span>Ou, revenir à</span>
     <TextLink href="/login">la page de connexion</TextLink>
    </div>
   </div>
  </AuthLayout>
 )
}
