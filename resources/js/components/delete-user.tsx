import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
 Dialog,
 DialogClose,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogTitle,
 DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function DeleteUser() {
 const passwordInput = useRef<HTMLInputElement>(null);

 // ✅ useForm pour gérer le mot de passe côté frontend
 const { data, setData, post, processing, errors, reset } = useForm({
  password: '',
 });

 const submit = (e: React.FormEvent) => {
  e.preventDefault();
  post('/user/delete', {
   onError: () => passwordInput.current?.focus(),
   onSuccess: () => reset(),
  });
 };

 return (
  <div className="space-y-6">
   <HeadingSmall
    title="Supprimer le compte"
    description="Supprimez votre compte et toutes ses données"
   />

   <div className="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
    <div className="relative space-y-0.5 text-red-600 dark:text-red-100">
     <p className="font-medium">Attention</p>
     <p className="text-sm">
      Soyez prudent·e, cette action est irréversible.
     </p>
    </div>

    <Dialog>
     <DialogTrigger asChild>
      <Button variant="destructive" data-test="delete-user-button">
       Supprimer le compte
      </Button>
     </DialogTrigger>

     <DialogContent>
      <DialogTitle>
       Êtes-vous sûr·e de vouloir supprimer votre compte ?
      </DialogTitle>
      <DialogDescription>
       Une fois supprimé, toutes vos données seront définitivement perdues.
       Veuillez entrer votre mot de passe pour confirmer.
      </DialogDescription>

      <form onSubmit={submit} className="space-y-6">
       <div className="grid gap-2">
        <Label htmlFor="password" className="sr-only">
         Mot de passe
        </Label>
        <Input
         id="password"
         type="password"
         name="password"
         ref={passwordInput}
         value={data.password}
         onChange={(e) => setData('password', e.target.value)}
         placeholder="Mot de passe"
         autoComplete="current-password"
        />
        <InputError message={errors.password} />
       </div>

       <DialogFooter className="gap-2">
        <DialogClose asChild>
         <Button variant="secondary" onClick={() => reset()}>
          Annuler
         </Button>
        </DialogClose>

        <Button variant="destructive" disabled={processing} asChild>
         <button type="submit" data-test="confirm-delete-user-button">
          Supprimer le compte
         </button>
        </Button>
       </DialogFooter>
      </form>
     </DialogContent>
    </Dialog>
   </div>
  </div>
 );
}
