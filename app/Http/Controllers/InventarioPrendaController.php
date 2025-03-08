<?php

namespace App\Http\Controllers;

use App\Models\InventarioPrenda;
use App\Models\Prenda;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InventarioPrendaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $inventarios = InventarioPrenda::with([
            'prenda:id,nombre',
            'alerta:id,nombre'
        ])
            ->orderBy('id', 'desc')
            ->get();

        return Inertia::render('InventarioPrendas/Index', [
            'inventarios' => $inventarios
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $prendas = Prenda::all();

        return Inertia::render('InventarioPrendas/Create', [
            'prendas' => $prendas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $validated = $request->validate([
                'cantidad' => 'required|numeric|min:0',
                'prenda_id' => 'required|exists:prendas,id'
            ]);

            InventarioPrenda::create($validated);

            return redirect()->route('inventario-prendas.index')
                ->with('success', 'Inventario creado correctamente');
        } catch (\Exception $e) {
            return redirect()->back()
                ->withErrors(['error' => $e->getMessage()])
                ->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(InventarioPrenda $inventarioPrenda)
    {
        $inventarioPrenda->load('prenda.nombre', 'alerta.nombre');

        return Inertia::render('InventarioPrendas/Show', [
            'inventario' => $inventarioPrenda
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InventarioPrenda $inventarioPrenda)
    {
        $prendas = Prenda::all();

        return Inertia::render('InventarioPrendas/Edit', [
            'prendas' => $prendas,
            'inventarioPrenda' => $inventarioPrenda
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InventarioPrenda $inventarioPrenda)
    {
        $validated = $request->validate([
            'cantidad' => 'required|numeric|min:0',
            'prenda_id' => 'required|exists:prendas,id'
        ]);

        $inventarioPrenda->update($validated);

        return redirect()->route('inventario-prendas.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InventarioPrenda $inventarioPrenda)
    {
        $inventarioPrenda->delete();

        return redirect()->route('inventario-prendas.index')
            ->with('success', 'Inventario de prenda eliminado exitosamente');
    }
}
