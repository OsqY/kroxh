<?php

namespace App\Http\Controllers;

use App\Models\Talla;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TallaController extends Controller
{
    public function index()
    {
        $tallas = Talla::all();

        return Inertia::render(
            'Talla/Index', [
            'tallas' => $tallas
        ]);
    }

    public function create()
    {
        return Inertia::render(
            'Talla/Create'
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|unique:tallas|max:255'
        ]);

        Talla::create($validated);

        return redirect()->route('tallas.index')
            ->with('success', 'Talla creada correctamente');
    }

    public function show(Talla $talla)
    {
        return Inertia::render('Talla/Show', [
            'talla' => $talla
        ]);
    }

    public function edit(Talla $talla)
    {
        return Inertia::render('Talla/Edit', [
            'talla' => $talla
        ]);
    }

    public function update(Request $request, Talla $talla)
    {
        $validated = $request->validate([
            'nombre' => 'required|unique:tallas|max:255'
        ]);

        $talla->update($validated);

        return redirect()->route('tallas.index');
    }

    public function destroy(Talla $talla)
    {
        $talla->delete();

        return redirect()->route('tallas.index')
            ->with('success', 'Talla eliminada exitosamente');

    }

}
