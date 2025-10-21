<?php

namespace App\Http\Controllers;

use App\Models\Devis;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DevisController extends Controller
{
 public function index()
 {
  $devis = Devis::latest()->get();
  return Inertia::render('Devis/DevisIndex', [
   'devis' => $devis
  ]);
 }
 public function store(Request $request)
 {
  $data = $request->validate([
   'name' => 'required|string|max:255',
   'email' => 'required|email|max:255',
   'phone' => 'required|string|max:20',
   'company' => 'nullable|string|max:255',
   'message' => 'required|string',
  ]);

  Devis::create($data);

  return redirect()->back()->with('success', 'Devis enregistré avec succès');
 }
}
