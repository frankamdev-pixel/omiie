<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ServicesDetailsController extends Controller
{
    public function index(){

      return Inertia::render('ServiceDetailsModal');
    }
}
