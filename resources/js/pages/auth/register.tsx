// import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
// import { login } from '@/routes';
// import { Form, Head } from '@inertiajs/react';
// import { LoaderCircle } from 'lucide-react';

// import InputError from '@/components/input-error';
// import TextLink from '@/components/text-link';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import AuthLayout from '@/layouts/auth-layout';

// export default function Register() {
//     return (
//         <AuthLayout
//             title="Create an account"
//             description="Enter your details below to create your account"
//         >
//             <Head title="Inscription" />
//             <Form
//                 {...RegisteredUserController.store.form()}
//                 resetOnSuccess={['password', 'password_confirmation']}
//                 disableWhileProcessing
//                 className="flex flex-col gap-6"
//             >
//                 {({ processing, errors }) => (
//                     <>
//                         <div className="grid gap-6">
//                           Bienvenue sur la page d'inscription😊
//                             <div className="grid gap-2">
//                                 <Label htmlFor="name">Nom <span className="text-cyan-600">*</span></Label>
//                                 <Input
//                                     id="name"
//                                     type="text"
//                                     required
//                                     autoFocus
//                                     tabIndex={1}
//                                     autoComplete="name"
//                                     name="name"
//                                     placeholder="Votre nom"
//                                 />
//                                 <InputError
//                                     message={errors.name}
//                                     className="mt-2"
//                                 />
//                             </div>

//                             <div className="grid gap-2">
//                                 <Label htmlFor="email">Adresse email <span className="text-cyan-600 font-bold">*</span></Label>
//                                 <Input
//                                     id="Votre adresse mail"
//                                     type="email"
//                                     required
//                                     tabIndex={2}
//                                     autoComplete="email"
//                                     name="email"
//                                     placeholder="frankamdev@example.com"
//                                 />
//                                 <InputError message={errors.email} />
//                             </div>

//                             <div className="grid gap-2">
//                                 <Label htmlFor="password">Mot de passe <span className="text-cyan-600">*</span></Label>
//                                 <Input
//                                     id="password"
//                                     type="password"
//                                     required
//                                     tabIndex={3}
//                                     autoComplete="new-password"
//                                     name="password"
//                                     placeholder="Votre mot de passe"
//                                 />
//                                 <InputError message={errors.password} />
//                             </div>

//                             <div className="grid gap-2">
//                                 <Label htmlFor="password_confirmation">
//                                     Confirmez mot de passe <span className="text-cyan-600">*</span>
//                                 </Label>
//                                 <Input
//                                     id="password_confirmation"
//                                     type="password"
//                                     required
//                                     tabIndex={4}
//                                     autoComplete="new-password"
//                                     name="password_confirmation"
//                                     placeholder="confirmer mot de passe"
//                                 />
//                                 <InputError
//                                     message={errors.password_confirmation}
//                                 />
//                             </div>

//                             <Button
//                                 type="submit"
//                                 className="mt-2 w-full"
//                                 tabIndex={5}
//                                 data-test="register-user-button"
//                             >
//                                 {processing && (
//                                     <LoaderCircle className="h-4 w-4 animate-spin" />
//                                 )}
//                                 Créer un compte
//                             </Button>
//                         </div>

//                         <div className="text-center text-sm text-muted-foreground">
//                             Vous avez déjà un compte?{' '}
//                             <TextLink href={login()} tabIndex={6}>
//                                 Se connecter
//                             </TextLink>
//                         </div>
//                     </>
//                 )}
//             </Form>
//         </AuthLayout>
//     );
// }



// import { Form, Head, useForm } from '@inertiajs/react';
// import { LoaderCircle } from 'lucide-react';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import InputError from '@/components/input-error';
// import TextLink from '@/components/text-link';
// import AuthLayout from '@/layouts/auth-layout';
// import { login } from '@/routes';

// export default function Register() {
//   const { data, setData, post, processing, errors } = useForm({
//     name: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//   });

//   const submit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Post vers le backend
//     post('/register', {
//       onSuccess: () => {
//         // La page est redirigée automatiquement, le flash sera capté par NotificationPopup
//       },
//     });
//   };

