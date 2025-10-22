// import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
// import InputError from '@/components/input-error';
// import TextLink from '@/components/text-link';
// import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import AuthLayout from '@/layouts/auth-layout';
// import { register } from '@/routes';
// import { request } from '@/routes/password';
// import { Form, Head } from '@inertiajs/react';
// import { LoaderCircle } from 'lucide-react';

// interface LoginProps {
//  status?: string;
//  canResetPassword: boolean;
// }

// export default function Login({ status, canResetPassword }: LoginProps) {
//  return (
//   <AuthLayout
//    title="Log in to your account"
//    description="Enter your email and password below to log in"
//   >
//    <Head title="Log in" />

//    <Form
//     {...AuthenticatedSessionController.store.form()}
//     resetOnSuccess={['password']}
//     className="flex flex-col gap-6"
//    >
//     {({ processing, errors }) => (
//      <>
//       <div className="grid gap-6">
//        <div className="grid gap-2">
//         <Label htmlFor="email">Email address</Label>
//         <Input
//          id="email"
//          type="email"
//          name="email"
//          required
//          autoFocus
//          tabIndex={1}
//          autoComplete="email"
//          placeholder="email@example.com"
//         />
//         <InputError message={errors.email} />
//        </div>

//        <div className="grid gap-2">
//         <div className="flex items-center">
//          <Label htmlFor="password">Password</Label>
//          {canResetPassword && (
//           <TextLink
//            href={request()}
//            className="ml-auto text-sm"
//            tabIndex={5}
//           >
//            Forgot password?
//           </TextLink>
//          )}
//         </div>
//         <Input
//          id="password"
//          type="password"
//          name="password"
//          required
//          tabIndex={2}
//          autoComplete="current-password"
//          placeholder="Password"
//         />
//         <InputError message={errors.password} />
//        </div>

//        <div className="flex items-center space-x-3">
//         <Checkbox
//          id="remember"
//          name="remember"
//          tabIndex={3}
//         />
//         <Label htmlFor="remember">Remember me</Label>
//        </div>

//        <Button
//         type="submit"
//         className="mt-4 w-full"
//         tabIndex={4}
//         disabled={processing}
//         data-test="login-button"
//        >
//         {processing && (
//          <LoaderCircle className="h-4 w-4 animate-spin" />
//         )}
//         Log in
//        </Button>
//       </div>

//       <div className="text-center text-sm text-muted-foreground">
//        Don't have an account?{' '}
//        <TextLink href={register()} tabIndex={5}>
//         Sign up
//        </TextLink>
//       </div>
//      </>
//     )}
//    </Form>

//    {status && (
//     <div className="mb-4 text-center text-sm font-medium text-green-600">
//      {status}
//     </div>
//    )}
//   </AuthLayout>
//  );
// }







import { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword: boolean }) {
 const { data, setData, post, processing, errors } = useForm({
  email: '',
  password: '',
  remember: false,
 });

 const [showPassword, setShowPassword] = useState(false);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  post('/login');
 };

 return (
  <AuthLayout
   title="Connexion"
   description="Entrez vos identifiants pour vous connecter"
  >
   <Head title="Connexion" />

   <form onSubmit={handleSubmit} className="flex flex-col gap-6">
    <div className="grid gap-6">
     {/* Email */}
     <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input
       id="email"
       type="email"
       name="email"
       value={data.email}
       onChange={(e) => setData('email', e.target.value)}
       required
       placeholder="email@example.com"
      />
      <InputError message={errors.email} />
     </div>

     {/* Mot de passe + Afficher */}
     <div className="grid gap-2 relative">
      <div className="flex items-center">
       <Label htmlFor="password">Mot de passe</Label>
       {canResetPassword && (
        <TextLink href="/forgot-password" className="ml-auto text-sm">
         Mot de passe oublié ?
        </TextLink>
       )}
      </div>

      <div className="relative">
       <Input
        id="password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={data.password}
        onChange={(e) => setData('password', e.target.value)}
        required
        placeholder="••••••••"
        className="pr-10"
       />
       <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400"
       >
        {showPassword ? (
         <EyeOff className="h-4 w-4" />
        ) : (
         <Eye className="h-4 w-4" />
        )}
       </button>
      </div>

      <InputError message={errors.password} />
     </div>

     {/* Remember me */}
     <div className="flex items-center space-x-3">
      <Checkbox
       id="remember"
       name="remember"
       checked={data.remember}
       onCheckedChange={(checked) => setData('remember', !!checked)}
      />
      <Label htmlFor="remember">Se souvenir de moi</Label>
     </div>

     {/* Bouton */}
     <Button type="submit" className="mt-4 w-full" disabled={processing}>
      {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
      Se connecter
     </Button>
    </div>

    {/* Lien inscription */}
    <div className="text-center text-sm text-muted-foreground">
     Pas encore de compte ? <TextLink href="/register">S’inscrire</TextLink>
    </div>
   </form>

   {status && (
    <div className="mt-4 text-center text-sm font-medium text-green-600">
     {status}
    </div>
   )}
  </AuthLayout>
 );
}
