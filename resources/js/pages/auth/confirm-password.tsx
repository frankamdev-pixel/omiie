import InputError from '@/components/input-error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AuthLayout from '@/layouts/auth-layout'
import { Form, Head, useForm } from '@inertiajs/react'
import { LoaderCircle } from 'lucide-react'

export default function ConfirmPassword() {
 const { data, setData, post, processing, errors, reset } = useForm({
  password: '',
 })

 const submit = (e: React.FormEvent) => {
  e.preventDefault()
  post('/password/confirm', {
   onSuccess: () => reset(),
  })
 }

 return (
  <AuthLayout
   title="Confirmez votre mot de passe"
   description="Vous accédez à une zone sécurisée de l’application. Merci de confirmer votre mot de passe."
  >
   <Head title="Confirmer le mot de passe" />

   <form onSubmit={submit} className="space-y-6">
    <div className="grid gap-2">
     <Label htmlFor="password">Mot de passe</Label>
     <Input
      id="password"
      type="password"
      name="password"
      value={data.password}
      onChange={(e) => setData('password', e.target.value)}
      placeholder="Mot de passe"
      autoComplete="current-password"
      autoFocus
     />
     <InputError message={errors.password} />
    </div>

    <div className="flex items-center">
     <Button className="w-full" disabled={processing}>
      {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
      Confirmer le mot de passe
     </Button>
    </div>
   </form>
  </AuthLayout>
 )
}