//   return (
//     <AuthLayout
//       title="Créer un compte"
//       description="Entrez vos informations pour créer votre compte"
//     >
//       <Head title="Inscription" />

//       <form onSubmit={submit} className="flex flex-col gap-6">
//         <div className="grid gap-6">
//           <div className="grid gap-2">
//             <Label htmlFor="name">
//               Nom <span className="text-cyan-600">*</span>
//             </Label>
//             <Input
//               id="name"
//               type="text"
//               required
//               autoFocus
//               tabIndex={1}
//               autoComplete="name"
//               value={data.name}
//               onChange={(e) => setData('name', e.target.value)}
//               placeholder="Votre nom"
//             />
//             <InputError message={errors.name} className="mt-2" />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="email">
//               Adresse email <span className="text-cyan-600">*</span>
//             </Label>
//             <Input
//               id="email"
//               type="email"
//               required
//               tabIndex={2}
//               autoComplete="email"
//               value={data.email}
//               onChange={(e) => setData('email', e.target.value)}
//               placeholder="exemple@domaine.com"
//             />
//             <InputError message={errors.email} />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="password">
//               Mot de passe <span className="text-cyan-600">*</span>
//             </Label>
//             <Input
//               id="password"
//               type="password"
//               required
//               tabIndex={3}
//               autoComplete="new-password"
//               value={data.password}
//               onChange={(e) => setData('password', e.target.value)}
//               placeholder="Votre mot de passe"
//             />
//             <InputError message={errors.password} />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="password_confirmation">
//               Confirmez le mot de passe <span className="text-cyan-600">*</span>
//             </Label>
//             <Input
//               id="password_confirmation"
//               type="password"
//               required
//               tabIndex={4}
//               autoComplete="new-password"
//               value={data.password_confirmation}
//               onChange={(e) => setData('password_confirmation', e.target.value)}
//               placeholder="Confirmer le mot de passe"
//             />
//             <InputError message={errors.password_confirmation} />
//           </div>

//           <Button
//             type="submit"
//             className="mt-2 w-full"
//             tabIndex={5}
//             disabled={processing}
//           >
//             {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
//             Créer un compte
//           </Button>
//         </div>

//         <div className="text-center text-sm text-muted-foreground mt-4">
//           Vous avez déjà un compte?{' '}
//           <TextLink href={login()} tabIndex={6}>
//             Se connecter
//           </TextLink>
//         </div>
//       </form>
//     </AuthLayout>
//   );
// }


import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import NotificationPopup from '@/components/NotificationPopup';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [flashMessage, setFlashMessage] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    post('/register', {
      onSuccess: (page) => {
        const flash = page.props.flash;
        if (flash?.success) {
          setFlashMessage(flash.success); // ✅ affiche le popup sur cette page
          reset('password', 'password_confirmation'); // réinitialise les mdp
        }
      },
    });
  };

  return (
    <AuthLayout title="Créer un compte" description="Entrez vos informations pour créer votre compte">
      {/* Popup sur la même page */}
      {flashMessage && <NotificationPopup message={flashMessage} onClose={() => setFlashMessage(null)} />}

      <form onSubmit={submit} className="flex flex-col gap-6">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Nom <span className="text-cyan-600">*</span></Label>
            <Input
              id="name"
              type="text"
              required
              autoFocus
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              placeholder="Votre nom"
            />
            <InputError message={errors.name} className="mt-2" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email <span className="text-cyan-600">*</span></Label>
            <Input
              id="email"
              type="email"
              required
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              placeholder="exemple@domaine.com"
            />
            <InputError message={errors.email} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe <span className="text-cyan-600">*</span></Label>
            <Input
              id="password"
              type="password"
              required
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              placeholder="Votre mot de passe"
            />
            <InputError message={errors.password} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password_confirmation">Confirmez le mot de passe <span className="text-cyan-600">*</span></Label>
            <Input
              id="password_confirmation"
              type="password"
              required
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
              placeholder="Confirmer le mot de passe"
            />
            <InputError message={errors.password_confirmation} />
          </div>

          <Button type="submit" className="mt-2 w-full" disabled={processing}>
            {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
            Créer un compte
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}
